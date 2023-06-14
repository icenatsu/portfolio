import styles from "./Navbar.module.scss"
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

interface NavBarProps {
    inHandleClick: () => void
}

const NavBar = ({ inHandleClick }: NavBarProps): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    // const list = useRef<HTMLUListElement>(null)

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

    // useEffect(() => {
    //     darkLightMode()
    // }, [themeContext?.isDarkMode])

    const list = useRef<HTMLUListElement>(null)

    function darkLightMode<T,>(
        arg: T | null
    ) {

        console.log(arg);
        if (arg !== undefined && arg !== null) {
            if (themeContext?.isDarkMode) {
                arg.classList.add(styles[`${arg}--dark`])
                arg.classList.remove(styles[`${arg}--light`])
            } else {
                arg.classList.add(styles[`${arg}--light`])
                arg.classList.remove(styles[`${arg}--dark`])
            }
        }
    }

    useEffect(() => {
        darkLightMode<HTMLUListElement>(list.current)
    }, [themeContext?.isDarkMode])

    return (
        <ul ref={list} id={styles.list} className={styles.list}>
            <li className={styles.list__item} onClick={inHandleClick}><NavLink to="/">Accueil </NavLink></li>
            <li className={styles.list__item} onClick={inHandleClick}><NavLink to="/projets">Projets</NavLink></li>
            <li className={styles.list__item} onClick={inHandleClick}><NavLink to="/experience">Expérience</NavLink></li>
            <li className={styles.list__item} onClick={inHandleClick}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    );
};

export default NavBar;

