import { ROUTES } from "@/shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import QuestionsListPage from "@/pages/QuestionsListPage/QuestionsListPage";
import { AppLayout } from "../layouts";
import { store } from "./appStore/store";
import { questionsQuery } from "@/shared/api/model/questions.api";
import { queryParamsSlice } from "@/shared/lib/slices/queryParams.slice";
import HomePage from "@/pages/HomePage/HomePage";
import QuestionPage from "@/pages/QuestionPage/QuestionPage";

const params = queryParamsSlice.selectors.selectAllFilterParams(store.getState())

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <HomePage/>
    },
    {  
        path: ROUTES.QUESTIONS,
        element: <AppLayout><QuestionsListPage/></AppLayout>,
        loader: async () => {
            const result = await store.dispatch(
                questionsQuery.endpoints.getQuestions.initiate(params)
            )
            return result
        }
    },
    {
        path: ROUTES.QUESTION,
        element: <AppLayout><QuestionPage/></AppLayout>
    },
    {
        path: '*',
        element: <></>
    }
])