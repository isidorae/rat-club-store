import ratlogo from '../../assets/logos/ratclublogo.png'
import './signin.css'
import Spinner from 'react-bootstrap/Spinner';

import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import SignInContext from '../../context/SignInContext';
import AuthContext from '../../context/AuthContext';

export default function SignUpBox() {

    const { returnToHomePage, setSignIn } = useContext(SignInContext)
    const { signUp, isAuth, errorMsgs, setErrorMsgs, userLoading} = useContext(AuthContext)

    //inicializar navigate
    const navigate = useNavigate()

    //si esta autenticado; navegar a profile
    useEffect(() => {
        if (isAuth){
            setSignIn(false)
            navigate('/myprofile')
        }
    }, [isAuth])

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRegEx = (/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g.test(email))

    const updateValue = (e, setValue) => {
        setValue(e.target.value)
    }

    const newUser = () => {

            if(name === "" || lastName === "" || username === "" || email === "" || password === ""){
                return setErrorMsgs(["Faltan campos por rellenar."]);
            }

            if(!emailRegEx){
                return setErrorMsgs(["Ingresa un email válido."]);
            }


        const newUser = {
            firstName: name,
            lastName: lastName,
            username,
            email,
            password
        }

        signUp(newUser)
    }


    return(
    <div className="sign-in-container-parent d-flex align-items-center justify-content-center">
        <div className="sign-up-container">
            <section className="signin-breadcrumb">
                <Link to="/" onClick={returnToHomePage} >{">"} volver a página principal</Link>
            </section>
            <section className="d-flex flex-column align-items-center">
            <img className="signin-logo" src={ratlogo} alt="" />
            <h2>Regístrate</h2>
            </section>
            {errorMsgs ? errorMsgs.map((err, i) => {
                   return  <p key={i} className="err-msg"><i>{err}</i></p>
            })
            : null
            }
            <section>
                <label><p className="m-0">Nombre</p></label><br />
                <input  value={name.toLowerCase()}  onChange={(e) => updateValue(e, setName)} className="signin-input" type="name" name="name" placeholder="nombre" />{name.length > 3 ? <span>✅</span> : null}<br />
                <label className="mt-1"><p className="m-0">Apellido</p></label><br />
                <input value={lastName.toLowerCase()} onChange={(e) => updateValue(e, setLastName)} className="signin-input" type="name" placeholder="apellido" />{lastName.length > 2 ? <span>✅</span> : null}<br />
                <label className="mt-1"><p className="m-0">Nombre de Usuario</p></label><br />
                <input value={username.toLowerCase()} onChange={(e) => updateValue(e, setUsername)} className="signin-input" type="name" placeholder="nombre de usuario" />{username.length > 3 ? <span>✅</span> : null}<br />
                <label className="mt-1"><p className="m-0">Email</p></label><br />
                <input value={email.toLowerCase()} onChange={(e) => updateValue(e, setEmail)} className="signin-input" type="email" placeholder="email" />{emailRegEx ? <span>✅</span> : null}<br />
                <label className="mt-1">Contraseña</label><br />
                <input value={password} onChange={(e) => updateValue(e, setPassword)} className="signin-input-pass" type="password" placeholder="contraseña" />{password.length > 3 ? <span>✅</span> : null}
            </section>
            <section>
                <button onClick={newUser} className="continue-signin-btn">
                    {userLoading
                    ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                    : "Crear cuenta"}
                    </button>
            </section>
            <p className="mt-3 mb-0">¿Ya tienes una cuenta? <Link to="/" >Inicia sesión</Link></p>
        </div>
    </div>
    )

}