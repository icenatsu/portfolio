import styles from './Slider.module.scss';
import next from "../../assets/img/next.webp";
import prev from "../../assets/img/prev.webp"
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

    const [device, setDevice] = useState<string>('');
    const [altDevice, setAltDevice] = useState<string>('');
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [srcFormatImgPrevIdx, setSrcFormatImgPrevIdx] = useState<string | undefined>('');
    const [srcFormatImgNextIdx, setSrcFormatImgNextIdx] = useState<string | undefined>('');
    const [srcFormatImgCurrentIdx, setSrcFormatImgCurrentIdx] = useState<string | undefined>('');

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const mobileDevice = window.matchMedia('(max-width: 768px)').matches
    const tabletteDevice = window.matchMedia('(max-width: 992px)').matches

    function detectMediaQueriesAndApplyImagesDetails() {
        if (mobileDevice) {
            setDevice("./projects_img/covers/mobile/cadre_mobile.webp")
            setAltDevice("Dessin d'un téléphone mobile")
            setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.mobile)
            setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.mobile)
            setSrcFormatImgNextIdx(inData[inNextIdx].cover.mobile)
        }
        else if (tabletteDevice) {
            setDevice("./projects_img/covers/tablette/cadre_tablette.webp")
            setAltDevice("Dessin d'une tablette")
            setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.tablette)
            setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.tablette)
            setSrcFormatImgNextIdx(inData[inNextIdx].cover.tablette)
        }
        else {
            setDevice("./projects_img/covers/desktop/cadre.webp")
            setAltDevice("Dessin d'un ordinateur")
            setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.desktop)
            setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.desktop)
            setSrcFormatImgNextIdx(inData[inNextIdx].cover.desktop)
        }
    }

    useEffect(() => {
        detectMediaQueriesAndApplyImagesDetails();
    }, [window.innerWidth, inData[inPrevIdx], inData[inCurrentIdx], inData[inNextIdx]]);

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
            <div className={styles.device}>
                <img src={device} alt={altDevice} />
            </div>
        </div>
    );
}

export default Slider;

    // function detectMediaQueriesAndApplyImagesDetails() {
    //     setDevice(() => {
    //         if (mobileDevice) {
    //             return "./projects_img/covers/mobile/cadre_mobile.webp"
    //         } else if (tabletteDevice) {
    //             return "./projects_img/covers/tablette/cadre_tablette.webp"
    //         } else {
    //             return "./projects_img/covers/desktop/cadre.webp"
    //         }
    //     })
    //     setAltDevice(() => {
    //         if (mobileDevice) {
    //             return "Dessin d'un téléphone mobile"
    //         } else if (tabletteDevice) {
    //             return "Dessin d'une tablette"
    //         } else {
    //             return "Dessin d'un ordinateur"
    //         }
    //     })
    //     setSrcFormatImgPrevIdx(() => {
    //         if (mobileDevice) {
    //             return inData[inPrevIdx].cover.mobile
    //         } else if (tabletteDevice) {
    //             return inData[inPrevIdx].cover.tablette
    //         } else {
    //             return inData[inPrevIdx].cover.desktop
    //         }
    //     })
    //     setSrcFormatImgCurrentIdx(() => {
    //         if (mobileDevice) {
    //             return inData[inCurrentIdx].cover.mobile
    //         } else if (tabletteDevice) {
    //             return inData[inCurrentIdx].cover.tablette
    //         } else {
    //             return inData[inCurrentIdx].cover.desktop
    //         }
    //     })
    //     setSrcFormatImgNextIdx(() => {
    //         if (mobileDevice) {
    //             return inData[inNextIdx].cover.mobile
    //         } else if (tabletteDevice) {
    //             return inData[inNextIdx].cover.tablette
    //         } else {
    //             return inData[inNextIdx].cover.desktop
    //         }
    //     })
    // }