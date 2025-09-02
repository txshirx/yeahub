import type { ParamsType } from "@/shared/api/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FilterType = keyof ParamsType;

type StateType = {
  paramsQuery: ParamsType;
  total: number;
  limit: number;
};

const initialParams: StateType = {
  paramsQuery: {
    specializations: [],
    skills: [],
    rate: [],
    complexity: [],
    keywords: [],
    page: 1,
  },
  total: 0,
  limit: 10,
};

export const queryParamsSlice = createSlice({
    name: "queryParams",
    initialState: initialParams,
    reducers: {
        setFilterValues: (state, action: PayloadAction<{ filter: FilterType; values: (string | number)[] | number }>) => {
            if (typeof action.payload.values === "number" && action.payload.filter === 'page') {
                state.paramsQuery[action.payload.filter] = action.payload.values as number
            } else if (typeof action.payload.values !== 'number') {
                state.paramsQuery[action.payload.filter] = [...action.payload.values] as never
            }
        },

        appendFilterValues: (state, action: PayloadAction<{ filter: FilterType; values: (string | number)[] }>) => {
            const existing = state.paramsQuery[action.payload.filter]
            if (Array.isArray(existing)) {
                const toAdd = action.payload.values.filter(v => !existing.includes(v as never))
                state.paramsQuery[action.payload.filter] = [...existing, ...toAdd] as never
            } 
        },

        removeFilterValues: (state, action: PayloadAction<{ filter: FilterType; values?: (string | number)[] }>) => {
            const existing = state.paramsQuery[action.payload.filter]
            if (Array.isArray(existing) && action.payload.values) {
                state.paramsQuery[action.payload.filter] = existing.filter(v => !action.payload.values!.includes(v)) as never
            } else if (Array.isArray(existing)) {
                state.paramsQuery[action.payload.filter] = [] as never
            } else {
                state.paramsQuery[action.payload.filter] = 1 as never
            }
        },

        appendPage: (state, action: PayloadAction<{ value: number | undefined }>) => {
            state.paramsQuery.page = action.payload.value
        },

        clearFilterParams: (state) => {
            state.paramsQuery = initialParams.paramsQuery 
        },

        appendPageTotal: (state, action: PayloadAction<{ value?: number }>) => {
            state.total = action.payload.value ?? 0
        },
        appendLimit: (state, action: PayloadAction<{ value?: number }>) => {
            state.limit = action.payload.value ?? 0
        },
    },
    selectors: {
        selectFilterParams: (state, filter: FilterType) => state.paramsQuery[filter],
        selectAllFilterParams: (state) => state.paramsQuery,
        selectTotal: (state) => state.total,
        selectLimit: (state) => state.limit,
        selectPage: (state) => state.paramsQuery.page,
    },
});