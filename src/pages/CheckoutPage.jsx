import Checkout from "../components/carrito/Checkout"
import CartContext from "../context/CartContext"
import { useContext, useEffect, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function CheckoutPage() {


    const {cart, orderSuccess, setOrderSuccess} = useContext(CartContext)

    const navigate = useNavigate()
    
    useEffect(() => {
    
        if(cart.length <= 0){
            navigate('/')
        }
    
    }, [])


    return(
        <>
        <div className="checkout-page d-flex flex-column align-items-center">
            {!orderSuccess
            ?  <div className="p-5 m-5 checkout-container-data">
            <Link to="/carrito">/volver a carrito</Link>
        <Checkout
        orderSuccess={orderSuccess}
        />
        </div>
        :  <div className="p-5 m-5 checkout-container-data d-flex flex-column">
    <Checkout
    orderSuccess={orderSuccess}
    />
     <p> <small><i>En 10 segundos seras redirigido a tu perfil</i></small></p>
    <Link to="/myprofile">/ir Mi Perfil</Link>
    </div>}
        </div>
        </>
    )
}