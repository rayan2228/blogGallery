import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { relatedBlogApi } from "./relatedBlogsApi";



const initialState = {
    relatedBlog: [],
    isLoading: false,
    isError: false,
    error: null,
};

// calling api using redux thunk

export const fetchRelatedBlog = createAsyncThunk("relatedBlog/fetchRelatedBlog", async ({ tags, currentBlogId }) => {
    const relatedBlog = await relatedBlogApi({ tags, currentBlogId });
    return relatedBlog;
});

export const relatedBlogSlice = createSlice({
    name: "relatedBlog",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRelatedBlog.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchRelatedBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.relatedBlog = action.payload;
            })
            .addCase(fetchRelatedBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.relatedBlog = [];
                state.isError = true;
                state.error = action.error.message;
            });
    },
});

export default relatedBlogSlice.reducer;
