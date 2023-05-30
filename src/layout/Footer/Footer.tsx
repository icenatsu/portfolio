import styles from "./Footer.module.scss"
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Footer = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);


    return (
        <footer className={[!themeContext?.isDarkMode ? styles.light : styles.dark].join('')}>
            <ul className={styles.infos}>
                <li className={styles.infos__item}>Gaëlle Blanchard</li>
                <li className={styles.infos__item}>Marseille 13013</li>
                <li className={styles.infos__item}>0610623612</li>
            </ul>
            <ul className={styles.reseaux}>
                <li className={styles.reseaux__item}><a href="https://www.linkedin.com/in/icenatsu/"><i className="fa-brands fa-linkedin" aria-label="Linkedin"></i></a></li>
                <li className={styles.reseaux__item}><a href="https://github.com/icenatsu"><i className="fa-brands fa-github" aria-label="GitHub"></i></a></li>
            </ul>
        </footer>
    );
};

export default Footer;