import { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { axiosGetData } from '../../hooks/axiosGetData';

import ProductCard from "./ProductCard";

import CartContext from '../../context/CartContext';


export default function ProductsPage({productCollection}) {

    //USE CONTEXT
    const { addToCart } = useContext(CartContext)

    //will store data and loading from X collection...
    let data;
    let loading;

    //Destructure data from different collections
    const { data: accessoryData, loading : loadAccessory } = axiosGetData("/products/collection/accesorios")
    const { data: foodData, loading: loadFood } = axiosGetData("/products/collection/alimentos")
    const { data: homeData, loading: loadHome } = axiosGetData("/products/collection/hogar")
    const { data: toysData, loading: loadToys} = axiosGetData("/products/collection/juguetes")
    
    

    //check which collection to load data from, segun URL en que estemos
    switch(productCollection) {
        case "alimentos":
        {data = foodData,
        loading = loadFood}
        break;
        case "accesorios":
        {data = accessoryData,
        loading = loadAccessory}
        break;
        case "juguetes":
        {data = toysData,
        loading = loadToys}
        break;
        case "hogar":
        {data = homeData,
        loading = loadHome}
        break;
        default:
        {console.log("error getting productCollection")}
    }
    

    return(
        <div className="products-page-container">
        <Container>
            <Row>
                <ProductCard
                loading={loading}
                data={data}
                productCollection={productCollection}
                addToCart={addToCart}
                />
            </Row>
        </Container>
        </div>
    )

}