import styles from "./Projets.module.scss"
import Banner from "../../components/Banner/Banner"
import Slider from "../../components/Slider/Slider"
import { useFetch } from "../../Hooks/Fetch/useFetch"
import { useEffect, useState } from "react";
import styleSlider from "../../components/Slider/Slider.module.scss"
import Boxinfo from "../../components/Boxinfos/Boxinfos"
import stylesBoxinfo from "../../components/Boxinfos/Boxinfos.module.scss"


const Projets = (): JSX.Element => {

    const state = useFetch();

    const covers = state.items.map(projects => projects.cover)
    const title = state.items.map(projects => projects.title)
    const description = state.items.map(projects => projects.description)
    const technologies = state.items.map(projects => Object.entries(projects.technologies))
    const site = state.items.map(projects => projects.site)
    const code = state.items.map(projects => projects.code)

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
            currentIdx + 1 > nbProject - 1 ? setNextIdx(0) : setNextIdx(currentIdx + 1)
            currentIdx - 1 < 0 ? setPrevIdx(nbProject - 1) : setPrevIdx(currentIdx - 1)
        }, 50)

        return (() => {
            clearTimeout(timer1)
        })
    }, [currentIdx, nbProject])

    useEffect(() => {
        setNbProject(covers.length)
    }, [covers])


    return (
        <div className={styles.projects}>
            <Banner />
            <div className={styles.projects__content}>
                <Slider
                    inCovers={covers}
                    inCurrentIdx={currentIdx}
                    inPrevIdx={prevIdx}
                    inNextIdx={nextIdx}
                    inPrevCursor={prevCursor}
                    inNextCursor={nextCursor}
                />
                <Boxinfo
                    inTitle={title}
                    inDescription={description}
                    inTechnologies={technologies}
                    inSite={site}
                    inCode={code}
                    inCurrentIdx={currentIdx}
                />
            </div>
        </div>
    );
};

export default Projets;