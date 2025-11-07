import axios from "axios";
import config from "../config";

const api = axios.create({
    baseURL: config.apiBaseUrl,
});

api.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");

    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }

    if (config.enableDebug) {
        console.log("[API REQUEST]", request);
    }

    return request;
});

export default api;
