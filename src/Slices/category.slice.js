import { createSlice } from "@reduxjs/toolkit";

  const initialState = { categoryId: -1 };

  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
          return { categoryId: action.payload };
        },
        setProductDetailId: (state, action) => {
          return { ProductDetailId: action.payload , categoryId: state.categoryId};
        }
    }
  });

export const { setCategoryId, setProductDetailId } = categorySlice.actions
export default categorySlice.reducer;

