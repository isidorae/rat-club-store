import { useContext, useState, useEffect} from 'react';
import CartContext from '../../context/CartContext';

export default function MinusPlusDel({itemid}) {

  const {removeFromCart, cart, handleQuantityChange, arrayOfQuantities} = useContext(CartContext)

  let startingValue = 1
  let actualQuantity = 1;
  const [quantity, setQuantity] = useState(startingValue)

  // useEffect(() => {
  //   getActualQuantity()
  // }, [cart, quantity])

  // const getActualQuantity = () => {
  //   for (let i = 0; i < arrayOfQuantities.length; i++ )
  //   {
  //       if (arrayOfQuantities[i][0] === itemid) {
  //         actualQuantity = arrayOfQuantities[i][1]
  //       }
  //   }
  //   return null;
  // }

  const addQuantity = () => {
    const newQuantity = quantity + 1; 
    setQuantity(newQuantity);
    handleQuantityChange(itemid, newQuantity)
    // console.log(itemid, quantity)
    // setProductQuantity({[itemid]: quantity })

  }

  const reduceQuantity = () => {
    const newQuantity = quantity - 1;
    if (quantity === 1) {
      return;
    }
    setQuantity(newQuantity);
    handleQuantityChange(itemid, newQuantity)
  }


  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className=" d-flex flex-row align-items-center justify-content-center">
          <button onClick={() => addQuantity()} className="btn-item-plus">+</button>
          <div className="plus-minus-container fw-bold">
            <span>{quantity}</span>
          </div>
          <button onClick={() => reduceQuantity()} className="btn-item-minus">-</button>
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
