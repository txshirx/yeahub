import { filterSlice } from "@/features/filterCard/model/filterItems.slice";
import { questionsSlice } from "@/features/questionsCardsList/model/questions.slice";
import { baseApi } from "@/shared/api/baseApi";
import { combineReducers } from "@reduxjs/toolkit";

export const reducers = combineReducers({
    filterItems: filterSlice.reducer,
    questions: questionsSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer
})