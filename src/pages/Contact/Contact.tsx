import styles from "./Contact.module.scss"
import Banner from "../../components/Banner/Banner"

const Contact = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Banner></Banner>
            <div className={styles.form__contact}>
                <label className={styles.lastname} htmlFor="lastName">Nom :</label>

                <input className={styles.test} type="text" id="lastName" placeholder="tape ton nom" />

            </div>
        </div>
    );
};

export default Contact;