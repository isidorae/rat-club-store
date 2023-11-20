import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import { getUserOrdersReq, getSingleOrderReq } from '../../hooks/userOrders'

export default function MyProfileOrders({displayAllOrders, setDisplayAllOrders}) {

const { userID, token } = useContext(AuthContext)

const [orders, setOrders] = useState([])
const [loading, setLoading] = useState(true)
const [singleOrder, setSingleOrder] = useState([])

useEffect(() => {
  showOrdersData(userID, token)
}, [])

//*********************** GET ALL USER ORDERS */
const showOrdersData = async (userID, token) => {
  setLoading(true)
  const bodyReq = {
    userId: userID
  }
  const orders = await getUserOrdersReq(bodyReq, token);
  setOrders(orders.data.detail)
  setLoading(false)
}

//*********************** GET SINGLE ORDER */
const showSingleOrder = async (id, token) => {
  const singleOrder = await getSingleOrderReq(id, token)
  setDisplayAllOrders(false)
  setSingleOrder([singleOrder.data.order])

}

console.log(singleOrder)

    return(
        <>
      <section className="ms-4 mt-5 d-flex justify-content-start align-items-start">
        <div>
          {displayAllOrders ? <h2>Tus Pedidos</h2> : null}
          <ul className="p-2">
            {loading
            ? "loading..."
            : (displayAllOrders && (orders.length > 0 ? orders.map((order, i) => {
              return (
               <li key={i} className="d-flex flex-column pt-1">
               <div className="d-flex align-items-center">
                 <p className="m-0 me-3">🚀 Pedido #{(order._id).slice(16,23)}</p>
                 <p className="m-0 me-3">{(order.createdAt).slice(0,10)}</p>
                 <a onClick={() => showSingleOrder(order._id, token)}>detalle</a>
               </div>
             </li>)
            }) : <div>Sin pedidos por el momento..</div>)
            )
            }
          </ul>
         {!displayAllOrders &&
         ( singleOrder.map((order, index) => {
          return(
          
          <section key={index}>
            <a onClick={() => setDisplayAllOrders(true)}>Vovler a todos mis pedidos</a>
            <h2>Pedido #{(order._id).slice(16,23)}</h2>
            <div> 
            <p className="m-0 me-3"><span style={{color:"aqua"}}>Destinatario:</span>  {order.receiver}</p>
            <p className="m-0 me-3 mt-2 d-flex flex-column align-items-start"><span style={{color:"aqua"}}>Items:</span>{(order.items.map((item, i) => {
              return (
                <>
                <span key={i} className="ms-1">{item}</span>
                </>
              )
            }))}</p>
            <p className="m-0 me-3 mt-2"><span style={{color:"aqua"}}>Valor total:</span> ${new Intl.NumberFormat().format(order.total)}</p>
            <p className="m-0 me-3 mt-2"><span style={{color:"aqua"}}>Dirección:</span> {order.address}</p>
            {order.extra === "" 
            ? null
            : <p className="m-0 me-3 mt-2"><span style={{color:"aqua"}}>Info Extra entrega:</span> {order.extra}</p>}
            <p className="m-0 me-3 mt-2"><span style={{color:"aqua"}}>Fecha de compra:</span> {(order.createdAt).slice(0,10)}</p>
            </div>
          </section>)

         })
         )
          }
          {/* <p>En construcción. 🐭</p> */}
        </div>
      </section>
    </>
    )
}