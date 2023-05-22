import { createContext, useState, useEffect, PropsWithChildren } from "react";


export interface IThemeContext {
    matches: boolean,
    checkThemeUser: string,
    theme: string
    switchTheme: () => void
    // checkInitialThemeUser: () => string
}


export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeContextProvider = ({ children }: PropsWithChildren): JSX.Element => {

    const [matches, setMatches] = useState<boolean>(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const checkInitialThemeUser = () => {
        let checkThemeUser = matches ? 'dark' : 'light';
        return checkThemeUser
    }
    let checkThemeUser = checkInitialThemeUser()


    useEffect(() => {
        const removeClass = () => {
            document.body.classList.remove("light")
            document.body.classList.remove("dark")
        }
        removeClass()
    }, [checkThemeUser])

    const [theme, setTheme] = useState<string>(checkThemeUser)

    const switchTheme = () => {
        theme === "dark" ? setTheme('light') : setTheme('dark')
    }

    return (
        < ThemeContext.Provider value={{ matches, checkThemeUser, theme, switchTheme }}>
            {children}</ ThemeContext.Provider >
    );
};

export default ThemeContextProvider;

