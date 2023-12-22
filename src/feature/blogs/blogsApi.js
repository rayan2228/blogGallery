import { axiosInstance } from "../../utils/config/axiosConfig"

export const blogsApi = async ({ filter, sort, search }) => {
    console.log(filter);
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
    console.log(queryString);
    const response = await axiosInstance.get(`/blogs?${queryString}`)
    return response.data
} 