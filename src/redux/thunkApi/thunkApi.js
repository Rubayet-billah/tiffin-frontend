import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createAsyncThunk } from "@reduxjs/toolkit";

const auth = getAuth(app);

// Create an async thunk for user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      // Handle registration failure
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create an async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      return user;
    } catch (error) {
      // Handle login failure
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
