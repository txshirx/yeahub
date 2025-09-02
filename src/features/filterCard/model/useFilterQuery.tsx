import { store, useAppDispatch, useAppSelector } from "@/app/providers/appStore/store";
import type { ParamsType } from "@/shared/api/types/types";
import { queryParamsSlice } from "@/shared/lib/slices/queryParams.slice";
import { useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export function useFilterQuery(filter: keyof ParamsType, clicked?: boolean, setClicked?: (item: boolean) => void) {
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const value = useAppSelector(state => queryParamsSlice.selectors.selectFilterParams(state, filter));

    useEffect(() => {
        const filterParams = searchParams.get(filter) ? searchParams.get(filter)!.split(',').map(item => Number(item)) : []
        if (typeof value !== "number" && value?.length === 0 || typeof value === 'undefined') {
            dispatch(queryParamsSlice.actions.appendFilterValues({ filter, values: filterParams }))
        }
    }, [])

    const updateParamsArray = useCallback((params: URLSearchParams, key: keyof ParamsType, values: (string | number)[]) => {
        if (values.length > 0) {
            params.set(key, values.join(","));
        } else if (key !== 'keywords') {
            params.delete(key);
        }
        setSearchParams(params)
    }, []);

    const updateFilters = useCallback((newValues: (string | number)[]) => {
        const params = new URLSearchParams(searchParams);
        if (!clicked && setClicked) {
            const current = params.get(filter)?.split(",") ?? [];
            const merged = Array.from(new Set([...current, ...newValues.map(String)]));
            updateParamsArray(params, filter, merged);
            dispatch(queryParamsSlice.actions.appendFilterValues({ filter, values: newValues }));
            setClicked(true)
        } else if (setClicked && clicked) {
            setClicked(false)
            params.delete(filter);
            dispatch(queryParamsSlice.actions.removeFilterValues({ filter, values: newValues }));
            const data = queryParamsSlice.selectors.selectFilterParams(store.getState(), filter)
            updateParamsArray(params, filter, data as number[])
        } else if (clicked) {
            const current = params.get(filter)?.split(",") ?? [];
            const updated = current.filter(v => !newValues.map(String).includes(v));
            updateParamsArray(params, filter, updated);
            dispatch(queryParamsSlice.actions.appendFilterValues({ filter, values: newValues }));
        }
    }, [dispatch, filter, searchParams, setSearchParams, updateParamsArray, clicked, setClicked]);

    const setKeywords = (words: string[]) => {
        const params = new URLSearchParams(searchParams);
        const cleaned = words.map(w => w.trim().toLowerCase()).filter(Boolean);
        
        if (params.getAll(filter).length === 0 || words.some(item => item === '')) {
            params.delete(filter)
        }
        updateParamsArray(params, filter, cleaned);
        dispatch(queryParamsSlice.actions.setFilterValues({ filter, values: cleaned }));
    };

    return { value, updateFilters, clicked, setKeywords };
}