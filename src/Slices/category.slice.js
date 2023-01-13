import { createSlice } from "@reduxjs/toolkit";

var orientation = JSON.parse(localStorage.getItem("orientation"));

    orientation = orientation === null ? "portrait" : orientation;

  const initialState = { currentCategotyId: -1, currentCategotyPage: 3 , categotyHasMore: true , categotyItems: [] , itemOrientation: orientation};

  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategotyId: (state, action) => {
          return { currentCategotyId: action.payload };
        },
        setOrientation: (state, action) => {
            return { itemOrientation: action.payload };
        },
        setProductDetailId: (state, action) => {
          return { ProductDetailId: action.payload };
        }
    }
  });

const { reducer, actions } = categorySlice;

export const { setCategotyId, setOrientation , setProductDetailId } = actions
export default reducer;