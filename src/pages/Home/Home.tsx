import styles from "./Home.module.scss"
import Banner from "../../components/Banner/Banner"

const Home = (): JSX.Element => {
    return (
        <div className={styles.home}>
            <Banner inAnimation={{ animation: `${styles.rain} ${1.5}s ${600}ms ease-in forwards` }} />
        </div>
    );
};

export default Home;
