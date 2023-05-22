import styles from "./Switch.module.scss";
import { useEffect } from "react";

interface ISwitch {
    checktheme: string;
    theme: string;
    switchTheme: () => void
    // checkInitialThemeUser: () => string
}

const Switch = ({ theme, switchTheme, checktheme }: ISwitch): JSX.Element => {
    // console.log(checktheme);


    useEffect(() => {
        const actuelle = checktheme
        console.log(actuelle);


        const switchClass = () => {
            if (theme === 'dark') {
                document.body.classList.remove("light")
                document.body.classList.add("dark");
            } else if (theme === 'light') {
                document.body.classList.remove("dark")
                document.body.classList.add("light");
            }
        }
        switchClass();
    }, [theme]);

    return (
        <label className={styles.switch} >
            <input type="checkbox" onChange={switchTheme} />
            <span className={styles.slider}><i className="fa-solid fa-circle-half-stroke"></i></span>
        </label>
    );
}

export default Switch;