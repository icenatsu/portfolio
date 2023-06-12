import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.webp"
import Switch from "../../components/Switch/Switch";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    const [burger, SetBurger] = useState<boolean>(false)

    function handleClick() {
        SetBurger(!burger)
    }

    function useWindowSize() {

        function getSize() {
            return {
                width: window.innerWidth,
            };
        }
        const [windowSize, setWindowSize] = useState(getSize);

        useEffect(() => {

            function handleResize() {
                setWindowSize(getSize());
            }

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize;
    }
    const windowSize = useWindowSize()


    useEffect(() => {
        const list = document.getElementById(styles.list)
        burger ? list?.classList.add(styles.mobile) : list?.classList.remove(styles.mobile)

    }, [burger])

    useEffect(() => {

        if (windowSize.width > 768) {
            SetBurger(false)
        }
    }, [windowSize.width])


    function removeMobile() {
        SetBurger(false)
    }

    return (
        <header className={[styles.header, !themeContext?.isDarkMode ? styles['header--light'] : styles['header--dark']].join(' ')}>
            <div className={styles.logo}><img src={Logo} alt="Dessin d'une cruche inclinée" /></div>
            <ul id={styles.list} className={styles.list} >
                <li className={styles.list__item} onClick={removeMobile}><NavLink to="/">Accueil </NavLink></li>
                <li className={styles.list__item} onClick={removeMobile}><NavLink to="/projets">Projets</NavLink></li>
                <li className={styles.list__item} onClick={removeMobile}><NavLink to="/experience">Expérience</NavLink></li>
                <li className={styles.list__item} onClick={removeMobile}><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            {/* <div className={styles.background__list__mobile}></div> */}
            <div id={styles.autotext}></div>
            <div className={styles.switch}>
                <Switch />
            </div>
            <div id={styles.burger}
                className={styles.burger} onClick={handleClick}><i className="fa-solid fa-bars fa-2xl"></i></div>
        </header>
    );
};
// className={[
//     styles[`container__${page}__content`],
//     active && styles.active,
//   ].join(" ")}

export default Header;

// className={[styles.slider, themeContext?.isDarkMode ? styles['slider--dark'] : styles['slider--light']].join(' ')}