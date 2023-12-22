import { axiosInstance } from "../../utils/config/axiosConfig";

export const filterBlogApi = async (filter) => {
    if (filter === "all") {
        const response = await axiosInstance.get(`/blogs`)
        return response.data
    } else if (filter === "saved") {
        const response = await axiosInstance.get(`/blogs?isSaved=true`)
        return response.data
    } else {
        const response = await axiosInstance.get(`/blogs?isSaved=false`)
        return response.data
    }
}