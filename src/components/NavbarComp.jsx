import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'
import logoImg from '../assets/logos/ratclublogo.png'
import './navbar.css'

import { useContext } from "react";
import SignInContext from '../context/SignInContext'
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';

export default function NavbarComp() {

  const { goToSignInHomePage } = useContext(SignInContext)
  const { quantitySum } = useContext(CartContext)
  const { isAuth, logout } = useContext(AuthContext)

  const navigate = useNavigate()
  
  const loginOrProfileRouting = (e) => {
    if (isAuth) {
      navigate('/myprofile')
    } else {
      goToSignInHomePage()
    }
  }

  const clickLogout = () => {
    logout()
  }


    return (
        <Navbar sticky="top" expand="lg" className="bg-body-purple">
          <Container className="d-flex">
            <Navbar.Brand as={ Link } to='/' className="fw-bold">
              <img className="nav-logoimg" src={logoImg} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navlinks-contain me-auto">
                <Nav.Link as={ Link } to='/' className="fs-5 fw-bold text-white me-3">Inicio</Nav.Link>
                <Nav.Link as={ Link } to='/about' className="fs-5 fw-bold text-white me-3">Acerca de</Nav.Link>
                <NavDropdown title={ <span as={ Link } to='/store' className="fs-5 text-white">Tienda</span>} id="basic-nav-dropdown">
                <NavDropdown.Item as={ Link } to='/store' className="fs-5 fw-bold text-white">Colecciones</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to='/store/accesorios' className="fw-bold text-white">Accesorios</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to='/store/alimentos' className="fw-bold text-white">Alimentos</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to='/store/juguetes' className="fw-bold text-white" >Juguetes</NavDropdown.Item>
                  <NavDropdown.Item as={ Link } to='/store/hogar' className="fw-bold text-white">Hogar</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link as={ Link } to='/contact' className="fs-5 fw-bold text-white ms-3">Contacto</Nav.Link>
              </Nav>
              <Link to='/carrito'>
                <button title="ver carrito" className="cart-navbar-button me-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20"
                    fill="currentColor"
                    className="bi bi-basket-fill"
                    viewBox="0 0 16 16">
                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
                    </svg>
                    <div className="cart-product-num text-white">{!quantitySum ? 0 : quantitySum}</div>
              </button>
              </Link>
              <button onClick={loginOrProfileRouting} title="iniciar sesión" className="login-navbar-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
              </button>
              {isAuth &&  <button onClick={() => clickLogout()} className="logout-navbar-button ms-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
              </button>}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );




}