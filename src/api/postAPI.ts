import api from "./api";
export const PostAPI = {
    list: (filter: Filter) => api.get("posts", { params: filter })
}