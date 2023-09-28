import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import logoImg from '../assets/logos/ratclublogo.png'
import './navbar.css'

export default function NavbarComp() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="d-flex">
            <Navbar.Brand as={ Link } to='/' className="fw-bold">
              <img className="nav-logoimg" src={logoImg} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navlinks-contain me-auto">
                <Nav.Link as={ Link } to='/' className="fs-5 fw-bold text-white me-3">Inicio</Nav.Link>
                <Nav.Link as={ Link } to='/about' className="fs-5 fw-bold text-white me-3">Acerca de</Nav.Link>
                <NavDropdown title={ <span as={ Link } to='/store' className="fs-5 text-white">Tienda</span>} id="basic-nav-dropdown">
                <NavDropdown.Item as={ Link } to='/store' className="fs-5 fw-bold text-white">TODAS</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to='/store/accesorios' className="fw-bold text-white">Accesorios</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to='/store/alimentos' className="fw-bold text-white">Alimentos</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to='/store/juguetes' className="fw-bold text-white" >Juguetes</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to='/store/hogar' className="fw-bold text-white">Hogar</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link as={ Link } to='/contacto' className="fs-5 fw-bold text-white ms-3">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );




}