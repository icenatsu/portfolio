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

    const [srcImgdevice, setSrcImgDevice] = useState<string>('');
    const [altDevice, setAltDevice] = useState<string>('');
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [device, setDevice] = useState<string>('');

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function ImageDetails(device: string) {
        setSrcImgDevice(`./projects_img/covers/${device}/device_${device}.webp`)
        setAltDevice(`Dessin d'un téléphone ${device}`)
        setDevice(device)
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
    }, [windowWidth, inData]);

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
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inData[inPrevIdx].cover[device]} alt={inData[inPrevIdx].title} /></figure>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inData[inCurrentIdx].cover[device]} alt={inData[inCurrentIdx].title} /></figure>
                    <figure className={styles.slider__images__item}><img className={styles.slider__images__item__img} src={inData[inNextIdx].cover[device]} alt={inData[inNextIdx].title} /> </figure>
                </div>
            </div>
            <div className={styles.device}>
                <img src={srcImgdevice} alt={altDevice} />
            </div>
        </div>
    );
}
export default Slider;