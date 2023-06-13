import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.webp"
import Switch from "../../components/Switch/Switch";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    const list = useRef<HTMLUListElement>(null)
    // const globalBackground = useRef<HTMLDivElement>(null)
    // const left = useRef<HTMLDivElement>(null)
    // const right = useRef<HTMLDivElement>(null)

    function handleClick() {
        if (window.innerWidth < 768 && list.current !== null) {
            list.current?.classList.contains(styles.mobile) ? list.current?.classList.remove(styles.mobile) : list.current?.classList.add(styles.mobile)
            // globalBackground.current?.classList.contains(styles.visible) ? globalBackground.current?.classList.remove(styles.visible) : globalBackground.current?.classList.add(styles.visible)
            // left.current?.classList.contains(styles.background__action__left) ? left.current?.classList.remove(styles.background__action__left) : left.current?.classList.add(styles.background__action__left)
            // right.current?.classList.contains(styles.background__action__right) ? right.current?.classList.remove(styles.background__action__right) : right.current?.classList.add(styles.background__action__right)
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
            {/* <div ref={globalBackground} className={styles.background__list__mobile}>
                <div ref={left} className={styles.background__list__mobile__left}></div>
                <div ref={right} className={styles.background__list__mobile__right}></div> */}
            {/* </div> */}
            <div id={styles.autotext}></div>
            <div className={styles.switch}>
                <Switch />
            </div>
            <div className={styles.burger} onClick={handleClick}><i className="fa-solid fa-bars fa-2xl"></i></div>
        </header >
    );
};

export default Header;

