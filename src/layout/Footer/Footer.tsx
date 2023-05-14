import styles from "./Footer.module.scss"
// import FooterBg from "../../assets/img/test.jpg"

const Footer = (): JSX.Element => {
    return (
        <footer>
            <ul className={styles.infos}>
                <li className={styles['infos__item']}>Gaëlle Blanchard</li>
                <li className={styles['infos__item']}>Marseille 13013</li>
                <li className={styles['infos__item']}>0610623612</li>
            </ul>
            <ul className={styles.reseaux}>
                <li className={styles['reseaux__item']}><a href="https://www.linkedin.com/in/icenatsu/"><i className="fa-brands fa-linkedin" aria-label="Linkedin"></i></a></li>
                <li className={styles['reseaux__item']}><a href="https://github.com/icenatsu"><i className="fa-brands fa-github" aria-label="GitHub"></i></a></li>
            </ul>
        </footer>
    );
};

export default Footer;