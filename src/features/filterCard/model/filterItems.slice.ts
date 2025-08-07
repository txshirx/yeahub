import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FilterType = 'specializations' | 'rate' | 'skills' | 'complexity'

type ItemsState = {
    specializationAllItems: boolean,
    skillsAllItems: boolean,
    filtersSearch: string,
    selectedItems: {
        specializations: number[],
        skills: number[],
        rate: number[],
        complexity: number[][]
    }
}

const initialState: ItemsState = {
    specializationAllItems: false,
    skillsAllItems: false,
    filtersSearch: '',
    selectedItems: {
        specializations: [],
        skills: [],
        rate: [],
        complexity: []
    }
}


export const filterSlice = createSlice({
    name: 'filterItems',
    initialState: initialState,
    reducers: {
        specializationItemsVisible: (state, action: PayloadAction<{state: boolean}>) => {
            state.specializationAllItems = action.payload.state
        },
        skillsItemsVisible: (state, action: PayloadAction<{ state: boolean }>) => {
            state.skillsAllItems = action.payload.state
        },
        appendSelectedItems: (state, action: PayloadAction<{ value: number | undefined, filter?: FilterType, data?: number[]}>) => {
            if (action.payload.filter === 'specializations' && action.payload.value) {
                state.selectedItems.specializations = [...state.selectedItems.specializations, action.payload.value]
            }
            if (action.payload.filter === 'skills' && action.payload.value) {
                state.selectedItems.skills = [...state.selectedItems.skills, action.payload.value]
            }
            if (action.payload.filter === 'rate' && action.payload.value) {
                state.selectedItems.rate = [...state.selectedItems.rate, action.payload.value]
            }
            if (action.payload.filter === 'complexity' && action.payload.data) {
                state.selectedItems.complexity = [...state.selectedItems.complexity, action.payload.data]
            }
        },
        removeItem: (state, action: PayloadAction<{ value: number | number[] | undefined,  filter?: FilterType, data?: number[] }>) => {
            if (action.payload.filter === 'specializations' && action.payload.value) {
                state.selectedItems.specializations = state.selectedItems.specializations.filter(item => item !== action.payload.value)
            }
            if (action.payload.filter === 'skills' && action.payload.value) {
                state.selectedItems.skills = state.selectedItems.skills.filter(item => item !== action.payload.value)
            }
            if (action.payload.filter === 'rate' && action.payload.value) {
                state.selectedItems.rate = state.selectedItems.rate.filter(item => item !== action.payload.value)
            }
            if (action.payload.filter === 'complexity' && action.payload.data) {
                state.selectedItems.complexity = state.selectedItems.complexity.filter(item => item[0] !== action.payload.data![0])
            }
        },
        clearFilters: (state) => {
            state.selectedItems = { specializations: [], skills: [], rate: [], complexity: [] }
        }
    },
    selectors: {
        selectSpecializations: (state) => state.specializationAllItems,
        selectSkills: (state) => state.skillsAllItems,
        selectSelectedItems: (state, fitler: FilterType) => state.selectedItems[fitler]
    }
})