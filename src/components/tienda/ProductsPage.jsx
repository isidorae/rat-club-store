import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import items from "../../items.json"

import ProductCard from "./ProductCard";

export default function ProductsPage({productCollection}) {

    let data;
    console.log(productCollection)

    if(`${productCollection}` === "alimentos") {
        data = items.food
    }
    if(`${productCollection}` === "accesorios") {
        data = items.accesories
    }
    if(`${productCollection}` === "juguetes") {
        data = items.toys
    }
    if(`${productCollection}` === "hogar") {
        data = items.hogar
    }
    

    return(
        <div className="products-page-container">
        <Container>
            <Row>
                <ProductCard data={data} productCollection={productCollection}/>
            </Row>
        </Container>
        </div>
    )

}