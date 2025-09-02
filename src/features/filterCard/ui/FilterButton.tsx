import { Colors } from "@/shared/constans/Colors"
import { useFilterQuery } from "../model/useFilterQuery"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


type ButtonType = {
    title: string,
    filter: 'rate' | 'complexity' | 'skills' | 'specializations',
    idData: number[] 
}

export const FilterButton = ({ title, idData, filter } : ButtonType) => {
    const [searchParams] = useSearchParams()
    const [clicked, setClicked] = useState(false)
    useEffect(() => {
        setClicked(searchParams.get(filter) ? searchParams.get(filter)!.split(',').some(item => idData.includes(Number(item))) : false)
    }, [searchParams])

    const { updateFilters } = useFilterQuery(filter, clicked, setClicked)

    return (
        <button  onClick={() => updateFilters(idData)} style={{
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