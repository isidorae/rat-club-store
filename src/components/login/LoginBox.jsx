import ratlogo from '../../assets/logos/ratclublogo.png'
import './signin.css'
import { Link } from 'react-router-dom'

import { useContext } from 'react';
import SignInContext from '../../context/SignInContext';

export default function LoginBox() {

    const { returnToHomePage } = useContext(SignInContext)

    return(
    <div className="sign-in-container-parent d-flex align-items-center justify-content-center">
        <div className="sign-in-container">
            <section className="signin-breadcrumb">
                <Link to="/" onClick={returnToHomePage} >{">"} volver a página principal</Link>
            </section>
            <section className="d-flex flex-column align-items-center">
            <img className="signin-logo" src={ratlogo} alt="" />
            <h2>Iniciar Sesión</h2>
            </section>
            <section>
                <input className="signin-input" type="email" placeholder="email" /><br />
                <input className="signin-input-pass" type="password" placeholder="contraseña" />
            </section>
            <section>
                <button className="continue-signin-btn">Continuar</button>
            </section>
            <p>¿No tienes una cuenta? <Link as={Link} to="/registrate" >Regístrate</Link></p>
        </div>
    </div>
    )

}