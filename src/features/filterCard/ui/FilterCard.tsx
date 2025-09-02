import { useState, useEffect, type ChangeEvent } from "react";
import { useFilterQuery } from "../model/useFilterQuery";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import SearchIcon from "@/shared/ui/Icons/SearchIcon";
import { filtersQuery } from "../model/filters.api";
import { FilterButton } from "./FilterButton";
import NotDataFilterCard from "./NotDataFilterCard";
import { useSearchParams } from "react-router-dom";
import FiltersCategory from "./FiltersCategory";

export const FilterCard = () => {
  const [searchParams] = useSearchParams()
  const [searchValue, setSearchValue] = useState(searchParams.getAll('keywords').join(', '));
  const { setKeywords } = useFilterQuery('keywords');

  const { data: specializations } = filtersQuery.useGetSpecializationsQuery();
  const { data: skills } = filtersQuery.useGetSkillsQuery();

  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (setKeywords) {
      setKeywords(debouncedValue || debouncedValue === '' ? [debouncedValue] : []);
    }
  }, [debouncedValue]);

  if (!specializations || !skills) return <NotDataFilterCard/>;

  return (
    <div style={{ width: 390, display: "flex", alignSelf: "flex-start", flexDirection: "column", gap: 24, backgroundColor: "#fff", borderRadius: 24, padding: 24 }}>
      <div style={{ border: "1px solid #E8E8E8", borderRadius: 68, padding: "12px 24px", display: "flex", gap: 12 }}>
        <SearchIcon />
        <input
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Введите запрос..."
          style={{ border: "none", outline: "none", flex: 1, fontSize: 16 }}
          value={searchValue}
        />
      </div>
        <FiltersCategory data={specializations?.data} category="specializations"/>
        <FiltersCategory data={skills?.data} category="skills"/>
      <div>
        <span>Уровень сложности</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "10px 0px" }}>
          {[[1, 2, 3], [4, 5, 6], [7, 8], [9, 10]].map((group, idx) => (
            <FilterButton idData={group} key={idx} filter="complexity" title={`${group[0]}-${group.at(-1)}`} />
          ))}
        </div>
      </div>

      <div>
        <span>Рейтинг</span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "10px 0px" }}>
          {[1, 2, 3, 4, 5].map(item => (
            <FilterButton idData={[item]} key={item} filter="rate" title={item.toString()} />
          ))}
        </div>
      </div>
    </div>
  );
}
