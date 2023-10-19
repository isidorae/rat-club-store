import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';

export default function MinusPlusDel({itemid}) {

  const {removeFromCart, handleQuantityChange} = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  const addQuantity = () => {
    setQuantity(quantity + 1);
    // console.log(itemid, quantity)
    // setProductQuantity({[itemid]: quantity })
    handleQuantityChange(itemid, quantity)

  }

  const reduceQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
    handleQuantityChange(itemid, quantity)
  }


  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className=" d-flex flex-row align-items-center justify-content-center">
          <button onClick={addQuantity} className="btn-item-plus">+</button>
          <div className="plus-minus-container fw-bold">
            <span>{quantity}</span>
          </div>
          <button onClick={reduceQuantity} className="btn-item-minus">-</button>
        </div>
        <div className="">
          <button onClick={() => removeFromCart(itemid)} className="btn-item-remove" variant="danger">
            x
          </button>
        </div>
      </div>
    </>
  );
}
