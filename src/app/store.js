import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../feature/blogs/blogsSlice'

export default configureStore({
    reducer: {
        blogs: blogsReducer
    },
})
