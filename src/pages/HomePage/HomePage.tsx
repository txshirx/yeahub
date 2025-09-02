import { ROUTES } from "@/shared/model/routes";
import { Header } from "@/widgets/header";
import { NavLink } from "react-router-dom";

export default function HomePage() {
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
                <NavLink to={ROUTES.QUESTIONS}>Страница вопросов</NavLink>
            </div>
        </>
    )
}