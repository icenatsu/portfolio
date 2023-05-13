import styles from "./Experience.module.scss";
import Banner from "../../components/Banner/Banner"

const Experience = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Banner></Banner>
        </div>
    );
};

export default Experience;