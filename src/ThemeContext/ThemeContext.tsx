import { createContext, useState, useEffect, PropsWithChildren } from "react";

export interface IThemeContext {
    isDarkMode: boolean,
    switchTheme: () => void
}

export const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeContextProvider = ({ children }: PropsWithChildren): JSX.Element => {

    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )

    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener('change', e => setIsDarkMode(e.matches));
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark')
            document.body.classList.remove("light");
        } else {
            document.body.classList.add('light')
            document.body.classList.remove("dark");
        }
    }, [isDarkMode])

    // function darkLightMode() {
    //     if (list.current !== null) {
    //         if (themeContext?.isDarkMode) {
    //             list.current.classList.add(styles['list--dark'])
    //             list.current.classList.remove(styles['list--light'])
    //         } else {
    //             list.current.classList.add(styles['list--light'])
    //             list.current.classList.remove(styles['list--dark'])
    //         }
    //     }
    // }

    const switchTheme = () => {
        setIsDarkMode((curr) => curr = !curr)
    }

    return (
        < ThemeContext.Provider value={{ isDarkMode, switchTheme }}>
            {children}</ ThemeContext.Provider >
    );
};

export default ThemeContextProvider;

