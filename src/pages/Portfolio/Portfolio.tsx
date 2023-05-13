import styles from "./Portfolio.module.scss"
import Banner from "../../components/Banner/Banner"

const Portfolio = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Banner></Banner>
        </div>
    );
};

export default Portfolio;