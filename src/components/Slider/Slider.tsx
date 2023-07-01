import styles from './Slider.module.scss';
import next from "../../assets/img/next.webp";
import prev from "../../assets/img/prev.webp"
// import cadre from "../../../public/projects_img/covers/cadre.webp"
import { useEffect, useState } from "react";
interface ISlider {
    title: string;
    cover: {
        mobile?: string;
        tablette?: string;
        desktop?: string;

    },
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


    const [cadre, setCadre] = useState<string>('')
    const [altCadre, setAltCadre] = useState<string>('')
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [srcFormatImgPrevIdx, setSrcFormatImgPrevIdx] = useState<string | undefined>('')
    const [srcFormatImgNextIdx, setSrcFormatImgNextIdx] = useState<string | undefined>('')
    const [srcFormatImgCurrentIdx, setSrcFormatImgCurrentIdx] = useState<string | undefined>('')


    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    function detectMediaQueriesAndApplyCadre() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            setCadre("./projects_img/covers/cadre_mobile.webp")
            setAltCadre("Dessin d'un téléphone mobile")
            setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.mobile)
            setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.mobile)
            setSrcFormatImgNextIdx(inData[inNextIdx].cover.mobile)
        }
        if (window.matchMedia('(min-width: 768px) and (max-width: 992px)').matches) {
            setCadre("./projects_img/covers/cadre_tablette.webp")
            setAltCadre("Dessin d'une tablette")
            setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.tablette)
            setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.tablette)
            setSrcFormatImgNextIdx(inData[inNextIdx].cover.tablette)
        }
        if (window.matchMedia('(min-width: 992px) ').matches) {
            setCadre("./projects_img/covers/cadre.webp")
            setAltCadre("Dessin d'un ordinateur")
            setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.desktop)
            setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.desktop)
            setSrcFormatImgNextIdx(inData[inNextIdx].cover.desktop)
        }
    }


    useEffect(() => {
        detectMediaQueriesAndApplyCadre();
    }, [windowWidth, inData[inPrevIdx], inData[inCurrentIdx], inData[inNextIdx]]);

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
                <div id="slider__pictures" className={styles.slider__images}>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={srcFormatImgPrevIdx} alt={inData[inPrevIdx].title} /></figure>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={srcFormatImgCurrentIdx} alt={inData[inCurrentIdx].title} /></figure>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={srcFormatImgNextIdx} alt={inData[inNextIdx].title} /> </figure>
                </div>
            </div>
            <div className={styles.cadre}>
                <img src={cadre} alt={altCadre} />
            </div>
        </div>
    );
}

export default Slider;