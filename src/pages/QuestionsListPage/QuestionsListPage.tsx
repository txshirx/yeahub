import { FilterCard } from "@/features/filterCard";
import { Pagination } from "@/features/pagination";
import { PreviewCardsList } from "@/features/questionsCardsList";
import { Header } from "@/widgets/header";


export default function QuestionsListPage() {
    return (
        <>
            <Header/>
            <div style={{
                display: 'flex',
                gap: 20,
                marginTop: 100,
                width: 1200,
                marginInline: 'auto',
            }}>
                <div style={{
                    maxWidth: 800,
                    borderRadius: 24,
                    padding: '24px 20px',
                    boxShadow: '0px 4px 10px 0px #6A63761A',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'start',
                }}>
                    <PreviewCardsList/>
                    <Pagination/>
                </div>
                <FilterCard/>
            </div>
        </>
    )
}