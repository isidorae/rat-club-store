import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import { getUserOrdersReq, getSingleOrderReq } from '../../hooks/userOrders'

export default function MyProfileOrders() {

const { userID, token } = useContext(AuthContext)

const [orders, setOrders] = useState([])
const [loading, setLoading] = useState(true)
const [singleOrder, setSingleOrder] = useState([])
const [displayAllOrders, setDisplayAllOrders] = useState(true)

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
  console.log(orders)
  setOrders(orders.data.detail)
  setLoading(false)
}

//*********************** GET SINGLE ORDER */
const showSingleOrder = async (id, token) => {
  console.log(id, token)

  const singleOrder = await getSingleOrderReq(id, token)
  setDisplayAllOrders(false)
  setSingleOrder([singleOrder.data.order])
  console.log(singleOrder.data.order)

}

    return(
        <>
      <section className="ms-4 mt-5 align-self-start">
        <div className="">
          {displayAllOrders ? <h2>Tus Pedidos</h2> : null}
          <ul>
            {loading
            ? "loading..."
            : (displayAllOrders && orders.map((order, i) => {
              return (
               <li key={i} className="d-flex flex-column border">
               <div className="d-flex align-items-center">
                 <p className="m-0 me-3">Pedido #{(order._id).slice(16,23)}</p>
                 <p className="m-0 me-3">{(order.createdAt).slice(0,10)}</p>
                 <button onClick={() => showSingleOrder(order._id, token)}>detalle</button>
               </div>
             </li>)
            })
            )
            }
          </ul>
         {!displayAllOrders &&
         ( singleOrder.map((order, index) => {
          return(
          <section key={index}>
            <h2>Pedido #{(order._id).slice(16,23)}</h2>
            <div> 
            <a onClick={() => setDisplayAllOrders(true)}>Vovler a todos mis pedidos</a>
            <p className="m-0 me-3">pedido N#{(order._id)}</p>
            <p className="m-0 me-3">items: {(order.items.map(name => {
              return (
                <span>{name}, </span>
              )
            }))}</p>
            <p className="m-0 me-3">valor total: ${order.total}</p>
            <p className="m-0 me-3">fecha: {(order.createdAt).slice(0,10)}</p>
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