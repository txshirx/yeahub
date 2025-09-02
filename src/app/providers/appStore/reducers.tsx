import { filterSlice } from "@/features/filterCard/model/filterItems.slice";
import { questionsSlice } from "@/features/questionsCardsList/model/questions.slice";
import { baseApi } from "@/shared/api/baseApi";
import { queryParamsSlice } from "@/shared/lib/slices/queryParams.slice";
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
    filterItems: filterSlice.reducer,
    questions: questionsSlice.reducer,
    queryParams: queryParamsSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer
})