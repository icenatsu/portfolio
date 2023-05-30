
import { useState, useEffect } from "react";
import { ISlider } from "../../components/Slider/Slider";


interface IFetch {
    loading: boolean,
    items: ISlider[]
}


export const useFetch = (): IFetch => {
    const [state, setState] = useState<IFetch>({
        items: [],
        loading: true,
    });

    useEffect(() => {
        const fetchDatas = async (data?: string): Promise<void> => {
            try {
                let fetchconfig = await fetch("/projets.json");
                let response: ISlider[] | undefined = await fetchconfig.json();

                setState({
                    items: response || [],
                    loading: false,
                });
            } catch (e) {
                setState((s) => ({ ...s, loading: false }));
            }
        };
        fetchDatas();

    }, []);
    return state;
}
