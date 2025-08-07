import { baseApi } from "@/shared/api/baseApi";
import type { SkillsResponse, SpecializationsResponse } from "@/shared/api/types/types";

export const filtersQuery = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSpecializations: build.query<SpecializationsResponse, void>({
            query: () => '/specializations',
            providesTags: ['Specializations']
        }),
        getSkills: build.query<SkillsResponse, void>({
            query: () => '/skills',
            providesTags: ['Skills']
        })
    })
})