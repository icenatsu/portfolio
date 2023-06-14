import styles from "./Header.module.scss"
// import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.webp"
import Switch from "../../components/Switch/Switch";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import NavBar from "../../components/NavBar/NavBar"
import stylesNavBar from "../../components/NavBar/Navbar.module.scss"

const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    function handleClick() {
        const list = document.getElementById(stylesNavBar.list)

        if (window.innerWidth < 768) {
            list?.classList.contains(stylesNavBar.mobile) ? list?.classList.remove(stylesNavBar.mobile) : list?.classList.add(stylesNavBar.mobile)
        }
    }

    const header = useRef<HTMLElement>(null)

    function darkLightMode() {
        if (header.current !== null) {
            if (themeContext?.isDarkMode) {
                header.current.classList.add(styles['header--dark'])
                header.current.classList.remove(styles['header--light'])
            } else {
                header.current.classList.add(styles['header--light'])
                header.current.classList.remove(styles['header--dark'])
            }
        }
    }

    useEffect(() => {
        darkLightMode()
    }, [themeContext?.isDarkMode])



    return (
        <header ref={header} className={styles.header}>
            <div className={styles.logo}><img src={Logo} alt="Dessin d'une cruche inclinée" /></div>
            <NavBar inHandleClick={handleClick} />
            <div id={styles.autotext}></div>
            <div className={styles.switch}>
                <Switch />
            </div>
            <div className={styles.burger} onClick={handleClick}><i className="fa-solid fa-bars fa-2xl"></i></div>
        </header >
    );
};

export default Header;

