import styles from "./Projets.module.scss"
import Banner from "../../components/Banner/Banner"
import Slider from "../../components/Slider/Slider"
import { useFetch } from "../../Hooks/Fetch/useFetch"
import { useEffect, useState } from "react";
import styleSlider from "../../components/Slider/Slider.module.scss"
import Boxinfo from "../../components/Boxinfos/Boxinfos"
import stylesBoxinfo from "../../components/Boxinfos/Boxinfos.module.scss"
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import { useContext } from "react";


const Projets = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    const state = useFetch();
    console.log('state.items.length ===> ' + state.items.length);

    console.log();
    const [currentIdx, setCurrentIdx] = useState(0);
    const [nextIdx, setNextIdx] = useState(0);
    const [prevIdx, setPrevIdx] = useState(0);
    const [nbProject, setNbProject] = useState(0);

    const cursorAnimation = (cursor: 'prev' | 'next') => {

        const pictures = document.getElementById(styleSlider.slider__pictures)
        const boxinfo = document.getElementById(stylesBoxinfo.container)

        cursor === 'prev' ? pictures?.classList.add(styleSlider.translateprev) : pictures?.classList.add(styleSlider.translatenext)

        setTimeout(() => {
            cursor === "prev" ? setCurrentIdx(curr => curr === 0 ? nbProject - 1 : curr - 1) : setCurrentIdx(curr => curr === nbProject - 1 ? 0 : curr + 1)
            boxinfo?.classList.add(stylesBoxinfo.animOpacity)
        }, 500)

        setTimeout(() => {
            cursor === "prev" ? pictures?.classList.remove(styleSlider.translateprev) : pictures?.classList.remove(styleSlider.translatenext)
        }, 550)

        setTimeout(() => {
            boxinfo?.classList.remove(stylesBoxinfo.animOpacity)
        }, 1500)
    }

    function prevCursor() {
        cursorAnimation('prev');
    }

    function nextCursor() {
        cursorAnimation('next');
    }



    useEffect(() => {
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
    }, [currentIdx, nbProject])

    useEffect(() => {
        setNbProject(state.items.length)
        // setCurrentIdx(0);

    }, [state.items])

    console.log('nbProject ===> ' + nbProject);

    console.log(prevIdx, currentIdx, nextIdx);

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
                    <Boxinfo
                        inData={state.items}
                        inCurrentIdx={currentIdx}
                    />
                </div>
            </div>
        );
    }
    return (
        <></>
    )
};

export default Projets;