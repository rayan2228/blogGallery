import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    filter: "all",
    sort: "default",
    search: ""
};



export const filterBlogSlice = createSlice({
    name: "filterBlog",
    initialState,
    reducers: {
        filterBlog: (state, action) => {
            if (action.payload === "saved") {
                state.filter = true
            } else if (action.payload === "not saved") {
                state.filter = false
            } else {
                state.filter = action.payload
            }
        },
        sortBlog: (state, action) => {
            state.sort = action.payload
        },
        searchBlog: (state, action) => {
            state.search = action.payload
        }
    }
});
export const { filterBlog, sortBlog, searchBlog } = filterBlogSlice.actions
export default filterBlogSlice.reducer;
