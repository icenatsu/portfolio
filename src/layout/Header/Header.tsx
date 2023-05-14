import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png"
import Logo2 from "../../assets/img/logo2.png"



const Header = (): JSX.Element => {
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
        </header>
    );
};

export default Header;
