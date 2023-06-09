import styles from './Boxinfos.module.scss'
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useContext } from "react";

interface IntInData {
    title: string,
    description: string,
    // technologies: {
    //     html?: string;
    //     css?: string;
    //     sass?: string;
    //     react?: string;
    //     nodejs?: string;
    // },
    site: string,
    code: string,
    [propName: string]: any,
}

interface BoxinfosProps {
    inData: IntInData[],
    inCurrentIdx: number,
}

const Boxinfos = ({ inData, inCurrentIdx }: BoxinfosProps): JSX.Element => {


    const themeContext = useContext(ThemeContext);

    return (
        <>
            <div className={[styles.boxinfos, themeContext?.isDarkMode ? styles['boxinfos--dark'] : styles['boxinfos--light']].join(' ')}>
                <div id={styles.container} className={styles.container}>
                    <h2 className={styles.container__title}>{inData[inCurrentIdx].title}</h2>
                    <p className={styles.container__description}>{inData[inCurrentIdx].description}</p>

                    {/* <div className={styles.container__technologies}>
                        {inTechnologies.length !== 0 && inTechnologies[inCurrentIdx].map((techno, idx: number) => {
                            return (
                                <div className={styles.technologies} key={idx}>
                                    <figure className={styles.technologies__icones}>
                                        <img src={techno[1]} alt={`icone ${techno[0]}`}></img>
                                    </figure>
                                    <p className={styles.technologies__name}>{techno[0]}</p>
                                </div>
                            )
                        })}
                    </div> */}
                    <div className={styles.container__sources}>
                        {inData[inCurrentIdx].site !== undefined && <button className={styles.site}><a href={inData[inCurrentIdx].site}>Voir le site</a></button>}
                        <button className={styles.code}><a href={inData[inCurrentIdx].code}>Voir le code</a></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Boxinfos;