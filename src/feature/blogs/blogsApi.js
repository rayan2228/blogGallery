import { axiosInstance } from "../../utils/config/axiosConfig"

export const blogsApi = async ({ filter, sort, search }) => {

    let queryString = ""
    if (filter === "saved") {
        queryString += `isSaved=true`
    } else if (filter === "not saved") {
        queryString += `isSaved=false`
    }
    else {
        queryString += ""
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