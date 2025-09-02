import { baseApi } from "@/shared/api/baseApi";
import type { Question } from "@/shared/api/types/types";

export const questionQuery = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestion: builder.query<Question, number>({
            query: (id) => `/questions/public-questions/${id}`
        })
    })
})