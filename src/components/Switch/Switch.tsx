import styles from "./Switch.module.scss";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";


const Switch = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    useEffect(() => {
        const switchClass = () => {
            if (themeContext!.theme === 'dark') {
                document.body.classList.remove("light")
                document.body.classList.add("dark");
            } else if (themeContext!.theme === 'light') {
                document.body.classList.remove("dark")
                document.body.classList.add("light");
            }
        }
        switchClass();
    }, [themeContext!.theme]);

    return (
        <label className={styles.switch} >
            <input type="checkbox" onChange={themeContext!.switchTheme} />
            <span className={styles.slider}><i className="fa-solid fa-circle-half-stroke"></i></span>
        </label>
    );
}

export default Switch;