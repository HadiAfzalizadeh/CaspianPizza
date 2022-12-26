import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../Services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {
      try {
        const data = await AuthService.login(username, password);
        return { user: data };
      } catch (error) {}
    }
  );
  
  export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
  });