import { createContext, useState, useEffect, PropsWithChildren } from "react";

interface IClasseDarkLightMode {
    current: HTMLElement | null;
    name: string | null,
    scss: CSSModuleClasses,
}
export interface IThemeContext {
    isDarkMode: boolean,
    switchTheme: () => void,
    darkLightMode: <T extends IClasseDarkLightMode[]> (dark: T) => void
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

    function darkLightMode<T extends IClasseDarkLightMode[]>(
        classList: T
    ) {

        classList.forEach(el => {
            if (el.current !== null) {
                if (isDarkMode) {
                    el.current.classList.add(el.scss[`${el.name}--dark`])
                    el.current.classList.remove(el.scss[`${el.name}--light`])
                } else {
                    el.current.classList.add(el.scss[`${el.name}--light`])
                    el.current.classList.remove(el.scss[`${el.name}--dark`])
                }
            }
        })
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

