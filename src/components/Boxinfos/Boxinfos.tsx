import styles from './Boxinfos.module.scss'
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useContext } from "react";

interface IBox {
    inTitle: string[],
    inDescription: string[],
    inTechnologies: [string, string][][],
    inSite: string[],
    inCode: string[],
    inCurrentIdx: number
}

const Boxinfos = ({ inTitle, inDescription, inTechnologies, inSite, inCode, inCurrentIdx }: IBox): JSX.Element => {

    const themeContext = useContext(ThemeContext);


    return (
        <div className={[styles.boxinfos, themeContext?.isDarkMode ? styles['boxinfos--dark'] : styles['boxinfos--light']].join(' ')}>
            <div id={styles.container} className={styles.container}>
                <h2 className={styles.container__title}>{inTitle[inCurrentIdx]}</h2>
                <p className={styles.container__description}>{inDescription[inCurrentIdx]}</p>

                <div className={styles.container__technologies}>
                    {inTechnologies.length !== 0 && inTechnologies[inCurrentIdx].map((techno, idx: number) => {
                        return (
                            <div className={styles.technologies} key={idx}>
                                <figure className={styles.technologies__icones}>
                                    <img src={techno[1]} alt=''></img>
                                </figure>
                                <p className={styles.technologies__name}>{techno[0]}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.container__sources}>
                    {inSite[inCurrentIdx] !== undefined && <button className={styles.site}><a href={inSite[inCurrentIdx]}>Voir le site</a></button>}
                    <button className={styles.code}><a href={inCode[inCurrentIdx]}>Voir le code</a></button>
                </div>
            </div>
        </div>
    );
};

export default Boxinfos;