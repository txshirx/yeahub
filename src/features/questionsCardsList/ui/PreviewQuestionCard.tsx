import { useAppDispatch, useAppSelector } from "@/app/providers/appStore/store"
import ItemQuestionEllipse from "@/shared/ui/Icons/ItemQuestionEllipse"
import MoreButtonQuestionIcon from "@/shared/ui/Icons/MoreButtonQuestionIcon"
import { questionsSlice } from "../model/questions.slice"
import { Answer, RatingItem } from "@/shared/ui/components"
import type { Question } from "@/shared/api/types/types"
import React from "react"

type PreviewCardQuestionProps = Pick<Question, 'title' | 'id' | 'shortAnswer' | 'rate' | 'complexity'>

function PreviewQuestionCard({ title, id, shortAnswer, rate, complexity }: PreviewCardQuestionProps) {
    const dispatch = useAppDispatch()
    console.log('main questions list')
    const clicked = useAppSelector(state => questionsSlice.selectors.selectQuestionsInfo(state, id))

    console.log('render card', id)

    return (
        <>
            <div
                onClick={() => dispatch(questionsSlice.actions.infoQuestion({ questionId: id, value: !clicked }))}
                style={{
                    width: 760,
                    minHeight: 64,
                    borderBottom: clicked ? '' : 'solid #D1D1D1 1px',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
            >
                <div style={{
                    display: 'flex',
                    gap: 8,
                    alignItems: 'center',
                }}>
                    <ItemQuestionEllipse />
                    <span>{title}</span>
                </div>
                <MoreButtonQuestionIcon />
            </div>


            <div
                style={{
                    maxWidth: 768,
                    maxHeight: clicked ? '100%' : 0, 
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease, opacity 0.4s ease',
                    opacity: clicked ? 1 : 0,
                    pointerEvents: clicked ? 'auto' : 'none',
                    borderBottom: 'solid #D1D1D1 1px',
                    cursor: 'pointer',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 40,
                    padding: clicked ? '16px 0' : '0', 
                    transition: 'padding 0.4s ease'
                }}>
                    <RatingItem rate={rate} />
                    <RatingItem complexity={complexity} />
                </div>
                <Answer answer={shortAnswer} />
            </div>
        </>
    )
}

export default React.memo(PreviewQuestionCard)