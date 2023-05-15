import { Outlet } from "react-router-dom";
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { createContext } from "react";
import useState from "react";

export const ThemeContext: React.Context<string> = createContext('light')


const Layout = (): JSX.Element => {

    const [theme, setTheme] = useState("light")

    // const toggleTheme = (): void => {
    //     setTheme((curr: string) => (curr === 'light' ? 'dark' : 'light'));
    // }

    return (
        // < ThemeContext.Provider value={{ theme, setTheme }}>
        <div className="App" id="light">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
        // </ ThemeContext.Provider >
    );
};

export default Layout;
