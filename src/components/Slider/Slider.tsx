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

    const [srcImgDevice, setSrcImgDevice] = useState<string>(`./projects_img/covers/desktop/device_desktop.webp`);
    const [altImgDevice, setAltImgDevice] = useState<string>("Image desktop");
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [device, setDevice] = useState<"mobile" | "tablette" | "desktop">("desktop");

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function detectMediaQueriesAndApplyImagesDetails() {

        if (window.matchMedia("(max-width: 768px)").matches) {
            setDevice("mobile")
        }
        else if (window.matchMedia("(max-width: 992px").matches) {
            setDevice("tablette")
        }
        else {
            setDevice("desktop")
        }
    }

    useEffect(() => {
        detectMediaQueriesAndApplyImagesDetails();
    }, [windowWidth, inData]);

    useEffect(() => {
        setSrcImgDevice(`./projects_img/covers/${device}/device_${device}.webp`)
        setAltImgDevice(`Image ${device}`)
    }, [device])

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
                <img src={srcImgDevice} alt={altImgDevice} />
            </div>
        </div>
    );
}
export default Slider;