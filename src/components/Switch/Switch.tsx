import styles from "./Switch.module.scss";


const Switch = (props): JSX.Element => {
    return (
        <label className={styles.switch} style={{ width: props.width, height: props.height }}>
            <input type="checkbox" onChange={props.toggleTheme} />
            <span className={styles.slider} />
        </label>
    );
}

export default Switch;