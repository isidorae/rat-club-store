import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState} from "react";

import CartContext from "../../context/CartContext";
import MinusPlusDel from "./MinusPlusDel";

export default function SingleProductPage({ singleProductObj: data, productCollection, productID, loading}) {

  const { addToCart, showBtn, cart} = useContext(CartContext);
  
  const isItemInCart = cart.find((item) => {
    console.log(item)
    if (item._id === productID) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className="shadow-box-single-pg-layer">
        <div className="breadcrumb">
        <nav>
                <Link as={Link} to="/">inicio / </Link>
                <Link as={Link} to="/store">colecciones / </Link>
                <Link as={Link} to={`/store/${productCollection}`}>{productCollection} / </Link>
                <Link as={Link} to={`/product/${productCollection}/${productID}`}>{loading ? "loading.." : data.name}</Link>
            </nav>
        </div>
          {loading
          ? <div>Cargando productos...</div>
          : 
            <>
               <div className="m-5">
        <Container className="">
          <Row>
            <Col className="d-flex justify-content-center">
              <div>
                <img
                  className="single-product-pg-img"
                  src={data.img}
                  alt=""
                />
              </div>
            </Col>
            <Col className="my-4 p-4 my-sm-0 single-prodcut-pg-descript d-flex flex-column align-items-center justify-content-center">
              <div className="">
                <h2>{data.name}</h2>
                <p>${new Intl.NumberFormat().format(data.price)}</p>
                <p>
                 {data.description}
                </p>
              </div>
              {/* add to cart button */}
              <div className="d-flex flex-row align-self-start my-2">
                {!isItemInCart
                ?  <div className="">
                  <button onClick={() => addToCart(data)}className="btn-single-page-add" variant="danger">
                    Añadir al carrito
                  </button>
                </div>
                
              :   cart.map((item, index)=> {
                return item._id === data._id 
                ? <MinusPlusDel key={index} item={item}/>
                : null
              })
              }
              </div>
            </Col>
          </Row>
        </Container>
      </div>
            </> 
      }
    </div>
  );
}
