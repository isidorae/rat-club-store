import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import MinusPlusDel from "./MinusPlusDel";


export default function ProductCard({data, productCollection}) {

    let quantity = 1;

    console.log(data)

    return(
        <>
        <Col className="d-flex justify-content-center flex-wrap gap-2 my-4">
            {data.map(item => {
                 return (<Card className="border-item-card" style={{ width: '18rem' }}>
                 <Link as={Link} to={`/product/${productCollection}/${item.id}`}><Card.Img variant="top" src={item.img}  /></Link>
                 <Card.Body className="d-flex flex-column align-items-center">
                     <Card.Title className="text-center">{item.name}</Card.Title>
                     <Card.Text>${item.price}</Card.Text>
                     {quantity === 0
                     ? (  <button className="btn-item-add" variant="primary">Agregar</button>
                     )
                      : ( <MinusPlusDel quantity={quantity}/>)}
                 </Card.Body>
                 </Card>
                 )
            })}
        </Col>
        </>
    )

}