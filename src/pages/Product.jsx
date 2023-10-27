import { useEffect } from 'react'
import { useParams  } from "react-router-dom"
import SingleProductPage from "../components/tienda/SingleProductPage"
import { axiosGetData } from "../hooks/axiosGetData"

export default function Product() {

    //esta data la obtenemos de URL con datos pasados por ProductPage.jsx
    const {productCollection, productID} = useParams()

    //get data por categoria segun categoria pasada por URL
    const { data: dataApi, loading } = axiosGetData(`https://ratclub.onrender.com/rat-club-api/v1/products/collection/${productCollection}`)
    // const { data: dataApi, loading } = axiosGetData(`http://localhost:3002/rat-club-api/v1/products/collection/${productCollection}`)

    //find INDEX de item cuyo id sea igual al del params
    let productIndex = dataApi.findIndex(item => {
        return item._id == productID
    })

    //encontrar objeto que corresponde a ese id y pasarlo por prop
    let productToDisplay = dataApi[productIndex]


    useEffect(() => {
         console.log(dataApi)
    }, [])
 

    return (
        <>
        <div>
        <SingleProductPage
        //para el breadcrumb
        productCollection={productCollection}
        productID={productID}
        //data de product especifico
        singleProductObj={productToDisplay}
        loading={loading}
        />
        </div>
        </>
    )

}