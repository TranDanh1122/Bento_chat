import api from "./api";

export const AuthAPI = {
    register: (data: Pick<User, "firstName" | "lastName" | "username" | "password">) => api.post("register", data),
    login: (data: Pick<User, "username" | "password">) => api.post("authenticate", data),
    profile: (token: string) => api.get("profile", { headers: { Authorization: `Bearer ${token}` } }),
    updateProfile: (data: Omit<User, "role" | "status">, token: string) => api.patch("profile", data, { headers: { Authorization: `Bearer ${token}` } }),
    updateUser: (data: Pick<User, "avatar" | "cover" | "firstName" | "lastName" | "password" | "bio" | "websiteUrl" | "salt" | "role" | "status">, id: string, token: string) => api.patch(`users/${id}`, data, { headers: { Authorization: `Bearer ${token}` } }),
    deleteUser: (token: string, id: string) => api.delete(`users/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
    // checkToken: (token: string) => api.post("introspect", { token: token })
}