import './checkout.css'
import { useContext, useEffect, useState} from 'react'
import CartContext from '../../context/CartContext'
import AuthContext from '../../context/AuthContext'
import CheckoutForm from './CheckoutForm'


export default function Checkout({orderSuccess}) {

const {cart, cartTotal, confirmOrder } = useContext(CartContext)
const {userID, token} = useContext(AuthContext)

console.log(cart)

const saveDeliveryData = (e, deliveryData) => {
  e.preventDefault()

  console.log(deliveryData)

  confirmOrder(userID, token, deliveryData)
  
}

  return (
    <>
    {!orderSuccess
    ? <><div>
    <h3>Resumen Pedido</h3>
    <section className="order-checkout-info d-flex flex-column align-items-start p-3 my-3">
        {cart.map((item, index) => {
           return <>
           <p key={item._id} >{item.name} x{item.quantity}</p>
           </>

        })}
           <p className="m-0"><span style={{color:"aqua", fontStyle:"italic"}}>Total:</span> ${new Intl.NumberFormat().format(cartTotal)}</p>
    </section>
  </div>
  <div>
  <h3>Datos de Envio</h3>
    <CheckoutForm 
    saveDeliveryData={saveDeliveryData}
    userID={userID}
    token={token}
    confirmOrder={confirmOrder}
    />
  </div></>
  : <>
  <h2>Orden realizada con exito!</h2>
  <p>En tu Perfil, sección 'pedidos', puedes ver tu nueva orden.</p>
    </>
  
  }
     
    </>
  );
}
