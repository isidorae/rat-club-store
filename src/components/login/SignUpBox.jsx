import ratlogo from '../../assets/logos/ratclublogo.png'
import './signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react';
import SignInContext from '../../context/SignInContext';
import AuthContext from '../../context/AuthContext';

export default function SignUpBox() {

    const { returnToHomePage, setSignIn } = useContext(SignInContext)
    const { signUp, isAuth } = useContext(AuthContext)

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

    const updateValue = (e, setValue) => {
        setValue(e.target.value)
    }

    const newUser = async () => {

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
        <div className="sign-in-container">
            <section className="signin-breadcrumb">
                <Link to="/" onClick={returnToHomePage} >{">"} volver a página principal</Link>
            </section>
            <section className="d-flex flex-column align-items-center">
            <img className="signin-logo" src={ratlogo} alt="" />
            <h2>Regístrate</h2>
            </section>
            <section>
                <input  value={name}  onChange={(e) => updateValue(e, setName)} className="signin-input" type="name" placeholder="nombre" /><br />
                <input value={lastName} onChange={(e) => updateValue(e, setLastName)} className="signin-input" type="name" placeholder="apellido" /><br />
                <input value={username} onChange={(e) => updateValue(e, setUsername)} className="signin-input" type="name" placeholder="nombre de usuario" /><br />
                <input value={email} onChange={(e) => updateValue(e, setEmail)} className="signin-input" type="email" placeholder="email" /><br />
                <input value={password} onChange={(e) => updateValue(e, setPassword)} className="signin-input-pass" type="password" placeholder="contraseña" />
            </section>
            <section>
                <button onClick={newUser} className="continue-signin-btn">Crear cuenta</button>
            </section>
            <p className="my-1">¿Ya tienes una cuenta? <Link to="/" >Inicia sesión</Link></p>
        </div>
    </div>
    )

}