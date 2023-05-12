import styles from "./Footer.module.scss"


const Footer = (): JSX.Element => {
    return (
        <footer>
            <div className={styles.container}>
                <ul className={styles.infos}>
                    <li className={styles['infos__item']}>Gaëlle Blanchard</li>
                    <li className={styles['infos__item']}>Marseille 13013</li>
                    <li className={styles['infos__item']}>0610623612</li>
                </ul>
                <ul className={styles.reseaux}>
                    <li className={styles['reseaux__item']}><i className="fa-brands fa-linkedin" aria-label="Linkedin"></i></li>
                    <li className={styles['reseaux__item']}><i className="fa-brands fa-github" aria-label="GitHub"></i></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;