import styles from "./Projets.module.scss"
import Banner from "../../components/Banner/Banner"
import Slider from "../../components/Slider/Slider"
import { useFetch } from "../../Hooks/Fetch/useFetch"
import { useEffect, useState } from "react";
import styleSlider from "../../components/Slider/Slider.module.scss"
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useContext } from "react";


const Projets = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    const state = useFetch();

    const [currentIdx, setCurrentIdx] = useState(0);
    const [nextIdx, setNextIdx] = useState(0);
    const [prevIdx, setPrevIdx] = useState(0);
    const [nbProject, setNbProject] = useState(0);

    const cursorAnimation = (cursor: 'prev' | 'next') => {

        const pictures = document.getElementById(styleSlider.slider__pictures)
        const boxinfo = document.getElementById(styles.container)

        cursor === 'prev' ? pictures?.classList.add(styleSlider.translateprev) : pictures?.classList.add(styleSlider.translatenext)

        setTimeout(() => {
            cursor === "prev" ? setCurrentIdx(curr => curr === 0 ? nbProject - 1 : curr - 1) : setCurrentIdx(curr => curr === nbProject - 1 ? 0 : curr + 1)
            boxinfo?.classList.add(styles.animOpacity)
        }, 500)

        setTimeout(() => {
            cursor === "prev" ? pictures?.classList.remove(styleSlider.translateprev) : pictures?.classList.remove(styleSlider.translatenext)
        }, 550)

        setTimeout(() => {
            boxinfo?.classList.remove(styles.animOpacity)
        }, 1500)
    }

    function prevCursor() {
        cursorAnimation('prev');
    }

    function nextCursor() {
        cursorAnimation('next');
    }

    useEffect(() => {

        if (nbProject !== 0) {
            const timer1 = setTimeout(() => {
                setNextIdx(() => {
                    if (currentIdx + 1 > nbProject - 1) {
                        return nbProject - 1
                    }
                    return currentIdx + 1
                })

                setPrevIdx(() => {
                    if (currentIdx - 1 < 0) {
                        return nbProject - 1
                    }
                    return currentIdx - 1
                })
            }, 50)
            return (() => {
                clearTimeout(timer1)
            })
        }

    }, [currentIdx, nbProject])

    useEffect(() => {
        setNbProject(state.items.length)
    }, [state.items.length])


    if (state.items.length !== 0) {
        return (
            <div className={[styles.projects, themeContext?.isDarkMode ? styles['projects--dark'] : styles['projects--light']].join(' ')}>
                <Banner />
                <div className={styles.projects__content}>
                    <Slider
                        inData={state.items}
                        inCurrentIdx={currentIdx}
                        inPrevIdx={prevIdx}
                        inNextIdx={nextIdx}
                        inPrevCursor={prevCursor}
                        inNextCursor={nextCursor}
                    />
                    <div className={styles.background__title}></div>
                    <div className={styles.boxinfos}>
                        <div id={styles.container} className={styles.container}>
                            <h2 className={styles.container__title}>{state.items[currentIdx].title}</h2>
                            <p className={styles.container__description}>{state.items[currentIdx].description}</p>

                            <div className={styles.container__technologies}>
                                {Object.entries(state.items[currentIdx].technologies).map((techno, idx: number) => {
                                    return (
                                        <div className={styles.technologies} key={idx}>
                                            <figure className={styles.technologies__icones}>
                                                <img src={techno[1]} alt={`icone ${techno[0]}`}></img>
                                            </figure>
                                            <p className={styles.technologies__name}>{techno[0]}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className={styles.container__sources}>
                                {state.items[currentIdx].site !== undefined && <button className={styles.site}><a href={state.items[currentIdx].site}>Voir le site</a></button>}
                                <button className={styles.code}><a href={state.items[currentIdx].code}>Voir le code</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <></>
    )
};

export default Projets;