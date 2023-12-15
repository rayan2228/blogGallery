import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 1000,
})
