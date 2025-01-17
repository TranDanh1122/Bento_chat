import { AuthAPI } from "../api/authAPI";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
export const register = createAsyncThunk("auth/register", async (data: Pick<User, "lastName" | "username" | "password">) => {
    const response = await AuthAPI.register(data)
    return response.data
})
export const login = createAsyncThunk("auth/login", async (data: Pick<User, "username" | "password">) => {
    const respone = await AuthAPI.login(data)
    return respone.data
})
export const profile = createAsyncThunk("auth/profile", async (token: string) => {
    const respone = await AuthAPI.profile(token)
    return respone.data
})
export const updateProfile = createAsyncThunk("auth/updateProfile", async (payload: { data: Omit<User, "role" | "status">, token: string }) => {
    const respone = await AuthAPI.updateProfile(payload.data, payload.token)
    return respone.data
})
export const deleteUser = createAsyncThunk("auth/deleteUser", async (payload: { id: string, token: string }) => {
    const respone = await AuthAPI.deleteUser(payload.token, payload.id)
    return respone.data
})
interface AuthStore {
    token: string,
    user: User,
    loading: boolean
}
const initData: AuthStore = {
    token: "",
    user: {} as User,
    loading: false
}
const authSlicer = createSlice({
    "name": "auth",
    initialState: initData,
    reducers: {
        logout: (state: AuthStore) => {
            state.token = ""
            state.user = {} as User
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state: AuthStore) => {
            state.loading = true
        }).addCase(register.fulfilled, (state: AuthStore, action: PayloadAction<string>) => {
            state.loading = false
            state.token = action.payload
            console.log(action.payload);
        }).addCase(register.rejected, (state: AuthStore, action: PayloadAction<unknown>) => {
            state.loading = false
            console.error(action.payload);
        }).addCase(login.pending, (state: AuthStore) => {
            state.loading = true
        }).addCase(login.fulfilled, (state: AuthStore, action: PayloadAction<string>) => {
            state.loading = false
            state.token = action.payload
            console.log(action.payload);
        }).addCase(login.rejected, (state: AuthStore, action: PayloadAction<unknown>) => {
            state.loading = false
            console.error(action.payload);
        })
            .addCase(profile.pending, (state: AuthStore) => {
                state.loading = true
            }).addCase(profile.fulfilled, (state: AuthStore, action: PayloadAction<User>) => {
                state.loading = false
                state.user = action.payload
                console.log(action.payload);
            }).addCase(profile.rejected, (state: AuthStore, action: PayloadAction<unknown>) => {
                state.loading = false
                console.error(action.payload);
            })
            .addCase(updateProfile.pending, (state: AuthStore) => {
                state.loading = true
            }).addCase(updateProfile.fulfilled, (state: AuthStore, action: PayloadAction<unknown>) => {
                state.loading = false
                console.log(action.payload);
            }).addCase(updateProfile.rejected, (state: AuthStore, action: PayloadAction<unknown>) => {
                state.loading = false
                console.error(action.payload);
            })
            .addCase(deleteUser.pending, (state: AuthStore) => {
                state.loading = true
            }).addCase(deleteUser.fulfilled, (state: AuthStore, action: PayloadAction<unknown>) => {
                state.loading = false
                console.log(action.payload);
            }).addCase(deleteUser.rejected, (state: AuthStore, action: PayloadAction<unknown>) => {
                state.loading = false
                console.error(action.payload);
            })
    }
})
export default authSlicer.reducer
export const { logout } = authSlicer.actions 