import './checkout.css'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import AuthContext from '../../context/AuthContext'
import CheckoutForm from './CheckoutForm'


export default function Checkout({orderSuccess}) {

const {cart, cartTotal, confirmOrder, errorMsgs, setErrorMsgs} = useContext(CartContext)
const {userID, token} = useContext(AuthContext)

const sendDeliveryData = (data) => {
  confirmOrder(userID, token, data)
}

  return (
    <>
    {!orderSuccess
    ? <><div>
    <h3>Resumen Pedido</h3>
    <section className="order-checkout-info d-flex flex-column align-items-start p-3 my-3">
        {cart.map((item, i) => {
           return <div key={i}>
           <p>{item.name} x{item.quantity}</p>
           </div>

        })}
           <p className="m-0"><span style={{color:"aqua", fontStyle:"italic"}}>Total:</span> ${new Intl.NumberFormat().format(cartTotal)}</p>
    </section>
  </div>
  <div>
  <h3>Datos de Envio</h3>
    <CheckoutForm 
    sendDeliveryData={sendDeliveryData}
    userID={userID}
    token={token}
    confirmOrder={confirmOrder}
    error={errorMsgs}
    setError={setErrorMsgs}
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
