import { useParams } from "react-router-dom"
import items from "../items.json"
import SingleProductPage from "../components/tienda/SingleProductPage"


export default function Product() {

    const {productCollection, productID} = useParams()


    console.log(productID)
    console.log(productCollection)
    let itemData;
    console.log(items.accesories)


    if(productCollection === "accesorios"){
        itemData = items.accesories
    }
    if(productCollection === "hogar"){
        itemData = items.hogar
    }
    if(productCollection === "alimentos"){
        itemData = items.food
    }
    if(productCollection === "juguetes"){
        itemData = items.toys
    }

    const productIndex = itemData.findIndex(item => {
        return item.id == productID
    })

    const productToDisplay = itemData[productIndex];

    return (
        <>
        <div>
        <SingleProductPage
        productCollection={productCollection}
        singleProductObj={productToDisplay}
        />
        </div>
        </>
    )

}