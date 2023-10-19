import { useState, useEffect} from 'react';
import axios from 'axios'

export function axiosGetData(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (true);

    const getData = async () => {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data)
        setLoading(false);
    }


    useEffect(() => {
            getData()
            console.log(data)
    }, [])


    return {data, loading}

}