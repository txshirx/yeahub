import { baseApi } from "@/shared/api/baseApi";
import type { ParamsType, QuestionsResponse } from "../types/types";


export const questionsQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestions: builder.query<QuestionsResponse, ParamsType>({ 
            query: (params) => {
                const filteredParams: ParamsType = {};

                (Object.entries(params) as [keyof ParamsType, unknown][]).forEach(([key, value]) => {
                    if (Array.isArray(value) && value.length > 0 && key !== 'keywords' && key !== 'page') {
                        filteredParams[key] = value as number[]
                    }
                    else if (key === 'keywords' && Array.isArray(value) && value.length > 0) {
                        filteredParams[key] = value as string[]
                    }
                    else if (key === 'page') {
                        filteredParams[key] = value as number
                    }
                });
                return {
                    url: '/questions/public-questions',
                    params: filteredParams,
                }
            },
            providesTags: [{type: 'Questions', id: 'LIST'}],
        }),
    }),
    overrideExisting: false,
})

