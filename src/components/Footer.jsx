import './footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import logoImg from '../assets/logos/ratclublogo.png'

import { ImInstagram, ImFacebook2, ImYoutube} from 'react-icons/Im'
import { FaSquareXTwitter} from 'react-icons/fa6'

export default function Footer() {

    return(
        <footer>
            <Container className="p-4 footer-grid-container">
                <Row>
                    <Col className="pe-5 store-footer-intro">
                    <img className="footer-logo" src={logoImg} alt="" />
                    <p>Somos tu tienda Rat Lover favorita 😍 Encuentra todo lo que necesitas para tu amigo aquí.</p>
                    </Col>
                    <Col>
                    <h3>INFO</h3>
                    <a as={ Link } to='/'>😎 Preguntas Frecuentes</a><br />
                    <a as={ Link } to='/'>😎 Despacho de pedido</a><br />
                    <a as={ Link } to='/'>😎 Cambios y devoluciones</a><br />
                    <a as={ Link } to='/'>😎 Contacto</a>
                    </Col>
                    <Col className="legal-footer">
                    <h3>Legal</h3>
                    <a as={ Link } to='/'>Privacidad</a>
                    <a as={ Link } to='/'>Terminos</a>
                    </Col>
                    <Col className="social-footer">
                    <div>
                    <h3>Social</h3>
                        <a className="fs-3 pe-2" as={ Link } to='/'><ImInstagram/></a>
                        <a className="fs-3 pe-2" as={ Link } to='/'><ImFacebook2/></a>
                        <a className="fs-3 pe-2" as={ Link } to='/'><ImYoutube/></a>
                        <a className="fs-3 pe-2" as={ Link } to='/'><FaSquareXTwitter/></a>
                     </div>
                     <Row>
                        <p className="text-white">hola@ratclub.cl</p>
                     </Row>
                    </Col>
                </Row>
            </Container>
            <p className="copyright-p">Rat Club ® Spa 2023</p>
        </footer>
    )

}