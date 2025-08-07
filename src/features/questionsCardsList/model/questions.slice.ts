import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type QuestionId = number

type QuestionState = {
    isClickedMore: boolean
}

type QuestionsState = {
    questions: Record<QuestionId, QuestionState | undefined>
}

const initialQuestionsState: QuestionsState = {
    questions: {}
}

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: initialQuestionsState,
    reducers: {
        infoQuestion: (state, action: PayloadAction<{ questionId: QuestionId, value: boolean }>) => {
            if (state.questions[action.payload.questionId]) {
                state.questions[action.payload.questionId]!.isClickedMore = action.payload.value
            }
            else {
                state.questions[action.payload.questionId] = { isClickedMore: action.payload.value }
            }
        },
    },
    selectors: {
        selectQuestionsInfo: (state, id: number) => state.questions[id]?.isClickedMore
    }
})