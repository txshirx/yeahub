import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { reducers } from "./reducers";
import { baseApi } from "@/shared/api/baseApi";

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({}).concat(baseApi.middleware)
})

export type AppState = ReturnType<typeof store.getState> 
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
export const useAppSelector = useSelector.withTypes<AppState>()
