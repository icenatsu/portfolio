import styles from "./Navbar.module.scss"
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

interface NavBarProps {
    inHandleClick: () => void
}

const NavBar = ({ inHandleClick }: NavBarProps): JSX.Element => {

    const themeContext = useContext(ThemeContext);
    const navBar = useRef<HTMLUListElement>(null)

    useEffect(() => {
        if (navBar.current !== null) {
            const componentForCssChange = [
                {
                    htmlElement: navBar.current,
                    name: 'navBar',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext?.isDarkMode])

    return (
        <ul ref={navBar} id='navBar' className={styles.navBar}>
            <li className={styles.navBar__item} onClick={inHandleClick}><NavLink to="/">Accueil </NavLink></li>
            <li className={styles.navBar__item} onClick={inHandleClick}><NavLink to="/projets">Projets</NavLink></li>
            <li className={styles.navBar__item} onClick={inHandleClick}><NavLink to="/experience">Expérience</NavLink></li>
            <li className={styles.navBar__item} onClick={inHandleClick}><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    );
};

export default NavBar;

