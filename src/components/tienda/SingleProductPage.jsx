import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";

import CartContext from "../../context/CartContext";
import MinusPlusDel from "./MinusPlusDel";

export default function SingleProductPage({ singleProductObj: data, productCollection, productID, loading}) {

  let quantity = 1;

  const { addToCart } = useContext(CartContext);

  // const {name, price, img, id, description } = singleProductObj

  console.log(productCollection)
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
          ? <div>loading data...</div>
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
                <p>${data.price}</p>
                <p>
                 {data.description}
                </p>
              </div>
              {/* add to cart button */}
              <div className="d-flex flex-row align-self-start my-2">
                {quantity === 1 
                ?  <MinusPlusDel itemid={data._id}/>
              :  <div className="">
              <button onClick={() => addToCart(data)}className="btn-single-page-add" variant="danger">
                Añadir al carrito
              </button>
            </div>}
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
