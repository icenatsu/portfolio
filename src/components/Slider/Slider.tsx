import styles from './Slider.module.scss';
import next from "../../assets/img/next.webp";
import prev from "../../assets/img/prev.webp"
import cadre from "../../../public/projects_img/covers/cadre.webp"

interface ISlider {
    cover: string;
    title: string;
    [propName: string]: any,
}

interface SliderProps {
    inData: ISlider[]
    inCurrentIdx: number,
    inPrevIdx: number,
    inNextIdx: number,
    inPrevCursor: () => void,
    inNextCursor: () => void,
}

const Slider = ({ inData, inCurrentIdx, inPrevIdx, inNextIdx, inPrevCursor, inNextCursor }: SliderProps): JSX.Element => {

    if (inData.length !== 0) {
        // console.log(inPrevIdx);

        // console.log(inData);
        // console.log(inData[inPrevIdx].cover);
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
                        <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inData[inPrevIdx].cover} alt={inData[inPrevIdx].title} /></figure>
                        <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inData[inCurrentIdx].cover} alt={inData[inCurrentIdx].title} /></figure>
                        <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inData[inNextIdx].cover} alt={inData[inNextIdx].title} /> </figure>
                    </div>
                </div>
                <div className={styles.cadre}>
                    <img src={cadre} alt="Dessin d'un ordinateur entourant le caroussel des images de projets" />
                </div>
            </div>
        );
    }

};

export default Slider;