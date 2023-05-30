import styles from "./Banner.module.scss"
import { useEffect, useContext, useState } from "react";
import BannerBgDark from "../../assets/img/banner_bg_dark.png";
import BannerBgLight from "../../assets/img/banner_bg_light.png";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

interface IBanner {
    animation?: { animation?: string },
}

const Banner = ({ animation = {} }: IBanner): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    let [BannerSrc, SetBannerSrc] = useState<string>(themeContext!.isDarkMode ? BannerBgDark : BannerBgLight)

    useEffect(() => {
        themeContext!.isDarkMode ? SetBannerSrc(BannerBgDark) : SetBannerSrc(BannerBgLight)
    }, [themeContext!.isDarkMode])

    return (
        <div className={styles.banner}>
            <div className={styles.banner__bg} style={animation}>
                <img src={BannerSrc} alt={'Image animée de code'} />
            </div>
        </div>
    );
};

export default Banner;