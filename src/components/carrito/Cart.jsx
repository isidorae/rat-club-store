import { useContext } from "react";
import "./cart.css";
import MinusPlusDel from "../tienda/MinusPlusDel";
import CartContext from "../../context/CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <div className="table-carrito-container">
        <section className="container content-section">
          <h2 className="section-header pt-4">CARRITO</h2>
          <div className="cart-row">
            <span className="cart-item cart-header cart-column">ITEM</span>
            <span className="cart-price cart-header cart-column">VALOR</span>
            <span className="cart-quantity cart-header cart-column">
              CANTIDAD
            </span>
          </div>
          <div className="cart-items">
            {/* ITEM A COMPRAR */}
            {cart.length === 0
            ? (<><h2 className="p-3">No hay productos en tu carrito... 🐭🙁</h2></>)
            : (cart.map((item) => {
              return (
                <div className="cart-row" key={item.id}>
                  <div className="cart-item cart-column">
                    <img
                      className="cart-item-image"
                      src={item.img}
                      alt=""
                      width="100"
                      height="100"
                    />
                    <span className="cart-item-title">{item.name}</span>
                  </div>
                  <span className="cart-price cart-column">${item.price}</span>
                  <div className="cart-quantity cart-column">
                    <MinusPlusDel itemid={item.id} />
                  </div>
                </div>
              );
             })
            )
            }
            
            {/* ITEM A COMPRAR */}
          </div>
          <div className="cart-total">
            <strong className="cart-total-title">Total</strong>
            <span className="cart-total-price">$5000</span>
            <button
              className="btn btn-primary btn-purchase fw-bold"
              type="button"
            >
              COMPRAR
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
