import { filterSlice } from "@/features/filterCard/model/filterItems.slice"
import { WhiteButton } from "@/shared/ui/components/Button/WhiteButton"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

export default function NotDataCard() {

    const dispatch = useDispatch()

    const clearFilters = () => {
        dispatch(filterSlice.actions.clearFilters())
    }

    return (
        <div style={{
            minWidth: 800,
            borderRadius: 24,
            padding: '24px 20px',
            boxShadow: '0px 4px 10px 0px #6A63761A',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'start'
        }}>
            <div style={{
                display: 'flex'
            }}>
                <span style={{
                    fontSize: 20,
                    fontWeight: 500
                }}>Вопросы</span>
            </div>
            <p style={{
                fontSize: 20
            }}>К сожалению, по запросу ничего не найдено. Попробуйте изменить запрос или воспользуйтесь нашими категориями</p>
            <WhiteButton clearFilters={clearFilters} text="Сбросить фильтры"/>
        </div>
    )
}