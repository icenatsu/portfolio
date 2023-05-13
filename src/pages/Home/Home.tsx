import styles from "./Home.module.scss"
import Banner from "../../components/Banner/Banner"

const Home = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Banner></Banner>
        </div>
    );
};

export default Home;
