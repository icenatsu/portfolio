import styles from "./Header.module.scss"
import Logo from "../../assets/img/logo.svg"
import Switch from "../../components/Switch/Switch";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import NavBar from "../../components/NavBar/NavBar"
import stylesNavBar from "../../components/NavBar/Navbar.module.scss"

const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    function handleClick() {
        const navBar = document.getElementById('navBar')

        if (window.innerWidth < 768) {
            navBar?.classList.contains(stylesNavBar.mobile) ? navBar?.classList.remove(stylesNavBar.mobile) : navBar?.classList.add(stylesNavBar.mobile)
        }
    }

    const header = useRef<HTMLElement>(null)

    useEffect(() => {
        if (header.current !== null) {
            const componentForCssChange = [
                {
                    htmlElement: header.current,
                    name: 'header',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
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

