import { questionsQuery } from "@/shared/api/model/questions.api"
import { Colors } from "@/shared/constans/Colors"
import { useState, type ChangeEvent } from "react"
import { useSearchParams } from "react-router-dom"
import { filterSlice } from "../model/filterItems.slice"
import { store, useAppDispatch, useAppSelector } from "@/app/providers/appStore/store"


type ButtonType = {
    title: string,
    filter: 'rate' | 'complexity' | 'skills' | 'specializations',
    data?: number[] 
    id: number,
}

export const FilterButton = ({ title, data, filter, id } : ButtonType) => { 
    const [searchParams, setSearchParams] = useSearchParams()
    
    const [clicked, setClicked] = useState<boolean>(searchParams.toString().includes(`${filter}=${id}`))
    const filterData = useAppSelector(state => filterSlice.selectors.selectSelectedItems(state, filter))
    const dispatch = useAppDispatch()
    
    questionsQuery.useGetQuestionsQuery(Array.isArray(filterData) && filterData.length === 0 ? {} : { [filter]: filterData } ) 

    const handlerFilter = () => {
        const params = new URLSearchParams(searchParams)
        const currentValues = searchParams.getAll(filter)

        if (!clicked) {
            if (!currentValues.includes(id.toString())) {
                dispatch(filterSlice.actions.appendSelectedItems({ filter: filter, value: id, data: data }))
                const filterData = filterSlice.selectors.selectSelectedItems(store.getState(), filter)
                params.delete(filter)
                params.append(filter, filterData.toString())     
            }
            setSearchParams(params)
        } else {
            dispatch(filterSlice.actions.removeItem({ value: id, filter: filter, data: data }))
            const filterData = filterSlice.selectors.selectSelectedItems(store.getState(), filter)
            const values = params.getAll(filter)
            console.log(values)
            params.delete(filter)
        }
        setSearchParams(params)
        setClicked(!clicked)

    }

    return (
        <button id={id.toString()} onClick={() => handlerFilter()} style={{
            border: '1px solid',
            borderColor: clicked ? Colors.MainYeahub : '#BABABA',
            borderRadius: 12,
            padding: '10px 12px',
            fontSize: 16,
            backgroundColor: '#ffffff',
            display: "flex",
            gap: 8,
            color: Colors.TextFilter,
            width: 'fit-content'
        }}>

            <span>{title}</span>
        </button>
    )
}