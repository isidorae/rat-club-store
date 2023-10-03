import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './homecollection.css'
import { Link } from 'react-router-dom'
import React from 'react';

import CollectionCard from './CollectionCard';

export default function HomeCollection() {


    return(
        <>
        <div className="home-collection-container pb-5">
            <section>
                <h1 className="text-center">Colleciones</h1>
            </section>
            <Container className=" d-flex justify-content-center align-items-center">
                <Row className="gap-4">
                    <CollectionCard
                    msg="Accesorios"
                    className="accesories-card"
                    as={ Link }
                    path='/store/accesorios'
                    />
                    <CollectionCard
                    msg="Hogar"
                    className="hogar-card"
                    as={ Link }
                    path='/store/hogar'
                    />
                    <CollectionCard
                    msg="Alimentos"
                    className="food-card"
                    as={ Link }
                    path='/store/alimentos'
                    />
                    <CollectionCard
                    msg="Juguetes"
                    className="toys-card"
                    as={ Link }
                    path='/store/juguetes'
                    />
                </Row>
            </Container>
        </div>
        </>
    )

}