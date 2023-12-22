import { axiosInstance } from "../../utils/config/axiosConfig"

export const blogsApi = async ({ filter, sort, search }) => {

    let queryString = ""
    if (filter != "all") {
        queryString += `isSaved=${filter}`
    }
    if (sort === "newest") {
        queryString += '&_sort=createdAt&_order=desc'
    } else if (sort === "most liked") {
        queryString += '&_sort=likes&_order=desc'
    }
    if (search != "") {
        queryString += `&q=${search}`
    }
    const response = await axiosInstance.get(`/blogs?${queryString}`)
    return response.data
} 