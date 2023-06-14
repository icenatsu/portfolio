import { createContext, useState, useEffect, PropsWithChildren } from "react";

interface IClasseDarkLightMode {
    current: HTMLElement | null;
    element: string | null,
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
        dark: T
    ) {

        dark.forEach(a => {
            if (a.current !== null) {

                if (isDarkMode) {
                    a.current.classList.add(a.scss[`${a.element}--dark`])
                    a.current.classList.remove(a.scss[`${a.element}--light`])
                } else {
                    a.current.classList.add(a.scss[`${a.element}--light`])
                    a.current.classList.remove(a.scss[`${a.element}--dark`])
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

