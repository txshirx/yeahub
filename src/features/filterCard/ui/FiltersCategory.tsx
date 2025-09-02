import { useAppDispatch, useAppSelector } from "@/app/providers/appStore/store"
import { filterSlice } from "../model/filterItems.slice"
import type { Skills, Specialization } from "@/shared/api/types/types"
import { FilterButton } from "./FilterButton"

type FilterItemsProps = {
    category: 'specializations' | 'skills',
    data: Skills[] | Specialization[]
}

export default function FiltersCategory({ data, category } : FilterItemsProps ) {
    const itemsState = useAppSelector(state => filterSlice.selectors.selectCategoryList(state, category))
    const dispatch = useAppDispatch()

    return (
        <div >
            <span>{category === 'specializations' ? 'Специализация' : 'Навыки'}</span>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                margin: '10px 0px',
            }}>
                {
                    itemsState ? data.map((item) => <FilterButton idData={[item.id]} filter={category} key={item.id} title={item.title}/>) :
                    data.slice(0, 4).map((item) => <FilterButton idData={[item.id]} filter={category} key={item.id} title={item.title}/>)
                }
            </div>
            <button onClick={() => dispatch(filterSlice.actions.showCategoryList({ category, value: !itemsState }))} style={{ color: "#6A0BFF", fontSize: 16 }}>
                {itemsState ? 'Скрыть' : 'Показать все'}
            </button>         
        </div>
    )
}