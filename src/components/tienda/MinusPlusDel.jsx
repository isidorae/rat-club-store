import { useContext, useState, useEffect} from 'react';
import CartContext from '../../context/CartContext';

export default function MinusPlusDel({item}) {

  // const {removeFromCart, handleQuantityChange, arrayOfQuantities} = useContext(CartContext)


  //     //Quantity value displayed on Button MinusPlusDel
  //     const [currentQuantValue, setCurrentQuantValue] = useState(1)

  // useEffect(() => {
  //   currentQuantity()
  // }, [arrayOfQuantities])
  


  // const currentQuantity = () => {
  //   for (let i = 0; i < arrayOfQuantities.length; i++) {
  //     let idValue = arrayOfQuantities[i][0]
  //     if (idValue == itemid){
  //       setCurrentQuantValue(arrayOfQuantities[i][1]);
  //       return;
  //     }
  //   }
  // }

  // const addQuantity = () => {
  //   const newQuantity = currentQuantValue + 1; 
  //   handleQuantityChange(itemid, newQuantity)
  //   setCurrentQuantValue(newQuantity)
  // }

  // const reduceQuantity = () => {
  //   if (currentQuantValue > 1){
  //     const newQuantity = currentQuantValue - 1;
  //     handleQuantityChange(itemid, newQuantity)
  //     setCurrentQuantValue(newQuantity)
  //   };

  // }

const {removeFromCart, increaseItemQuantity, reduceItemQuantity} = useContext(CartContext)

  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className=" d-flex flex-row align-items-center justify-content-center">
          <button onClick={() => increaseItemQuantity(item)} className="btn-item-plus">+</button>
          <div className="plus-minus-container fw-bold">
            <span>{item.quantity}</span>
          </div>
          <button onClick={() => reduceItemQuantity(item)} className="btn-item-minus">-</button>
        </div>
        <div className="">
          <button onClick={() => removeFromCart(item._id)} className="btn-item-remove" variant="danger">
            x
          </button>
        </div>
      </div>
    </>
  );
}