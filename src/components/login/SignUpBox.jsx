import ratlogo from '../../assets/logos/ratclublogo.png'
import './signin.css'
import { Link } from 'react-router-dom'

import { useContext } from 'react';
import SignInContext from '../../context/SignInContext';

export default function SignUpBox() {

    const { returnToHomePage } = useContext(SignInContext)

    return(
    <div className="sign-in-container-parent d-flex align-items-center justify-content-center">
        <div className="sign-in-container">
            <section className="signin-breadcrumb">
                <Link to="/" onClick={returnToHomePage} >{">"} volver a página principal</Link>
            </section>
            <section className="d-flex flex-column align-items-center">
            <img className="signin-logo" src={ratlogo} alt="" />
            <h2>Regístrate</h2>
            </section>
            <section>
            <input className="signin-input" type="name" placeholder="nombre de usuario" /><br />
                <input className="signin-input" type="email" placeholder="email" /><br />
                <input className="signin-input-pass" type="password" placeholder="contraseña" />
            </section>
            <section>
                <button className="continue-signin-btn">Crear cuenta</button>
            </section>
            <p className="my-1">¿Ya tienes una cuenta? <Link to="/" >Inicia sesión</Link></p>
        </div>
    </div>
    )

}