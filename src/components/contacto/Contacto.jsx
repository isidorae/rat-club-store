import ContactForm from "./ContactForm"
import './contactpg.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contacto() {


    return(
        <>
        <div className="contact-pg-container d-flex align-items-center justify-content-center">
            <Container>
                <Row>
                    <Col className="order-1 order-md-0 mb-5"><ContactForm/></Col>
                    <Col className="d-flex align-items-center justify-content-center justify-content-md-start">
                        <div className="m-5 contact-pg-info d-flex flex-column align-items-center justify-content-center">
                        <span className="fs-1">🐀🐭🐁</span>
                            <p>Horario de Atención</p>
                            <p>Lun-vie 9:00 - 19:00</p>
                            <p>hola@ratclub.cl</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )

}