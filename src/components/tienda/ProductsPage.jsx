import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import items from "../../items.json"

import ProductCard from "./ProductCard";

export default function ProductsPage({productCollection}) {

    let data;
    console.log(productCollection)

    //desde database - - > en vez de cargar data = items.food; hacemos fetch
    // de url render.com/store/:collection ... data va a ser igual al fetch de eso.. 

    switch(productCollection) {
        case "alimentos":
        {data = items.food}
        break;
        case "accesorios":
        {data = items.accesories}
        break;
        case "juguetes":
        {data = items.toys}
        break;
        case "hogar":
        {data = items.hogar}
        break;
        default:
        {console.log("error getting productCollection")}
    }
    

    return(
        <div className="products-page-container">
        <Container>
            <Row>
                <ProductCard
                data={data}
                productCollection={productCollection}
                />
            </Row>
        </Container>
        </div>
    )

}