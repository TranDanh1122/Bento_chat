import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlicer"
import { apiMiddleware } from "../api/api";
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)

})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch