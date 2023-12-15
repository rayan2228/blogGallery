import { axiosInstance } from "../../utils/config/axiosConfig"

export const blogsApi = async () => {
    const response = await axiosInstance.get("/blogs")
    return response.data
} 