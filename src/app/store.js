import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../feature/blogs/blogsSlice'
import singleBlogReducer from '../feature/singleBlog/singleBlogSlice'
import relatedBlogReducer from '../feature/relatedBlogs/relatedBlogsSlice'


export default configureStore({
    reducer: {
        blogs: blogsReducer,
        singleBlog: singleBlogReducer,
        relatedBlog: relatedBlogReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
