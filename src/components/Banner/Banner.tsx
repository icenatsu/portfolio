import styles from "./Banner.module.scss"
import BannerBg from "../../assets/img/banner_bg.png";

const Banner = (): JSX.Element => {
    return (
        <div className={styles.banner}>
            <div className={styles["banner__bg"]}>
                <img src={BannerBg} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;