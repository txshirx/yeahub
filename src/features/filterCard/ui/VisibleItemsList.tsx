import { useAppDispatch, useAppSelector } from "@/app/providers/appStore/store"
import { filterSlice } from "../model/filterItems.slice"
import type { Skills, Specialization } from "@/shared/api/types/types"
import { FilterButton } from "./FilterButton"

type FilterItemsProps = {
    specializations?: Specialization[],
    skills?: Skills[],
    category: string
}

export default function VisibleItemsList({ specializations, skills, category } : FilterItemsProps ) {

    const itemsState = useAppSelector(state => category === 'specializations' ? filterSlice.selectors.selectSpecializations(state) : filterSlice.selectors.selectSkills(state))

    const dispatch = useAppDispatch()


    return (
        <div >
            {category === 'specializations' ? 'Специализация' : 'Навыки'}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                margin: '10px 0px',
            }}>
                
                { category === 'specializations' ? (
                    itemsState ? specializations?.map((item) => <FilterButton id={item.id} filter={'specializations'} key={item.id} title={item.title}/>) :
                     specializations?.slice(0, 4).map((item) => <FilterButton id={item.id} filter={'specializations'} key={item.id} title={item.title}/>)
                    )
                    :
                    (
                        itemsState ? skills?.map((item) => <FilterButton id={item.id} filter='skills' key={item.id} title={item.title}/>) :
                        skills?.slice(0, 4).map((item) => <FilterButton id={item.id} filter='skills' key={item.id} title={item.title}/>)
                    )
                }
            </div>
            <button onClick={() => dispatch(category === 'specializations' ? filterSlice.actions.specializationItemsVisible({ state: !itemsState }) : filterSlice.actions.skillsItemsVisible({ state: !itemsState }))} style={{ display: '', color: "#6A0BFF", fontSize: 16 }}>
                {itemsState ? 'Скрыть' : 'Показать все'}
            </button>         
        </div>
    )
}