import styles from './Slider.module.scss';
import next from "../../assets/img/next.webp";
import prev from "../../assets/img/prev.webp"
import cadre from "../../../public/projects_img/covers/cadre.webp"


interface ISlider {
    inCovers: string[];
    inCurrentIdx: number,
    inPrevIdx: number,
    inNextIdx: number,
    inPrevCursor: () => void,
    inNextCursor: () => void,
    inTitle: string[];
}

const Slider = ({ inCovers, inCurrentIdx, inPrevIdx, inNextIdx, inPrevCursor, inNextCursor, inTitle }: ISlider): JSX.Element => {

    return (
        <div className={styles.slider}>
            <div className={styles["slider__chevron"]}>
                <img
                    className={styles["slider__chevron__prev"]}
                    src={prev}
                    onClick={inPrevCursor}
                    alt="Chevron précédent"
                />
                <img
                    className={styles["slider__chevron__next"]}
                    src={next}
                    onClick={inNextCursor}
                    alt="Chevron suivant"
                />
            </div>
            <div className={styles.overflow}>
                <div id={styles.slider__pictures} className={styles.slider__images}>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inCovers[inPrevIdx]} alt={inTitle[inPrevIdx]} /></figure>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inCovers[inCurrentIdx]} alt={inTitle[inCurrentIdx]} /></figure>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inCovers[inNextIdx]} alt={inTitle[inNextIdx]} /> </figure>
                </div>
            </div>
            <div className={styles.cadre}>
                <img src={cadre} alt="Dessin d'un ordinateur entourant le caroussel des images de projets" />
            </div>
        </div>

    );
};

export default Slider;