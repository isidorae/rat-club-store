import { useState, useEffect} from 'react';
import axios from 'axios'

export function axiosGetData(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState (true);

    useEffect(() => {
        getData()
}, [])

    const getData = async () => {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data)
        setLoading(false);
        console.log(await response.data)
    }


    return {data, loading}

}