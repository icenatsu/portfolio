import styles from "./Banner.module.scss"
import { useEffect, useContext, useState } from "react";
import BannerBgDark from "../../assets/img/banner_bg_dark.png";
import BannerBgLight from "../../assets/img/banner_bg_light.png";
import { ThemeContext } from "../../layout/Layout";


const Banner = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    let [BannerSrc, SetBannerSrc] = useState<string>(BannerBgDark)

    useEffect(() => {
        const checkTheme = () => {
            if (themeContext!.theme === "dark") {
                SetBannerSrc(BannerBgDark)
            } else if (themeContext!.theme === "light") {
                SetBannerSrc(BannerBgLight)
            }
        }
        checkTheme()
    }, [themeContext!.theme])

    return (
        <div className={styles.banner}>
            <div className={styles["banner__bg"]}>
                <img src={BannerSrc} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;