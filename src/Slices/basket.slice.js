import BasketService from "../Services/basket.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


  let cart = JSON.parse(localStorage.getItem("cart"));

  export const getMyCart = createAsyncThunk(
    "basket/getMyCart",
    async (thunkAPI) => {
      try {
        const data = await BasketService.getMyCart(cart.browserId)
        return { cartItems: data.cartItems, sumAmount: data.sumAmount }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const deleteFromCart = createAsyncThunk(
    "basket/deleteFromCart",
    async ({productId}, thunkAPI) => {
      try {
        const data = await BasketService.deleteFromCart(cart.cartId, productId)
        return { productId: productId, sumAmount: data.totalPrice }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const addToCart = createAsyncThunk(
    "basket/addToCart",
    async ({productId}, thunkAPI) => {
      try {
        const data = await BasketService.addToCart(cart.cartId, productId)
        return { productId: productId, sumAmount: data.totalPrice}
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const removeFromCart = createAsyncThunk(
    "basket/removeFromCart",
    async ({productId}, thunkAPI) => {
      try {
        const data = await BasketService.removeFromCart(cart.cartId, productId)
        return { productId: productId, sumAmount: data.totalPrice }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const createCart = createAsyncThunk(
    "basket/createCart",
    async ({productId}, thunkAPI) => {
      try {
        const data = await BasketService.createCart(localStorage.getItem("cart") !== null ? cart.cartId : 0, productId, localStorage.getItem("cart") !== null ? cart.browserId : uuidv4());
        if(localStorage.getItem("cart") === null){
          localStorage.removeItem("cart")
            localStorage.setItem("cart", JSON.stringify({browserId: data.brawserId, cartId: data.cartId }));
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return { cartItems: data.cartItems, sumAmount: data.totalPrice }
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
        cart = null;
        return {}
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const payForUser = createAsyncThunk(
    "basket/payForUser",
    async (thunkAPI) => {
      try {
        const data = await BasketService.payForUser(cart.browserId)
        return { data: data }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const ReCreateOrder = createAsyncThunk(
    "basket/ReCreateOrder",
    async ({orderId}, thunkAPI) => {
      try {
        const data = await BasketService.ReCreateOrder(orderId,localStorage.getItem("cart") !== null ? cart.browserId : uuidv4());
        if(localStorage.getItem("cart") === null){
          localStorage.removeItem("cart")
            localStorage.setItem("cart", JSON.stringify({browserId: data.brawserId, cartId: data.cartId }));
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return { data: data }
      } catch (error) {
        return thunkAPI.rejectWithValue();
      }
    }
  );


  const initialState = {cartItems: []};

  const basketslice = createSlice({
    name: "basket",
    initialState,
    reducers: {
      setOrderDetailId: (state, action) => {
        return { OrderDetailId: action.payload ,cartItems: state.cartItems };
      },
      setBookSlot: (state, action) => {
        return { isDelivery: action.payload.isDelivery , date: action.payload.date, time: action.payload.time,cartItems: state.cartItems};
      }
    },
    extraReducers: {
        [getMyCart.fulfilled]: (state, action) => {
            state.cartItems = action.payload.cartItems;
            state.sumAmount = action.payload.sumAmount;
        },
        [deleteFromCart.fulfilled]: (state, action) => {
            state.cartItems =  state.cartItems.filter(function(item) { 
                return item.productId !== action.payload.productId
            });
            if(state.cartItems.length === 0){
              localStorage.removeItem("cart")
              cart = null;
              state.sumAmount = 0;
            }
            else{
              state.sumAmount = action.payload.sumAmount;
            }
        },
        [addToCart.fulfilled]: (state, action) => {
            state.cartItems[state.cartItems.indexOf(
                state.cartItems.filter((item) => item.productId === action.payload.productId)[0]
            )].count++;
            state.sumAmount = action.payload.sumAmount;
        },
        [removeFromCart.fulfilled]: (state, action) => {
            if(state.cartItems[state.cartItems.indexOf(
                state.cartItems.filter((item) => item.productId === action.payload.productId)[0]
            )].count === 1)
            {
                state.cartItems =  state.cartItems.filter(function(item) { 
                    return item.productId !== action.payload.productId
                });
                if(state.cartItems.length === 0){
                  localStorage.removeItem("cart")
                  cart = null;
                  state.sumAmount = 0;
                }
                else{
                  state.sumAmount = action.payload.sumAmount;
                }
            }
            else{state.cartItems[state.cartItems.indexOf(
                state.cartItems.filter((item) => item.productId === action.payload.productId)[0]
            )].count--;
            state.sumAmount = action.payload.sumAmount;
            }    
        },
        [createCart.fulfilled]: (state, action) => {
            state.cartItems = action.payload.cartItems;
            state.sumAmount = action.payload.sumAmount;
        },
        [deleteCart.fulfilled]: (state, action) => {
            state.cartItems = [];
            state.sumAmount = 0;
            localStorage.removeItem("cart")
                  cart = null;
        },
        [payForUser.fulfilled]: (state, action) => {
          state.OrderDetailId= action.payload.data.data.orderId
          state.cartItems = [];
          state.sumAmount = 0;
          localStorage.removeItem("cart")
                cart = null;
        },
        [ReCreateOrder.fulfilled]: (state, action) => {
          state.cartItems = action.payload.data.cartDto.carts[0].cartItems;
            state.sumAmount = action.payload.data.cartDto.carts[0].sumAmount;
        }
    }
  });

  export const { setOrderDetailId, setBookSlot } = basketslice.actions
  export default basketslice.reducer;

