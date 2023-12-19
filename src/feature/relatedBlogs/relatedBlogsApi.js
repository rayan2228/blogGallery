import { axiosInstance } from "../../utils/config/axiosConfig";

export const relatedBlogApi = async ({ tags, currentBlogId }) => {
    let queryString = tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${currentBlogId}&_limit=3`
    const response = await axiosInstance.get(`/blogs?${queryString}`)
    return response.data
}