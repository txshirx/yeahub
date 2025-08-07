import VisibleItemsList from "@/features/filterCard/ui/VisibleItemsList";
import SearchIcon from "@/shared/ui/Icons/SearchIcon";
import { filtersQuery } from "../model/filters.api";
import { FilterButton } from "./FilterButton";


export default function FilterCard() {
    const { data: specializations } = filtersQuery.useGetSpecializationsQuery()
    const { data: skills } = filtersQuery.useGetSkillsQuery()

    if (!specializations || !skills) return <>Loading...</>

    console.log('render filter card')

    return (
        <div style={{
            width: 390,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            backgroundColor: "#fff",
            borderRadius: 24,
            padding: 24,
        }}>
            <div style={{
                border: "1px solid #E8E8E8",
                borderRadius: 68,
                padding: "12px 24px",
                display: "flex",
                gap: 12,
            }}>
                <SearchIcon />
                <input
                    id="search-input"
                    type="text"
                    placeholder="Введите запрос..."
                    style={{
                        border: "none",
                        outline: "none",
                        flex: 1,
                        fontSize: 16,
                    }}
                />
            </div>

            <VisibleItemsList specializations={specializations?.data} category="specializations"/>
            <VisibleItemsList  skills={skills?.data} category="skills"/>
            <div>
                Уровень сложности
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    margin: '10px 0px',

                }}>
                    {[[1, 2, 3], [4, 5, 6], [7, 8], [9, 10]].map(item => <FilterButton id={item[0]} data={item} key={`${item}`} filter='complexity' title={`${item[0]}-${item.at(-1)}`}/>)}
                </div>
            </div>
            <div>
                Рейтинг
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    margin: '10px 0px',

                }}>
                    {[1, 2, 3, 4, 5].map(item => <FilterButton id={item} key={`${item}`} filter='rate' title={item.toString()}/>)}
                </div>
            </div>
        </div>
    );
}
