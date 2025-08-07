import PreviewQuestionCard from "./PreviewQuestionCard"
import NotDataCard from "./NotDataCard"
import { questionsQuery } from "@/shared/api/model/questions.api"


export default function PreviewCardList() {
    const { data, isLoading } = questionsQuery.useGetQuestionsQuery({})

    if (isLoading ) return <>Loading...</>
    if (!Array.isArray(data?.data) || data.data.length === 0) {
        return <NotDataCard/>
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
            {data.data.map((item) => (
                <PreviewQuestionCard 
                    key={item.id} 
                    title={item.title} 
                    id={item.id}
                    shortAnswer={item.shortAnswer}
                    rate={item.rate}
                    complexity={item.complexity}
                />
            ))} 
        </div>
    )
}