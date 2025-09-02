import type { ParamsType } from "@/shared/api/types/types"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useQueryParams = () => {
    const [searchParams] = useSearchParams()

    const parseSearchParams = (searchParams: URLSearchParams): ParamsType => {
        const initial: ParamsType = {
            specializations: [],
            skills: [],
            rate: [],
            complexity: [],
            keywords: [],
            page: 1,
        }

        for (const key of Object.keys(initial) as (keyof ParamsType)[]) {
            const value = searchParams.get(key)

            if (!value) continue

            if (["specializations", "skills", "rate", "complexity", "keywords"].includes(key)) {
                initial[key] = value.split(",") as never
            } else if (key === "page") {
                initial[key] = Number(value) as never
            }
        }
        return initial
    }

    const [params, setParams] = useState<ParamsType>(() => parseSearchParams(searchParams))

    useEffect(() => {
        setParams(parseSearchParams(searchParams))
    }, [searchParams])

    return params
}