import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlicer"
import homeReducer from "./homeSlicer"
import { apiMiddleware } from "../api/api";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)

})
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch