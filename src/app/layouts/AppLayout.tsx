import { Provider } from "react-redux";
import { store } from "../providers";

export default function AppLayout({ children } : { children: React.ReactNode }) {

    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}