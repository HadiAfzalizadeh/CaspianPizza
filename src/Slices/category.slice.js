import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import CategoryService from "../Services/category.service";

  const initialState = { page: 1, categoryId: -1, hasMore: true, categoryItems: [] };


  export const getProductByCategory = createAsyncThunk(
    "basket/getProductByCategory",
    async ({categoryId}, { getState } , thunkAPI) => {
      const state = getState();
      try {
        const data = await CategoryService.getProductByCategory(categoryId === 0 ? state.category.page : 1, categoryId === 0 ? 4 : 8, categoryId === 0 ? state.category.categoryId : categoryId);
        return { data: data }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );


  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
          return { categoryId: action.payload , hasMore: state.cartItems, categoryItems: state.categoryItems};
        },
        setProductDetailId: (state, action) => {
          return { ProductDetailId: action.payload };
        }
    },
    extraReducers: {
      [getProductByCategory.fulfilled]: (state, action) => {
        if(action.payload.data.meta.currentPage === 1){
          state.categoryItems = action.payload.data.data.length !==0 ? action.payload.data.data : [];
          state.page = 3;
          state.categoryId = action.payload.data.data[0].productCategoryId;
        }else{
          state.categoryItems = state.categoryItems.concat(action.payload.data.data);
          state.page++;
        }
        if(action.payload.data.meta.totalRows === state.categoryItems.length){
          state.hasMore = false
        }
      }
    }
  });

export const { setCategoryId, setProductDetailId } = categorySlice.actions
export default categorySlice.reducer;

