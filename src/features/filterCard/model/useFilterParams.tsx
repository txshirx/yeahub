// import { useCallback, useEffect, useRef } from "react"
// import { useSearchParams } from "react-router-dom"


// type FiltersQueryType = {
//     item: number[] | string[] | number,
//     filter: 'rate' | 'complexity' | 'skills' | 'specialization',
//     id: number | string
// }

// export const useFilterParams = ({ filter } : Pick<FiltersQueryType, 'filter'>) => {
//     const [searchParams, setSearchParams] = useSearchParams()
    
    
    
//     return useCallback(({ item } : Pick<FiltersQueryType, 'item'>) => {
//         const params = new URLSearchParams()
//         if (Array.isArray(item)) {
//             item.forEach(item => {
//                 if (searchParams.toString().includes(`${filter}=${item}`)) return;
//                 else params.append(filter, item.toString())
//             }
//         )} 
//         else {
//             if (searchParams.toString().includes(`${filter}=${item}`)) {
//                 setSearchParams(params)
//             }
//             else params.append(filter, item.toString())
//         }

//         setSearchParams(`${searchParams.toString()}&${params}`)

//     }, [filter])
// }