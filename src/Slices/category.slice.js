import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import CategoryService from "../Services/category.service";

  const initialState = { categoryId: -1, hasMore: true, categoryItems: [] };


  export const getProductByCategory = createAsyncThunk(
    "basket/getProductByCategory",
    async ({page, pageSize}, { getState } , thunkAPI) => {
      const state = getState()
      try {
        const data = await CategoryService.getProductByCategory(page, pageSize, state.category.categoryId);
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
        },
        clearItems: (state) => {
          state.categoryItems = [];
        }
    },
    extraReducers: {
      [getProductByCategory.fulfilled]: (state, action) => {
        state.categoryItems = state.categoryItems.concat(action.payload.data.data)
        if(action.payload.data.meta.totalRows === state.categoryItems.length){
          state.hasMore = false
        }
      }
    }
  });

export const { setCategoryId, setProductDetailId, clearItems } = categorySlice.actions
export default categorySlice.reducer;

