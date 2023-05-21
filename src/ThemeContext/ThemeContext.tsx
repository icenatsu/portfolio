import { createContext, useState, useEffect, PropsWithChildren } from "react";


export interface IThemeContext {
    matches: boolean,
    checkThemeUser: string,
    theme: string
    switchTheme: () => void
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

    const [theme, setTheme] = useState<string>(checkThemeUser)

    const switchTheme = () => {
        if (theme === "dark") {
            setTheme('light')
        } else if (theme === "light") {
            setTheme('dark')
        }
    }

    return (
        < ThemeContext.Provider value={{ matches, checkThemeUser, theme, switchTheme }}>
            {children}</ ThemeContext.Provider >
    );
};

export default ThemeContextProvider;

