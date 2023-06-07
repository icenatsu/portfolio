import styles from "./Banner.module.scss"
import { useEffect, useContext, useState } from "react";
import BannerBgDark from "../../assets/img/banner_bg_dark.webp";
import BannerBgLight from "../../assets/img/banner_bg_light.webp";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

interface IBanner {
    inAnimation?: { animation?: string },
}

const Banner = ({ inAnimation = {} }: IBanner): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    const [BannerSrc, SetBannerSrc] = useState<string>(themeContext!.isDarkMode ? BannerBgDark : BannerBgLight)

    useEffect(() => {
        themeContext!.isDarkMode ? SetBannerSrc(BannerBgDark) : SetBannerSrc(BannerBgLight)
    }, [themeContext!.isDarkMode])

    return (
        <div className={styles.banner}>
            <div className={styles.banner__bg} style={inAnimation}>
                <img src={BannerSrc} alt='Image animée de code' />
            </div>
        </div>
    );
};

export default Banner;