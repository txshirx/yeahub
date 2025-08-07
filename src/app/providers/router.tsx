import { ROUTES } from "@/shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import QuestionsListPage from "@/pages/QuestionsListPage/QuestionsListPage";
import { AppLayout } from "../layouts";
import { store } from "./appStore/store";
import { questionsQuery } from "@/shared/api/model/questions.api";

console.log('render router')

export const router = createBrowserRouter([
    {  
        path: ROUTES.QUESTIONS,
        element: <AppLayout><QuestionsListPage/></AppLayout>,
        loader: async () => {
            const result = await store.dispatch(
                questionsQuery.endpoints.getQuestions.initiate({})
            )
            return result
        },
        children: [
            {
                path: ROUTES.QUESTION,
                element: <></>
            }
        ]
    },
    {
        path: '*',
        element: <></>
    }
])