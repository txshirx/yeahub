import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type CategoryType = 'specializations' | 'skills'

type ItemsState = {
    categoryList: Record<CategoryType, boolean>,
    filtersSearch: string,
    
}

const initialState: ItemsState = {
    categoryList: {
        'skills': false,
        'specializations': false
    },
    filtersSearch: '',
}


export const filterSlice = createSlice({
    name: 'filterItems',
    initialState: initialState,
    reducers: {
        showCategoryList: (state, action: PayloadAction<{ category: CategoryType, value: boolean }>) => {
            state.categoryList[action.payload.category] = action.payload.value
        }

    },
    selectors: {
        selectCategoryList: (state, category: CategoryType) => state.categoryList[category] 
    }
})