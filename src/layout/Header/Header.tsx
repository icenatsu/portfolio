import styles from "./Header.module.scss"
import { NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png"
import { ThemeContext } from "../Layout";
import { useContext, useState, useEffect } from "react";
import Switch from "../../components/Switch/Switch";


const Header = (): JSX.Element => {

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

    const [width, setWidth] = useState<number>(60);
    const [height, setHeight] = useState<number>(30);


    useEffect(() => {

        const checkAndChangeDimensions = () => {
            if (windowSize.width < 993 && windowSize.width > 768) {
                setWidth(53)
                setHeight(27)
            }
            else if (windowSize.width < 770) {
                setWidth(44)
                setHeight(22)
            } else {
                setWidth(60)
                setHeight(30)
            }
        }
        checkAndChangeDimensions();

    }, [windowSize]);




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
                <Switch toggleTheme={themeContext!.toggleTheme} width={width} height={height} />
            </div>
        </header>
    );
};

export default Header;

