import styles from "./Header.module.scss"
// import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.webp"
import Switch from "../../components/Switch/Switch";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import NavBar from "../../components/NavBar/NavBar"
import stylesNavBar from "../../components/NavBar/Navbar.module.scss"

const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    function handleClick() {
        const list = document.getElementById(stylesNavBar.list)
        console.log('coucou');

        if (window.innerWidth < 768) {
            list?.classList.contains(stylesNavBar.mobile) ? list?.classList.remove(stylesNavBar.mobile) : list?.classList.add(stylesNavBar.mobile)
        }
    }

    return (
        <header className={[styles.header, !themeContext?.isDarkMode ? styles['header--light'] : styles['header--dark']].join(' ')}>
            <div className={styles.logo}><img src={Logo} alt="Dessin d'une cruche inclinée" /></div>
            <NavBar inHandleClick={handleClick} />
            <div id={[styles.autotext, !themeContext?.isDarkMode ? styles['autotext--light'] : styles['autotext--dark']].join(' ')}></div>
            <div className={styles.switch}>
                <Switch />
            </div>
            <div className={styles.burger} onClick={handleClick}><i className="fa-solid fa-bars fa-2xl"></i></div>
        </header >
    );
};

export default Header;

