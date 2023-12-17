import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../feature/blogs/blogsSlice'
import singleBlogReducer from '../feature/singleBlog/singleBlogSlice'

export default configureStore({
    reducer: {
        blogs: blogsReducer,
        singleBlog: singleBlogReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
