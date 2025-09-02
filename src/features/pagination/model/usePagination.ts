import { useAppDispatch, useAppSelector } from "@/app/providers/appStore/store"
import { queryParamsSlice } from "@/shared/lib/slices/queryParams.slice"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const usePagination = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = new URLSearchParams(searchParams)

    const [pages, setPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState(1)
    
    const dispatch = useAppDispatch()

    const total = useAppSelector(state => queryParamsSlice.selectors.selectTotal(state)) 
    const limit = useAppSelector(state => queryParamsSlice.selectors.selectLimit(state)) 
    const page = useAppSelector(state => queryParamsSlice.selectors.selectPage(state))

    useEffect(() => {   
        if (total && total !== pages) {
            setPages(Math.ceil(total / limit))
        }
    }, [pages, total, limit, currentPage])

    useEffect(() => {
        setCurrentPage(Number(searchParams.get('page')))
        dispatch(queryParamsSlice.actions.appendPage({ value: currentPage }))
        if (!searchParams.get('page')) {
            dispatch(queryParamsSlice.actions.appendPage({ value: 1 }))
            setCurrentPage(1)
            params.append('page', '1')
        }  
    }, [currentPage, page, searchParams])

    useEffect(() => {
        if (currentPage !== 0 && currentPage !== 1) {
            dispatch(queryParamsSlice.actions.appendPage({ value: currentPage }))
        } 
    }, [])

    const updateCurrentPage = (page: number) => {
        setCurrentPage(page)
        dispatch(queryParamsSlice.actions.appendPage({ value: page }))
        params.delete('page')
        params.append('page', page.toString())
        setSearchParams(params)
    }
    
    return { currentPage, setCurrentPage: updateCurrentPage, pages }
}