import styles from "./Projets.module.scss"
import Banner from "../../components/Banner/Banner"
import Slider from "../../components/Slider/Slider"
import { useFetch } from "../../Hooks/Fetch/useFetch"


const Projets = (): JSX.Element => {

    const state = useFetch();

    const covers = state.items.map((projects) => {
        return (projects.cover)
    })

    return (
        <div className={styles.projects}>
            <Banner />
            <Slider
                cover={covers}
            />
        </div>
    );
};

export default Projets;