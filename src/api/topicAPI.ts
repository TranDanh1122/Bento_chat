import api from "./api";
export const TopicApi = {
    listTopic: (filter: Filter) => api.get("topics", { params: filter })
}