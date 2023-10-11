import { useParams } from "react-router-dom"
import items from "../items.json"
import SingleProductPage from "../components/tienda/SingleProductPage"


export default function Product() {

    const {productCollection, productID} = useParams()


    console.log(productID)
    console.log(productCollection)
    let itemData;
    console.log(items.accesories)

    //para el breadcrumb
    switch(productCollection) {
        case "alimentos":
        {itemData = items.food}
        break;
        case "accesorios":
        {itemData = items.accesories}
        break;
        case "juguetes":
        {itemData = items.toys}
        break;
        case "hogar":
        {itemData = items.hogar}
        break;
        default:
        {console.log("error getting productCollection")}
    }
    
    //encontrar producto individual a mostrar
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