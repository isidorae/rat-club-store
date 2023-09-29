import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homecollection.css'
import { Link } from 'react-router-dom'
import React from 'react';

export default function HomeCollection() {


    return(
        <>
        <div className="home-collection-container pb-5">
            <section>
                <h1 className="text-center">Colleciones</h1>
            </section>
            <Container className=" d-flex justify-content-center align-items-center">
                <Row className="gap-4">
                <Col className="d-flex justify-content-center">
                    <Link as={ Link } to='/store/accesorios'>
                        <div className="accesories-card home-collection-grid-img">
                            <div className="opacity-bg-collection">
                                <h3 className="title-collect text-center">Accesorios</h3>
                            </div>
                         </div>
                    </Link>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Link as={ Link } to='/store/hogar'>
                        <div className="hogar-card home-collection-grid-img">
                            <div className="opacity-bg-collection">
                                 <h3 className="title-collect text-center">Hogar</h3>
                            </div>
                        </div>
                    </Link>
                    </Col>
                <Col className="d-flex justify-content-center">
                    <Link as={ Link } to='/store/alimentos'>
                        <div className="food-card home-collection-grid-img">
                            <div className="opacity-bg-collection">
                                <h3 className="title-collect text-center">Alimentos</h3>
                            </div>
                        </div>
                    </Link>
                </Col>
                <Col className="d-flex justify-content-center">
                    <Link as={ Link } to='/store/juguetes'>
                    <div  className="toys-card home-collection-grid-img">
                         <div className="opacity-bg-collection">
                        <h3 className="title-collect text-center">Juguetes</h3>
                        </div>
                    </div>
                    </Link>
                </Col>
                </Row>
            </Container>
        </div>
        </>
    )

}