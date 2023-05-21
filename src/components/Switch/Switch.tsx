import styles from "./Switch.module.scss";
import { useEffect } from "react";

interface ISwitch {
    checktheme: string;
    theme: string;
    switchTheme: () => void
}

const Switch = ({ theme, switchTheme }: ISwitch): JSX.Element => {

    useEffect(() => {

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


// Léorio
/********/

// import { useRef } from "react";
// import styles from "./Switch.module.scss";

// interface SwitchProps {
//     toggleTheme: () => void,
//     width: number,
//     height: number,
// }

// const Switch = ({ toggleTheme, width, height }: SwitchProps): JSX.Element => {

//     const sliderRef = useRef<HTMLDivElement>(null);
//     console.log(sliderRef.current)

//     const changeTheme = (): void => {
//         toggleTheme()
//         if (sliderRef.current?.classList.contains(styles.selected)) {
//             sliderRef.current?.classList.remove(styles.selected)
//             sliderRef.current!.style.left = "3px";
//         } else {
//             sliderRef.current?.classList.add(styles.selected)
//             const positionSlider = width - (height - 3);
//             sliderRef.current!.style.left = `${positionSlider}px`;
//         }
//     }

//     return (
//         <div className={styles.switch} style={{ width: width, height: height }}>
//             <div className={styles.slider}
//                 style={{ width: height - 6, height: height - 6 }}
//                 ref={sliderRef}
//                 onClick={changeTheme}>
//             </div>
//         </div>
//     );
// }

// export default Switch;