import { useState, useEffect } from "react";


export const useFetch = <T,>(): {
    items: T | undefined
    error: string | undefined
} => {

    const [items, setItems] = useState<T | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined)

    const fetchDatas = async (): Promise<void> => {
        try {
            const response = await (await fetch("./projets.json")).json();
            setItems(response);

        } catch (e: any) {
            setError(e);
        }
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    return { items, error }
}


