import BasketService from "../Services/basket.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


  const cart = JSON.parse(localStorage.getItem("cart"));

  export const getMyCart = createAsyncThunk(
    "basket/getMyCart",
    async (thunkAPI) => {
      try {
        const data = await BasketService.getMyCart(cart.browserId)
        return { cartItems: data }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const deleteFromCart = createAsyncThunk(
    "basket/deleteFromCart",
    async ({productId}, thunkAPI) => {
      try {
        console.log(productId);
        await BasketService.deleteFromCart(cart.cartId, productId)
        return { productId: productId }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const addToCart = createAsyncThunk(
    "basket/addToCart",
    async ({productId}, thunkAPI) => {
      try {
        return { productId: productId }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const removeFromCart = createAsyncThunk(
    "basket/removeFromCart",
    async ({productId}, thunkAPI) => {
      try {
        await BasketService.removeFromCart(cart.cartId, productId)
        return { productId: productId }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const createCart = createAsyncThunk(
    "basket/createCart",
    async ({productId}, thunkAPI) => {
      try {
        const data = await BasketService.createCart(cart !== null ? cart.cartId : 0, productId, cart !== null ? cart.browserId : uuidv4());
        if(cart === null){
            localStorage.setItem("cart", JSON.stringify({brawserId: data.brawserId, cartId: data.cartId }));
        }
        return { cartItems: data.cartItems }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const deleteCart = createAsyncThunk(
    "basket/deleteCart",
    async (thunkAPI) => {
      try {
        await BasketService.deleteCart(cart.cartId, cart.browserId)
        localStorage.removeItem("cart")
        return {}
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  const initialState = {cartItems: []};

  const basketslice = createSlice({
    name: "basket",
    initialState,
    extraReducers: {
        [getMyCart.fulfilled]: (state, action) => {
            state.cartItems = action.payload.cartItems;
        },
        [deleteFromCart.fulfilled]: (state, action) => {
            state.cartItems =  state.cartItems.filter(function(item) { 
                return item.productId !== action.payload.productId
            });
        },
        [addToCart.fulfilled]: (state, action) => {
            state.cartItems[state.cartItems.indexOf(
                state.cartItems.filter((item) => item.productId === action.payload.productId)[0]
            )].count++;
        },
        [removeFromCart.fulfilled]: (state, action) => {
            if(state.cartItems[state.cartItems.indexOf(
                state.cartItems.filter((item) => item.productId === action.payload.productId)[0]
            )].count === 1)
            {
                state.cartItems =  state.cartItems.filter(function(item) { 
                    return item.productId !== action.payload.productId
                });
            }
            else{state.cartItems[state.cartItems.indexOf(
                state.cartItems.filter((item) => item.productId === action.payload.productId)[0]
            )].count--;
            }    
        },
        [createCart.fulfilled]: (state, action) => {
            state.cartItems = action.payload.cartItems;
        },
        [deleteCart.fulfilled]: (state, action) => {
            state.cartItems = [];
        },
    }
  });

  const { reducer } = basketslice;
  export default reducer;