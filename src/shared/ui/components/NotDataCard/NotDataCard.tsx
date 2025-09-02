import { queryParamsSlice } from "@/shared/lib/slices/queryParams.slice"
import { Button } from "@/shared/ui/components/Button/Button"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

type CardType = {
    isLoading?: boolean,
    isError?: boolean,
}

export const NotDataCard = ({ isLoading, isError } : CardType) => {

    const [notDataFlag, setNotDataFlag] = useState(!isLoading && !isError)
    const [_, setSearchParams] = useSearchParams()

    const dispatch = useDispatch()

    const clearFilters = () => {
        dispatch(queryParamsSlice.actions.clearFilterParams())
        setSearchParams({ page: '1' })
    }

    useEffect(() => {
        setNotDataFlag(!isLoading && !isError)
    }, [isError, isLoading])

    return (
        <div style={{
            minWidth: 800,
        }}>
            <div style={{
                display: 'flex'
            }}>
                <span style={{
                    fontSize: 20,
                    fontWeight: 500,
                    visibility: !notDataFlag ? 'hidden' : 'visible'
                }}>Вопросы</span>
            </div>
                <p style={{
                    fontSize: 20,
                    visibility: !notDataFlag ? 'hidden' : 'visible'
                }}>
                    {!isLoading ? 'К сожалению, по запросу ничего не найдено. Попробуйте изменить запрос или воспользуйтесь нашими категориями' : ('Loading...')}
                </p> 
                
            {notDataFlag ? <Button clearFilters={clearFilters} text="Сбросить фильтры"/> : null}
        </div>
    )
}