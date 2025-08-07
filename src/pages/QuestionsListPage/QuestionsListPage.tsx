import FilterCard from "@/features/filterCard/ui/FilterCard";
import PreviewCardsList from "@/features/questionsCardsList/ui/PreviewCardsList";
import Header from "@/widgets/header/ui/Header";

export default function QuestionsListPage() {
    console.log('render page')
    return (
        <>
            <Header/>
            <div style={{
                display: 'flex',
                gap: 20,
                marginTop: 124,
                width: 1200,
                marginInline: 'auto',
            }}>
                <PreviewCardsList/>
                <FilterCard/>
            </div>
        </>
    )
}