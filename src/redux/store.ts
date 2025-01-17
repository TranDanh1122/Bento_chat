import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlicer"
export const store = configureStore({
    reducer: { auth: authReducer }
})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch