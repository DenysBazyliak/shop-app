import {Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../store/store.ts";

export const RootLayout = () => {
    return (
        <>
            <Provider store={store}>
                <main>
                    <Outlet/>
                </main>
            </Provider>
        </>
    )
}