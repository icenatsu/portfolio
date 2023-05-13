import styles from "./Contact.module.scss"
import Banner from "../../components/Banner/Banner"

const Contact = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Banner></Banner>
        </div>
    );
};

export default Contact;