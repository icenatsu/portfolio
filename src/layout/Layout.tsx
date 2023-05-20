import { Outlet } from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { createContext, useState, useEffect } from "react";
import styles from "./Layout.module.scss"

export interface IThemeContext {
    theme: string;
    toggleTheme: () => void
    checked: boolean;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const Layout = (): JSX.Element => {

    const [theme, setTheme] = useState<"light" | "dark">("dark")
    const [checked, setChecked] = useState<boolean>(false)

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
        setChecked((curr) => !curr)
    }

    useEffect(() => {
        const test = () => {
            if (theme === 'dark') {
                document.body.classList.remove("light")
                document.body.classList.add("dark");
            } else if (theme === 'light') {
                document.body.classList.remove("dark")
                document.body.classList.add("light");
            }
        }
        test();
    }, [theme]);


    return (
        < ThemeContext.Provider value={{ theme, toggleTheme, checked }}>
            <div className={styles[theme]}>
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
