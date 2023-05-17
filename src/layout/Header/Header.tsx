import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png"
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../Layout";
import Switch from "react-switch"

const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    function useWindowSize() {


        function getSize() {
            return {
                width: window.innerWidth,
                height: window.innerHeight
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

    const [width, setWidth] = useState<number>(55);
    const [height, setHeight] = useState<number>(30);


    useEffect(() => {

        const checkAndChangeDimensions = () => {
            if (windowSize.width < 993 && windowSize.width > 768) {
                setWidth(curr => curr = 50)
                setHeight(curr => curr = 25)
            }
            else if (windowSize.width < 770) {
                setWidth(curr => curr = 45)
                setHeight(curr => curr = 20)
            } else {
                setWidth(curr => curr = 55)
                setHeight(curr => curr = 30)
            }
        }
        checkAndChangeDimensions();

    }, [windowSize]);

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
                <Switch className={styles.switchtwo} onChange={themeContext!.toggleTheme} checked={themeContext!.checked} offColor='#FFF' onColor='#FFF' offHandleColor="#444" onHandleColor="#890" activeBoxShadow="0 0 2px 3px #3bf" height={height} width={width} />
            </div>
        </header>
    );
};

export default Header;
