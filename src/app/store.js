import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../feature/blogs/blogsSlice'
import singleBlogReducer from '../feature/singleBlog/singleBlogSlice'
import relatedBlogReducer from '../feature/relatedBlogs/relatedBlogsSlice'
import filterBlogReducer from '../feature/filter/filterBlogSlice'


export default configureStore({
    reducer: {
        blogs: blogsReducer,
        singleBlog: singleBlogReducer,
        relatedBlog: relatedBlogReducer,
        filterBlog: filterBlogReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
