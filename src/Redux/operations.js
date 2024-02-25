import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL =
  "https://65da68d5bcc50200fcdcec6d.mockapi.io/api/cars/adverts/";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/cars?&page=1&limit=12");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchMoreCars = createAsyncThunk(
  "cars/fetchMore",
  async (page, thunkAPI) => {
    try {
      const resp = await axios.get(`/cars?&page=${page}&limit=12`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarDetails = createAsyncThunk(
  "cars/carDetails",
  async (id, thunkAPI) => {
    try {
      const resp = await axios.get(`/cars/${id}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);