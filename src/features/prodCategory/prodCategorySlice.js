import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import prodCategoryService from "./prodCategoryService";

export const getProdCategories = createAsyncThunk(
  "prodCategory/get-prodCategories",
  async (thunkAPI) => {
    try {
      return await prodCategoryService.getProdCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  prodCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const prodCategorySlice = createSlice({
  name: "prodCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProdCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProdCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(getProdCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.prodCategories = action.payload;
      });
  },
});

export default prodCategorySlice.reducer;
