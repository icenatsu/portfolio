import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png"
import { useContext } from "react";
import { ThemeContext } from "../Layout";
import Switch from "react-switch"

const Header = (): JSX.Element => {

    const test = useContext(ThemeContext);

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
                <Switch className={styles.test} onChange={test!.toggleTheme} checked={test!.checked} offColor='#FFF' onColor='#FFF' offHandleColor="#444" onHandleColor="#890" activeBoxShadow="0 0 2px 3px #3bf" height={20} width={45} />
            </div>
        </header>
    );
};

export default Header;
