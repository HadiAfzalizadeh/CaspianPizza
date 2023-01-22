import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import CategoryService from "../Services/category.service";

  const initialState = {page: 1 , categoryId: -1, hasMore: true , categoryItems: [] };

  export const getProductByCategory = createAsyncThunk(
    "basket/getProductByCategory",
    async ({PageSize}, thunkAPI) => {
      try {
        const data = await CategoryService.getProductByCategory(page, categoryId);
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
          return { categoryId: action.payload };
        },
        setProductDetailId: (state, action) => {
          return { ProductDetailId: action.payload };
        }
    },
    extraReducers: {
      [getProductByCategory.fulfilled]: (state, action) => {
        state.categoryItems = state.categoryItems.concat(action.payload.data)
        if(action.payload.meta.totalRows === state.categoryItems.length){
          state.hasMore = false
      }
      }
  }
  });

export const { setCategotyId, setOrientation , setProductDetailId } = categorySlice.actions
export default categorySlice.reducer;

