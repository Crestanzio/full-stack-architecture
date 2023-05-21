import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const singUpRequest = createAsyncThunk(
  "user/singUpRequest",
  async ({ username, password }, { fulfillWithValue, rejectWithValue }) => {
    return await axios
      .post("./signup", { username, password })
      .then((response) => fulfillWithValue(response.data))
      .catch((error) => rejectWithValue(error.response.data));
  }
);
