import { faBedPulse } from "@fortawesome/free-solid-svg-icons";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../Services/category.service";

var orientation = JSON.parse(localStorage.getItem("orientation"));

export const getProductByCategory = createAsyncThunk(
    "category/getProductByCategory",
    async ({page,pageSize,categotyId,type}, thunkAPI) => {
      try {
        const data = await CategoryService.getProductByCategory(page,pageSize,categotyId);
        return { data: data };
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

    orientation = orientation === null ? "portrait" : orientation;

  const initialState = { currentCategotyId: -1, currentCategotyPage: 3 , categotyHasMore: false , categotyItems: [1,2] , itemOrientation: orientation};

  const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategotyId: (state, action) => {
          return { currentCategotyId: action.payload };
        },
        setOrientation: (state, action) => {
            return { itemOrientation: action.payload };
        }
    },
    extraReducers: {
      [getProductByCategory.fulfilled]: (state, action) => {
        state.currentCategotyPage = state.currentCategotyPage + 1;
        state.categotyHasMore = action.meta.totalRows === state.categotyItems.length ? false : true;
        state.categotyItems = state.categotyItems.concat(action.payload.data.data);
        alert(state.categotyItems.length);
      }
    },
  });

const { reducer, actions } = categorySlice;

export const { setCategotyId, setOrientation } = actions
export default reducer;