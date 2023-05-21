import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png"
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useContext } from "react";
import Switch from "../../components/Switch/Switch";


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
            <div id={styles.autotext}></div>
            <div className={styles.switch}>
                <Switch checktheme={themeContext!.checkThemeUser} theme={themeContext!.theme} switchTheme={themeContext!.switchTheme} />
            </div>
        </header>
    );
};

export default Header;

