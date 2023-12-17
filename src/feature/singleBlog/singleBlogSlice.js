import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singleBlogApi } from "./singleBlogApi";

const initialState = {
    singleBlog: {},
    isLoading: false,
    isError: false,
    error: null,
};

// calling api using redux thunk

// export const fetchSingleBlog = createAsyncThunk("singleBlog/fetchSingleBlog", async (id) => {
//     const singleBlog = await singleBlogApi(id);

//     return singleBlog;
// });

export const singleBlogSlice = createSlice({
    name: "singleBlog",
    initialState,
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchSingleBlog.pending, (state) => {
    //             state.isLoading = true;
    //         })
    //         .addCase(fetchSingleBlog.fulfilled, (state, action) => {
    //             state.isLoading = false;
    //             state.singleBlog = action.payload;
    //         })
    //         .addCase(fetchSingleBlog.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.singleBlog = {};
    //             state.isError = true;
    //             state.error = action.error.message;
    //         });
    // },
});

export default singleBlogSlice.reducer;
