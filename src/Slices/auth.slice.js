import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../Services/auth.service";
import { setMessage } from "./message.slice";

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, pass }, thunkAPI) => {
      try {
        const data = await AuthService.login(email, pass);
        return { user: data };
      } catch (error) {
        const message = error.name === 'AxiosError' ? "Oops! Something went wrong" : error.message;
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );
  
  export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
  });

  const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
      [login.fulfilled]: (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.user;
      },
      [login.rejected]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
      [logout.fulfilled]: (state, action) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
  });

  const { reducer } = authSlice;
  export default reducer;