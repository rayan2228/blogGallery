import { axiosInstance } from "../../utils/config/axiosConfig"

export const singleBlogApi = async (id) => {
    const response = await axiosInstance.get(`/blogs${id}`)
    console.log(id);
    return response.data
} 