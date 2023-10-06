import { useState } from 'react'


export default function ContactForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")

    const sendContactForm = (e) => {
        e.preventDefault()

        if(name === '' || email === '' || comment === '')
        {
            alert('debes rellenar todos los campos')
            return;
        }

        alert(`Gracias '${name}', te contactaremos a la brevedad.`)
        setName('')
        setEmail('')
        setComment('')
    }

    return(
        <>
        <div>
            <div className="contact-form-container">
                <h1 className="m-0">Contáctanos!</h1>
                <p className="text-center">Dudas, sugerencias y/o feedback, <br /> aqui estamos para ayudarte! 🌟 </p>
                <form className="contact-form">
                    <input value={name} onChange={(e) => setName(e.target.value)} className="contact-form-input" type="text" placeholder="nombre" /> <br />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="contact-form-input" type="email" placeholder="email" /> <br />
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="contact-textarea" placeholder="Comentario..."></textarea> <br />
                    <button onClick={sendContactForm} className="contact-form-btn">Enviar</button>
                </form>
            </div>
        </div>
        </>
    )
}