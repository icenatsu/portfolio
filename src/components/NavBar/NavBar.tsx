import styles from "./Navbar.module.scss"
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

interface NavBarProps {
    inHandleClick: () => void
}

const NavBar = ({ inHandleClick }: NavBarProps): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    const list = useRef<HTMLUListElement>(null)
    const testsup = useRef<HTMLLIElement>(null)

    useEffect(() => {
        themeContext?.darkLightMode(list.current, 'list', styles)
        themeContext?.darkLightMode(testsup.current, 'testsup', styles)
    }, [themeContext?.isDarkMode])

    return (
        <ul ref={list} id={styles.list} className={styles.list}>
            <li ref={testsup} className={styles.list__item} onClick={inHandleClick}><NavLink to="/">Accueil </NavLink></li>
            <li className={styles.list__item} onClick={inHandleClick}><NavLink to="/projets">Projets</NavLink></li>
            <li className={styles.list__item} onClick={inHandleClick}><NavLink to="/experience">Expérience</NavLink></li>
            <li className={styles.list__item} onClick={inHandleClick}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    );
};

export default NavBar;

