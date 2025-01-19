import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostAPI } from "../api/postAPI";
import { TopicApi } from "../api/topicAPI";
interface HomeData {
    posts: Post[],
    topic: Topic[],
    loading: boolean,
    filter: Filter,
    totalPage: number,
    error: string
}
const initData: HomeData = {
    posts: [],
    topic: [],
    loading: false,
    filter: {
        page: 1,
        limit: 10
    },
    totalPage: 1,
    error: ""
}
export const listPost = createAsyncThunk("post/list", async (payload: { data: Filter }, { rejectWithValue }) => {
    try {
        const response = await PostAPI.list(payload.data)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data.message || "Fetch Post Error")
    }
})
export const listTopic = createAsyncThunk("topic/list", async (payload: { page: number, limit: 5 }, { rejectWithValue }) => {
    try {
        const response = await TopicApi.listTopic(payload)
        return response.data
    } catch (error: any) {
        return rejectWithValue(error.response.data.message || "Fetch Post Error")
    }
})
const homeReducer = createSlice({
    "name": "home",
    initialState: initData,
    reducers: {

    },
    extraReducers: (builders) => {
        builders.addCase(listPost.pending, (state: HomeData) => {
            state.loading = true
        }).addCase(listPost.fulfilled, (state: HomeData, action: PayloadAction<{ data: Post[], paging: Filter, total: number, filter: Filter }>) => {
            state.totalPage = action.payload.total
            state.posts = action.payload.data
            state.loading = false
        }).addCase(listPost.rejected, (state: HomeData, action: PayloadAction<unknown>) => {
            state.loading = false
            state.error = action.payload as string
        }).addCase(listTopic.fulfilled, (state: HomeData, action: PayloadAction<{ data: Topic[], paging: Filter, total: number, filter: Filter }>) => {
            state.topic = action.payload.data
            state.totalPage = action.payload.total
        })
    }
})
export default homeReducer.reducer
