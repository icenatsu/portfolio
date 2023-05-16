import { Outlet } from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { createContext } from "react";
import { useState } from "react";
import styles from "./Layout.module.scss"

export interface IThemeContext {
    theme: string;
    toggleTheme: () => void
    checked: boolean;
}

export const ThemeContext = createContext<IThemeContext | null>(null);



const Layout = (): JSX.Element => {

    const [theme, setTheme] = useState<"light" | "dark">("dark")
    const [checked, setChecked] = useState(false)

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
        setChecked((curr) => !curr)
    }

    return (
        < ThemeContext.Provider value={{ theme, toggleTheme, checked }}>
            <div className="App" id={styles[theme]}>
                <Header />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ ThemeContext.Provider >
    );
};

export default Layout;
