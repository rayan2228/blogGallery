import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { blogsApi } from "./blogsApi";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  blogs: [],
};

// calling api using redux thunk

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const blogs = await blogsApi();
  return blogs;
});

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default blogsSlice.reducer;
