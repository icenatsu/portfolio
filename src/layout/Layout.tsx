import { Outlet } from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import ThemeContextProvider from '../ThemeContext/ThemeContext'

const Layout = (): JSX.Element => {

    return (
        <>
            <ThemeContextProvider>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </ThemeContextProvider>
        </>
    );
};

export default Layout;
