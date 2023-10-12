import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setToLocalStorage } from "../../helpers/helpers";
import { authKey } from "../../constants/constants";

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
      let user = {};
      user.uid = userCredential.user.uid;
      user.email = userCredential.user.email;
      setToLocalStorage(authKey, user);
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
      let user = {};
      user.uid = userCredential.user.uid;
      user.email = userCredential.user.email;
      setToLocalStorage(authKey, user);
      return user;
    } catch (error) {
      // Handle login failure
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
