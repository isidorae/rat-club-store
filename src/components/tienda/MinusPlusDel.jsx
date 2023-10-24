import { useContext, useState, useEffect} from 'react';
import CartContext from '../../context/CartContext';

export default function MinusPlusDel({itemid}) {

  const {removeFromCart, handleQuantityChange, arrayOfQuantities} = useContext(CartContext)

  //Quantity value displayed on Button
  const [currentQuantValue, setCurrentQuantValue] = useState(1)

  useEffect(() => {
    currentQuantity()
  }, [arrayOfQuantities])


  const currentQuantity = () => {
    for (let i = 0; i < arrayOfQuantities.length; i++) {
      let idValue = arrayOfQuantities[i][0]
      if (idValue == itemid){
        setCurrentQuantValue(arrayOfQuantities[i][1]);
        return;
      }
    }
  }

  const addQuantity = () => {
    const newQuantity = currentQuantValue + 1; 
    handleQuantityChange(itemid, newQuantity)
    setCurrentQuantValue(newQuantity)
  }

  const reduceQuantity = () => {
    if (currentQuantValue > 1){
      const newQuantity = currentQuantValue - 1;
      handleQuantityChange(itemid, newQuantity)
      setCurrentQuantValue(newQuantity)
    };

  }

  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-center">
        <div className=" d-flex flex-row align-items-center justify-content-center">
          <button onClick={() => addQuantity()} className="btn-item-plus">+</button>
          <div className="plus-minus-container fw-bold">
            <span>{currentQuantValue}</span>
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