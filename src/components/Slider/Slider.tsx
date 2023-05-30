import styles from './Slider.module.scss';
import next from "../../assets/img/next.png";
import prev from "../../assets/img/prev.png"
import { useReducer } from "react";

interface IItems {
    cover: string[];
}
export interface ISlider {
    title: string,
    description: string,
    cover: string,
    technologies: string,
    icones: string,
    lien_site: string,
    lien_code: string
}

const Slider = ({ cover }: IItems): JSX.Element => {

    type State = number;

    type Action =
        | { type: 'next' }
        | { type: 'prev' };

    const [currentSlide, dispatch] = useReducer(reducer, 0);

    function reducer(state: State, action: Action): State {

        switch (action.type) {
            case "next":
                return state === cover.length - 1 ? 0 : state + 1;
            case "prev":
                return state === 0 ? cover.length - 1 : state - 1;

            default:
                return state
        }
    }
    console.log(currentSlide);


    return (
        <div className={styles["projects-info"]}>
            <div className={styles.slider}>
                <div className={styles["slider__next-previous"]}>
                    <img
                        className={styles["slider__next-previous__prev"]}
                        src={prev}
                        onClick={() => dispatch({ type: "prev" })}
                        alt="previous"
                    />
                    <img
                        className={styles["slider__next-previous__next"]}
                        src={next}
                        onClick={() => dispatch({ type: "next" })}
                        alt="next"
                    />
                </div>
                <div className={styles.slider__pictures} style={{ transform: `translateX(${-currentSlide * 100}% )` }}>

                    {cover.map((picture, idx) => (
                        <div className={styles.slider__pictures__item} key={idx}>
                            <img src={picture} alt='image' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;