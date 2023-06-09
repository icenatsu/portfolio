import { useState, useEffect } from "react";

interface IntItems {
    title: string,
    description: string,
    cover: string,
    technologies: {
        html?: string;
        css?: string;
        sass?: string;
        react?: string;
        nodejs?: string;
    },
    site: string,
    code: string
}

interface IFetch {
    items: IntItems[]
    loading: boolean,
}


export const useFetch = (): IFetch => {
    const [state, setState] = useState<IFetch>({
        items: [],
        loading: true,
    });


    useEffect(() => {
        const fetchDatas = async (): Promise<void> => {
            try {
                const fetchconfig = await fetch("/projets.json");
                const response: IntItems[] | undefined = await fetchconfig.json();

                setState({
                    items: response || [],
                    loading: false,
                });
            } catch (e: any) {
                setState((s) => ({ ...s, loading: false }));
            }
        };
        fetchDatas();

    }, []);
    return state
}
