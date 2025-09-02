import { Answer, RatingItem } from "@/shared/ui/components";
import { questionQuery } from "../model/question.api";
import { useNavigate, useParams } from "react-router-dom";
import ComeBackArrow from "@/shared/ui/Icons/ComeBackArrow";
import { Colors } from "@/shared/constans/Colors";
import { NotDataCard } from "@/shared/ui/components/NotDataCard/NotDataCard";
import { FilterButton } from "@/features/filterCard/ui/FilterButton";

export const QuestionCard = () => {
    const { questionId: id } = useParams<{ questionId: string }>()
    const navigate = useNavigate()

    const { data, isLoading } = questionQuery.useGetQuestionQuery(Number(id))

    const backHandler = () => {
        navigate(-1)
    }

    if (isLoading) return <NotDataCard isLoading={isLoading}/>

    return (
        <div style={{
            display: 'flex',
            gap: 20,
            width: 1200,
            marginInline: 'auto',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20
            }}>
                <div onClick={() => backHandler()} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    cursor: 'pointer',
                    marginTop: 80
                }}>
                    <ComeBackArrow/> 
                    <p style={{ fontSize: 20, color: Colors.MainYeahub, lineHeight: 0.5}}>Назад</p>
                </div>

                <div style={{
                    width: 800,
                    borderRadius: 24,
                    padding: '20px 20px',
                    boxShadow: '0px 4px 10px 0px #6A63761A',
                    backgroundColor: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignSelf: 'start',
                }}>
                    <p style={{ fontSize: 24, lineHeight: 1.2 }}>
                        {data?.title}
                    </p>
                    <span>{data?.description}</span>
                </div>
                {data?.shortAnswer === data?.longAnswer ? 
                    (
                        <div style={{
                            maxWidth: 800,
                            borderRadius: 24,
                            padding: '20px 20px',
                            boxShadow: '0px 4px 10px 0px #6A63761A',
                            backgroundColor: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'start',
                        }}>
                            <p style={{ fontSize: 24, lineHeight: 0.5 }}>
                                Полный ответ
                            </p>
                            {data?.longAnswer ? <Answer answer={data.longAnswer}/> : ''}
                        </div>
                    ) 
                    :
                    (
                        <>
                            <div style={{
                                maxWidth: 800,
                                borderRadius: 24,
                                padding: '20px 20px',
                                boxShadow: '0px 4px 10px 0px #6A63761A',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignSelf: 'start',
                            }}>
                                <p style={{ fontSize: 24, lineHeight: 0.5 }}>
                                    Краткий ответ
                                </p>
                                {data?.shortAnswer ? <Answer answer={data.shortAnswer}/> : ''}
                            </div>
                            <div style={{
                                maxWidth: 800,
                                borderRadius: 24,
                                padding: '20px 20px',
                                boxShadow: '0px 4px 10px 0px #6A63761A',
                                backgroundColor: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignSelf: 'start',
                            }}>
                                <p style={{ fontSize: 24, lineHeight: 0.5 }}>
                                    Полный ответ
                                </p>
                                {data?.longAnswer ? <Answer answer={data.longAnswer}/> : ''}
                            </div>
                        </>
                    )
                }
            </div>
            <div style={{ marginTop: 150, width: 390, display: "flex", alignSelf: "flex-start", flexDirection: "column", gap: 24, backgroundColor: "#fff", borderRadius: 24, padding: 24 }}>
                <div>
                    <span>Уровень:</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "10px 0px" }}>
                        <RatingItem rate={data?.rate}/>
                        <RatingItem complexity={data?.complexity}/>
                    </div>
                </div>
                <div>
                    <span>Навыки:</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "10px 0px" }}>
                        {data?.questionSkills.map(item => (
                            <FilterButton key={item.id} filter='skills' idData={[item.id]} title={item.title}/>
                        ))}
                    </div>
                </div>  

                <div>
                    <span>Ключевые слова:</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "10px 0px" }}>
                        {data?.keywords.map(item => (
                            <span key={item} style={{color: Colors.MainYeahub}}>#{item}</span>
                        ))}
                    </div>
                </div>  

            </div>
        </div>
    )
}