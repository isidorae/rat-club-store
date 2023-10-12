import { createContext, useState, useEffect } from "react"
import items from '../items.json'

const CartContext = createContext()

const CartProvider = ({children}) => {

     //*************** VARIABLES */
console.log(items)
    // elementos en carrito
    const [cart, setCart] = useState([]);


    // $valor total de carrito
    const [cartTotal, setCartTotal] = useState(0)

    // cantidad de mismo producto en carrito
    const [productQuantity, setProductQuantity] = useState({})

    //productos totales en carrito
    const[quantitySum, setQuantitySum] = useState(0)

    //************** FUNCTIONS */

    const addToCart = (product) => {
        // evitar añadir duplicados
        for (let i = 0; i < cart.length; i++) {
            if (product.name === cart[i].name){
                alert("Producto ya esta en el carrito")
                return;
            }
        }
        //setCart con producto
        setCart([...cart, product])
        console.log(product)
    }

    const removeFromCart = (id) => {
        //metodo filter
        //setCart con array filtrado
    }

    const handleQuantityChange = (productID, newQuantity) => {
        //setProductQuantity
    }

    const updateTotalCart = () => {
        //setCartTotal
    }

    const confirmOrder = () => {
        //confirm 
    }

    const countTotalProductsInCart = () => {

    }

    //cart --> /productPage, /singleProductPage, /carrito, -navbar- 
    //cartTotal --> /carrito
    //productQuantity --> /prductPage, /singleProductPage, /carrito

    //addToCart --> /productPage, /singleProductPage
    //removeFromCart --> /productPage, /singleProductPage, /carrito /(onClick)
    //handleQuantityChange --> /productPage, /singleProductPage, /carrito
    //updateTotalCart --> /carrito
    //confirmOrder --> /carrito

    const data = {addToCart, cart}

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider };
export default CartContext;
