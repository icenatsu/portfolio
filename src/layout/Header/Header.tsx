import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.webp"
import Switch from "../../components/Switch/Switch";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    const list = useRef<HTMLUListElement>(null)

    function handleClick() {
        if (window.innerWidth < 768 && list.current !== null) {
            list.current?.classList.contains(styles.mobile) ? list.current?.classList.remove(styles.mobile) : list.current?.classList.add(styles.mobile)
        }
    }

    return (
        <header className={[styles.header, !themeContext?.isDarkMode ? styles['header--light'] : styles['header--dark']].join(' ')}>
            <div className={styles.logo}><img src={Logo} alt="Dessin d'une cruche inclinée" /></div>

            <ul ref={list} className={styles.list} >
                <li className={styles.list__item} onClick={handleClick}><NavLink to="/">Accueil </NavLink></li>
                <li className={styles.list__item} onClick={handleClick}><NavLink to="/projets">Projets</NavLink></li>
                <li className={styles.list__item} onClick={handleClick}><NavLink to="/experience">Expérience</NavLink></li>
                <li className={styles.list__item} onClick={handleClick}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div id={styles.autotext}></div>
            <div className={styles.switch}>
                <Switch />
            </div>
            <div className={styles.burger} onClick={handleClick}><i className="fa-solid fa-bars fa-2xl"></i></div>
        </header >
    );
};

export default Header;

