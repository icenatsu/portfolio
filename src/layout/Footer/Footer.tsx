import styles from "./Footer.module.scss"
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Footer = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);


    return (
        <footer className={[styles.footer, !themeContext?.isDarkMode ? styles.light : styles.dark].join(' ')}>
            <ul className={styles.infos}>
                <li className={styles.infos__item}>Gaëlle Blanchard</li>
                <li className={styles.infos__item}>Marseille 13013</li>
                <li className={styles.infos__item}>0610623612</li>
            </ul>
            <ul className={styles.reseaux}>
                <li className={styles.reseaux__item}><a aria-label="Me rejoindre sur Linkedin" href="https://www.linkedin.com/in/icenatsu/"><i className="fa-brands fa-linkedin" ></i></a></li>
                <li className={styles.reseaux__item}><a aria-label="Me rejoindre sur GitHub" href="https://github.com/icenatsu"><i className="fa-brands fa-github"  ></i></a></li>
            </ul>
        </footer>
    );
};

export default Footer;