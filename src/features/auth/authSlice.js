import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import authService from "./authService";

const userDefaultState = {
    _id:null,
    firstname: null,
    lastname:null,
    email: null,
    mobile: null,
    tokel: null,
};

const initialState = {
    user: userDefaultState,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message:"",
}

const login = createAsyncThunk("auth/admin-login", async(user,thunkAPI) =>{
    try {
        return await authService.login(user);
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducer: {},
    extraReducers:(builder) =>{
        builder.addCase(login.pending,(state) =>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled,(state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(login.rejected,(state, action) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.user = null;
        });
    },
});

export default authSlice.reducer;