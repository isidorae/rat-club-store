import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';

export default function ContactForm({getFormData, loading, setLoading, success, setSuccess}) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    const [error, setError] = useState([])

    const sendContactForm = (e) => {
        e.preventDefault()

        if(name === '' || email === '' || comment === '')
        {
            setError(['debes rellenar todos los campos'])
            return;
        }

        if(!(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g.test(email)))
        {
            setError(['debes ingresar un email válido'])
            return;
        }

        const data = {
            name,
            email,
            comment
        }

        setLoading(true)
        getFormData(data)

        setName('')
        setEmail('')
        setComment('')
    }

    useEffect(() => {
        resetErrorMsgs()
    }, [error])

    useEffect(() => {
        resetSuccessMsg()
    }, [success])

    const resetErrorMsgs = () => {
        let timer;
        if (error.length > 0) {
            timer =  setTimeout(() => {
                setError([])
            }, 5000)
        }
       return () => clearTimeout(timer)
    }

    const resetSuccessMsg = () => {
        let timer;
        if (success === true) {
            setError([])
            timer = setTimeout(() => {
                setSuccess(false)
            }, 5000)
        }
        return () => clearTimeout(timer)
    }

    return(
        <>
        <div>
            <div className="contact-form-container">
                <h1 className="m-0">Contáctanos!</h1>
                <p className="text-center">Dudas, sugerencias y/o feedback, <br /> aqui estamos para ayudarte! 🌟 </p>
                {error && error.map((err, i) => {
                    return <p key={i} className="err-msg"><i>{err}</i></p>
                })}
                {success && <p className="update-success-msg"><i>Mensaje enviado con exito!</i></p>}
                <form className="contact-form">
                    <input value={name} onChange={(e) => setName(e.target.value)} className="contact-form-input" type="text" placeholder="nombre" /> <br />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="contact-form-input" type="email" placeholder="email" /> <br />
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="contact-textarea" placeholder="Comentario..."></textarea> <br />
                    <button onClick={sendContactForm} className="contact-form-btn">{
                        loading
                        ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                      : "Enviar"
                    }</button>
                </form>
            </div>
        </div>
        </>
    )
}