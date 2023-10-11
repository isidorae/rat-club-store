import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function SingleProductPage({ singleProductObj, productCollection}) {

  const {name, price, img, id, description } = singleProductObj

  console.log(productCollection)
  return (
    <div className="shadow-box-single-pg-layer">
        <div className="breadcrumb">
            <nav>
                <Link as={Link} to="/">inicio / </Link>
                <Link as={Link} to="/store">colecciones / </Link>
                <Link as={Link} to={`/store/${productCollection}`}>{productCollection} / </Link>
                <Link as={Link} to={`/product/${productCollection}/${id}`}>{name}</Link>
            </nav>
        </div>
      <div className="m-5">
        <Container className="">
          <Row>
            <Col className="d-flex justify-content-center">
              <div>
                <img
                  className="single-product-pg-img"
                  src={img}
                  alt=""
                />
              </div>
            </Col>
            <Col className="my-4 p-4 my-sm-0 single-prodcut-pg-descript d-flex flex-column align-items-center justify-content-center">
              <div className="">
                <h2>{name}</h2>
                <p>${price}</p>
                <p>
                 {description}
                </p>
              </div>
              {/* add to cart button */}
              <div className="d-flex flex-row align-self-start my-2">
                <div className=" d-flex flex-row align-items-center justify-content-center">
                  <button className="btn-item-plus">+</button>
                  <div className="plus-minus-container fw-bold">
                    <span>1</span>
                  </div>
                  <button className="btn-item-minus">-</button>
                </div>
                <div className="">
                  <button className="btn-single-page-add" variant="danger">
                    Añadir al carrito
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
