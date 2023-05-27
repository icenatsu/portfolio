import styles from "./Home.module.scss"
import Banner from "../../components/Banner/Banner"

const Home = (): JSX.Element => {
    return (
        <div className={styles.home}>
            <Banner animation={{ animation: `${styles.rain} ${1.5}s ${600}ms ease-in forwards` }} />
        </div>
    );
};
// animation: `fade ${item.duration} ${item.delay} infinite`
export default Home;
