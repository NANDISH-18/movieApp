import { useEffect, useState } from "react";
import {fetchDataFromApi} from "../utils/api"


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLodaing] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLodaing("loading...");
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((res) => {
                setLodaing(false);
                setData(res);
            })
            .catch((error) => {
                setLodaing(false);
                setError("Something went wrong");
            })

    },[url])

    return {data , loading, error}
}

export default useFetch;