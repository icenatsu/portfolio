import styles from './Slider.module.scss';
import next from "../../assets/img/next.webp";
import prev from "../../assets/img/prev.webp"
import { useEffect, useState } from "react";
interface ISlider {
    title: string;
    cover: { [key: string]: string },
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

    function ImageDetails(device: string) {
        setDevice(`./projects_img/covers/${device}/device_${device}.webp`)
        setAltDevice(`Dessin d'un téléphone ${device}`)
        setSrcFormatImgPrevIdx(inData[inPrevIdx].cover[device])
        setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover[device])
        setSrcFormatImgNextIdx(inData[inNextIdx].cover[device])
    }

    function detectMediaQueriesAndApplyImagesDetails() {
        const mobileDevice = window.matchMedia('(max-width: 768px)').matches
        const tabletteDevice = window.matchMedia('(max-width: 992px)').matches

        if (mobileDevice) {
            ImageDetails('mobile')
        }
        else if (tabletteDevice) {
            ImageDetails('tablette')
        }
        else {
            ImageDetails('desktop')
        }
    }

    useEffect(() => {
        detectMediaQueriesAndApplyImagesDetails();
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
            <div className={styles.device}>
                <img src={device} alt={altDevice} />
            </div>
        </div>
    );
}
export default Slider;

// function detectMediaQueriesAndApplyImagesDetails() {
//     const mobileDevice = window.matchMedia('(max-width: 768px)').matches
//     const tabletteDevice = window.matchMedia('(max-width: 992px)').matches
//     if (mobileDevice) {
//         ImageDetails('mobile')
//         setDevice("./projects_img/covers/mobile/cadre_mobile.webp")
//         setAltDevice("Dessin d'un téléphone mobile")
//         setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.mobile)
//         setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.mobile)
//         setSrcFormatImgNextIdx(inData[inNextIdx].cover.mobile)
//     }
//     else if (tabletteDevice) {
//         setDevice("./projects_img/covers/tablette/cadre_tablette.webp")
//         setAltDevice("Dessin d'une tablette")
//         setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.tablette)
//         setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.tablette)
//         setSrcFormatImgNextIdx(inData[inNextIdx].cover.tablette)
//     }
//     else {
//         setDevice("./projects_img/covers/desktop/cadre.webp")
//         setAltDevice("Dessin d'un ordinateur")
//         setSrcFormatImgPrevIdx(inData[inPrevIdx].cover.desktop)
//         setSrcFormatImgCurrentIdx(inData[inCurrentIdx].cover.desktop)
//         setSrcFormatImgNextIdx(inData[inNextIdx].cover.desktop)
//     }
// }