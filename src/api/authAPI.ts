import api from "./api";

export const AuthAPI = {
    register: (data: Pick<User, "firstName" | "lastName" | "username" | "password">) => api.post("register", data),
    login: (data: Pick<User, "username" | "password">) => api.post("authenticate", data),
    profile: () => api.get("profile"),
    updateProfile: (data: Omit<User, "role" | "status">) => api.patch("profile", data),
    updateUser: (data: Pick<User, "avatar" | "cover" | "lastName" | "password" | "bio" | "websiteUrl" | "salt" | "role" | "status">, id: string) => api.patch(`users/${id}`, data),
    deleteUser: (id: string) => api.delete(`users/${id}`),
    // checkToken: (token: string) => api.post("introspect", { token: token })
}