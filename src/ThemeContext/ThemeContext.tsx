import { createContext, useState, useEffect, PropsWithChildren } from "react";

export interface IThemeContext {
    isDarkMode: boolean,
    switchTheme: () => void
    darkLightMode: <T extends HTMLElement>(current: T | null, element: string | null, style: CSSModuleClasses) => void
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

    function darkLightMode<T extends HTMLElement>(
        current: T | null,
        element: string | null,
        styles: CSSModuleClasses,

    ) {



        if (current !== undefined && current !== null) {
            if (isDarkMode) {
                current.classList.add(styles[`${element}--dark`])
                current.classList.remove(styles[`${element}--light`])
            } else {
                current.classList.add(styles[`${element}--light`])
                current.classList.remove(styles[`${element}--dark`])
            }
        }
    }

    const switchTheme = () => {
        setIsDarkMode((curr) => curr = !curr)
    }

    return (
        < ThemeContext.Provider value={{ isDarkMode, switchTheme, darkLightMode }}>
            {children}</ ThemeContext.Provider >
    );
};

export default ThemeContextProvider;

