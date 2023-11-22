import ratlogo from '../../assets/logos/ratclublogo.png'
import './signin.css'
import Spinner from 'react-bootstrap/Spinner';
import { Link, useNavigate } from 'react-router-dom'

import { useContext, useState, useEffect } from 'react';
import SignInContext from '../../context/SignInContext';
import AuthContext from '../../context/AuthContext';

export default function LoginBox() {

    const { returnToHomePage, setSignIn } = useContext(SignInContext)
    const { login, isAuth, errorMsgs, setErrorMsgs, userLoading } = useContext(AuthContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    useEffect(() => {

        if(isAuth){
            setSignIn(false)
            navigate('/myprofile')
        }

    }, [isAuth])

    const userLogin = () => {

        const user = { email, password }
        if (email === "" || password === "" )
        {
           return setErrorMsgs([...errorMsgs, ["Faltan campos por rellenar."]]);

        }

        if(!(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g.test(email)))
        {
            return setErrorMsgs([...errorMsgs, ["Debes ingresar un email."]]);
        }

        //enviar data a function login de auth context
        login(user)
    }

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
            {errorMsgs ? errorMsgs.map((err, i) => {
                   return  <p key={i} className="err-msg"><i>{err}</i></p>
            })
            : null
            }
            <section>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="signin-input" type="email" placeholder="email" /><br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="signin-input-pass" type="password" placeholder="contraseña" />
            </section>
            <section>
                <button onClick={userLogin} className="continue-signin-btn">
                    {userLoading
                    ?   <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                    : "Continuar"}
                    </button>
            </section>
            <p className="mt-3">¿No tienes una cuenta? <Link as={Link} to="/registrate" >Regístrate</Link></p>
        </div>
    </div>
    )

}