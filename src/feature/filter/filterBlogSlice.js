import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { filterBlogApi } from "./filterBlogApi";



const initialState = {
    filterBlog: [],
    isLoading: false,
    isError: false,
    error: null,
};

// calling api using redux thunk

export const fetchFilterBlog = createAsyncThunk("filterBlog/fetchFilterBlog", async (filter) => {

    const filterBlog = await filterBlogApi(filter);
    return filterBlog;

});

export const filterBlogSlice = createSlice({
    name: "filterBlog",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchFilterBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.filterBlog = action.payload;
            })
            .addCase(fetchFilterBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.filterBlog = [];
                state.isError = true;
                state.error = action.error.message;
            });
    },
});

export default filterBlogSlice.reducer;
