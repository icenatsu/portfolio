import styles from "./Switch.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";

const Switch = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);

    return (
        <label className={styles.switch} htmlFor="switch">
            <input type="checkbox" checked={!themeContext?.isDarkMode} onChange={themeContext?.switchTheme} id="switch" name='switch' aria-label='switch theme' />
            <span className={[styles.slider, themeContext?.isDarkMode ? styles['slider--dark'] : styles['slider--light']].join(' ')} ><i className="fa-solid fa-moon"></i><i className="fa-solid fa-sun"></i></span>
        </label>
    );
}

export default Switch;