import { baseApi } from "@/shared/api/baseApi";
import type { ParamsType, QuestionsResponse } from "../types/types";

export const questionsQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestions: builder.query<QuestionsResponse, ParamsType>({ 
            query: (params) => {
                return {
                    url: '/questions/public-questions',
                    params: params
                }
            },
            providesTags: [{type: 'Questions', id: 'LIST'}],
        }),
    }),
    overrideExisting: true,
})

