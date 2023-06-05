import styles from './Slider.module.scss';
import next from "../../assets/img/next.png";
import prev from "../../assets/img/prev.png"


interface ISlider {
    inCovers: string[];
    inCurrentIdx: number,
    inPrevIdx: number,
    inNextIdx: number,
    inPrevCursor: () => void,
    inNextCursor: () => void
}

const Slider = ({ inCovers, inCurrentIdx, inPrevIdx, inNextIdx, inPrevCursor, inNextCursor }: ISlider): JSX.Element => {

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
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inCovers[inPrevIdx]} alt='' /></figure>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inCovers[inCurrentIdx]} alt='' /></figure>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inCovers[inNextIdx]} alt='' /> </figure>
                </div>
            </div>
        </div>

    );
};

export default Slider;