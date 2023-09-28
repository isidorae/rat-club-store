import { useParams } from 'react-router-dom';


export default function ProductCollection() {

    const { productCollection } = useParams()
    console.log(productCollection)

    return(
        <>
        <h1>{productCollection}</h1>
        </>
    )

}