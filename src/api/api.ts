import axios from "axios";
import { Middleware } from "@reduxjs/toolkit";
const api = axios.create({
    baseURL: "http://localhost:3000/v1",
    timeout: 5000,
    // withCredentials: true,
    // headers: {
    //     'Authorization': `Bearer 1234567987654`
    //   }
})
api.defaults.headers.common['Content-Type'] = 'application/json';


export const apiMiddleware: Middleware = (store) => (next) => async (action: unknown) => {

    const token = localStorage.getItem("token") ?? store.getState().auth.token
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    try {
        return next(action)
    } catch (error: any) {
        if (error.response?.status === 401) window.location.href = "/auth/login"
        return Promise.reject(error)
    }
}
api.interceptors.response.use(
    (response) => {
        if (response.data?.message === "Invalid token") {
            // Redirect login
            window.location.href = "/auth/login";
            // Reject để vào catch block
            return Promise.reject(response.data);
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api