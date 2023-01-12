import { configureStore } from '@reduxjs/toolkit'
import authReducer from './Slices/auth.slice';
import messageReducer from './Slices/message.slice';
import categoryReducer from './Slices/category.slice';
import basketReducer from './Slices/basket.slice';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  category: categoryReducer,
  basket: basketReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;