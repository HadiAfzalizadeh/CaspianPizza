import { createSlice } from "@reduxjs/toolkit";

  const categorySlice = createSlice({
    name: "category",
    initialState: {
      categoryId: 0,
      categoryTitle: '',
      ProductDetailId: 0,
      countProducts: 0
    },
    reducers: {
        setCategory: (state, action) => {
          return { categoryId: action.payload.categoryId, categoryTitle: action.payload.categoryTitle, ProductDetailId: state.ProductDetailId, countProducts: state.countProducts };
        },
        setProductDetailId: (state, action) => {
          return { ProductDetailId: action.payload , categoryId: state.categoryId, categoryTitle: state.categoryTitle, countProducts: state.countProducts};
        },
        setCountProducts: (state, action) => {
          return { countProducts: action.payload, categoryId: state.categoryId, categoryTitle: state.categoryTitle, ProductDetailId: state.ProductDetailId };
        }
    }
  });

export const { setCategory, setProductDetailId, setCountProducts } = categorySlice.actions
export default categorySlice.reducer;

