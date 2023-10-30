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
    // const { data: accessoryData, loading : loadAccessory } = axiosGetData("https://ratclub.onrender.com/rat-club-api/v1/products/collection/accesorios")
    // const { data: foodData, loading: loadFood } = axiosGetData("https://ratclub.onrender.com/rat-club-api/v1/products/collection/alimentos")
    // const { data: homeData, loading: loadHome } = axiosGetData("https://ratclub.onrender.com/rat-club-api/v1/products/collection/hogar")
    // const { data: toysData, loading: loadToys} = axiosGetData("https://ratclub.onrender.com/rat-club-api/v1/products/collection/juguetes")
    const { data: accessoryData, loading : loadAccessory } = axiosGetData("http://localhost:3002/rat-club-api/v1/products/collection/accesorios")
    const { data: foodData, loading: loadFood } = axiosGetData("http://localhost:3002/rat-club-api/v1/products/collection/alimentos")
    const { data: homeData, loading: loadHome } = axiosGetData("http://localhost:3002/rat-club-api/v1/products/collection/hogar")
    const { data: toysData, loading: loadToys} = axiosGetData("http://localhost:3002/rat-club-api/v1/products/collection/juguetes")
    

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