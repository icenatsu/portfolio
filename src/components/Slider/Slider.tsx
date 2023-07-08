import styles from './Slider.module.scss';
import { useEffect, useState } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useContext } from "react";
import { useLocation } from 'react-router-dom';
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

    const themeContext = useContext(ThemeContext);


    const [srcImgDevice, setSrcImgDevice] = useState<string>(`./projects_img/covers/desktop/device_desktop.webp`);
    const [altImgDevice, setAltImgDevice] = useState<string>("Image desktop");
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [device, setDevice] = useState<"mobile" | "tablette" | "desktop">("desktop");

    const location = useLocation();

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    function detectMediaQueriesAndApplyImagesDetails() {

        if (location.pathname === "/projets") {

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
    }

    useEffect(() => {
        detectMediaQueriesAndApplyImagesDetails();
    }, [windowWidth, inData, location.pathname]);

    useEffect(() => {
        setSrcImgDevice(`./projects_img/covers/${device}/device_${device}.webp`)
        setAltImgDevice(`Image ${device}`)


        if (location.pathname === "/projets") {
            if (device === "mobile") {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = './projects_img/covers/mobile/device_mobile.webp';
                link.as = 'image';
                link.media = '(max-width: 768px)';
                document.head.appendChild(link);

            } else if (device === "tablette") {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = './projects_img/covers/tablette/device_tablette.webp';
                link.as = 'image';
                link.media = "(min-width: 769px) and (max-width: 992px)";
                document.head.appendChild(link);
            } else {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = './projects_img/covers/desktop/device_desktop.webp';
                link.as = 'image';
                link.media = '(min-width: 993px)';
                document.head.appendChild(link);

            }
        }
    }, [device, location.pathname])


    return (
        <div className={[styles.slider, themeContext?.isDarkMode ? styles['slider--dark'] : styles['slider--light']].join(' ')}>
            <div className={styles["slider__chevron"]}>
                <i
                    className={[styles["slider__chevron__prev"], 'fa-solid fa-arrow-rotate-left'].join(' ')}
                    onClick={inPrevCursor}
                >
                </i>
                <i
                    className={[styles["slider__chevron__next"], "fa-solid fa-arrow-rotate-right"].join(' ')}
                    onClick={inNextCursor}
                ></i>
                <a href='#title' aria-label="Descendre au niveau de la description du projet">
                    <i className={[styles.scroll, "fa-regular fa-circle-down"].join(' ')}></i>
                </a>
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