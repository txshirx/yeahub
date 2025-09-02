import { PreviewQuestionCard } from "./PreviewQuestionCard"
import { NotDataCard } from "@/shared/ui/components/NotDataCard/NotDataCard"
import { questionsQuery } from "@/shared/api/model/questions.api"
import { useAppDispatch } from "@/app/providers/appStore/store"
import { queryParamsSlice } from "@/shared/lib/slices/queryParams.slice"
import { useEffect } from "react"
import { useQueryParams } from "../model/useQueryParams"

export const PreviewCardsList = () => {
    const dispatch = useAppDispatch()
    const params = useQueryParams()
    const { data, isLoading, isError } = questionsQuery.useGetQuestionsQuery(params)

    useEffect(() => {
        dispatch(queryParamsSlice.actions.appendPageTotal({ value: data?.total }))
        dispatch(queryParamsSlice.actions.appendLimit({ value: data?.limit }))
    }, [data])

    if (isLoading) return <NotDataCard isLoading={isLoading}/>

    if (Array.isArray(data?.data) && data.data.length === 0) return <NotDataCard/>

    if (!Array.isArray(data?.data)) return <NotDataCard isError={isError}/>

    return (
        <>
            <div style={{
                display: 'flex'
            }}>
                <span style={{
                    fontSize: 20,
                    fontWeight: 500
                }}>Вопросы</span>
            </div>
            {data?.data.map((item) => (
                <PreviewQuestionCard 
                    key={item.id} 
                    title={item.title} 
                    id={item.id}
                    shortAnswer={item.shortAnswer}
                    rate={item.rate}
                    complexity={item.complexity}
                />                
            ))} 
        </>
    )
}