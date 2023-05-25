import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png"
import Switch from "../../components/Switch/Switch";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";


const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    return (
        <header>
            <div className={styles.logo}><img src={Logo} alt="logo" /></div>
            <ul className={styles.list}>
                <li className={styles["list__item"]}><NavLink to="/">Accueil </NavLink></li>
                <li className={styles["list__item"]}><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li className={styles["list__item"]}><NavLink to="/experience">Expérience</NavLink></li>
                <li className={styles["list__item"]}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div id={styles.autotext} className={[!themeContext?.isDarkMode ? styles.light : styles.dark].join('')}></div>
            <div className={styles.switch}>
                <Switch />
            </div>
        </header>
    );
};

export default Header;

// className={[styles.slider, themeContext?.isDarkMode ? styles['slider--dark'] : styles['slider--light']].join(' ')}