import styles from "./Contact.module.scss"
import Banner from "../../components/Banner/Banner"

const Contact = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <Banner></Banner>
            <form className={styles.form__contact} action="">
                <div className={styles.test}>
                    <label className={[styles.label, styles.lastname].join(' ')} htmlFor="lastName">
                        <p className={styles.entilted} >Nom :</p>
                        <input className={styles.input} type="text" id="lastName" />
                    </label>

                    <label className={[styles.label, styles.firsname].join(' ')} htmlFor="firstName">
                        <p className={styles.entilted} >Prénom :</p>
                        <input className={styles.input} type="text" id="firstName" />
                    </label>

                    <label className={[styles.label, styles.email].join(' ')} htmlFor="email">
                        <p className={styles.entilted} >E-mail :</p>
                        <input className={styles.input} type="email" id="email" />
                    </label>

                    <label className={[styles.label, styles.tel].join(' ')} htmlFor="tel">
                        <p className={styles.entilted} >Téléphone :</p>
                        <input className={styles.input} type="tel" id="tel" />
                    </label>

                    <label className={[styles.label, styles.objet].join(' ')} htmlFor="objet">
                        <p className={styles.entilted} >Objet :</p>
                        <input className={styles.input} type="text" id="objet" />
                    </label>

                    <label className={[styles.label, styles.message].join(' ')} >
                        <p className={styles.entilted}>message :</p>
                        <textarea className={styles.input} />
                    </label>

                </div>
            </form>
        </div>
    );
};
export default Contact;