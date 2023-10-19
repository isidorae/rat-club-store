import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import MinusPlusDel from "./MinusPlusDel";


export default function ProductCard({loading, data, productCollection, addToCart}) {

    let quantity = 0;

    return(
        <>
        <Col className="d-flex justify-content-center flex-wrap gap-2 my-4">
        {loading
        ? <div>Loading data...</div>
        :data.map(item => {
                 return (<Card key={item._id} className="border-item-card" style={{ width: '18rem' }}>
                 <Link as={Link} to={`/product/${productCollection}/${item._id}`}><Card.Img variant="top" src={item.img}  /></Link>
                 <Card.Body className="d-flex flex-column align-items-center">
                     <Card.Title className="text-center">{item.name}</Card.Title>
                     <Card.Text>${item.price}</Card.Text>
                     {quantity === 0
                     ? (  <button onClick={() => addToCart(item)} className="btn-item-add" variant="primary">Agregar</button>
                     )
                      : ( <MinusPlusDel itemid={item._id} />)}
                 </Card.Body>
                 </Card>
                 )
            })
            }
        </Col>
        </>
    )

}