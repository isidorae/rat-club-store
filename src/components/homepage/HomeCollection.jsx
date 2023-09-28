import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './homecollection.css'

export default function HomeCollection() {


    return(
        <>
        <div className="home-collection-container">
            <section>
                <h1 className="text-center">Colleciones</h1>
            </section>
        <Container className="d-flex justify-content-center align-items-center">
            <Row className="gap-4">
            <Col>
                <div  className="home-collection-grid-img">
                    <h3 className="text-center">Accesorios</h3>
                    <div>
                        <p>hello</p>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="home-collection-grid-img">
                    <h3 className="text-center">Hogar</h3>
                    <div>
                        <p>hello</p>
                    </div>
                </div>
                </Col>
            <Col>
                <div className="home-collection-grid-img">
                    <h3 className="text-center">Alimentos</h3>
                    <div>
                        <p>hello</p>
                    </div>
                </div>
            </Col>
            <Col>
            <div  className="home-collection-grid-img">
                    <h3 className="text-center">Juguetes</h3>
                    <div>
                        <p>hello</p>
                    </div>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
        </>
    )

}