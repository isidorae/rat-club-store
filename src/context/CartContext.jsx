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
    console.log(productQuantity)

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
        handleQuantityChange(product.id, 1)
        // setProductQuantity([...productQuantity, product.id])
        console.log(product)
        // console.log("productQuantity: " + productQuantity)
    }


    const removeFromCart = (id) => {
        //crear nuevo array con productos que se mantienen en cart. 
        const newCart = cart.filter(item => id != item.id)
        console.log(newCart)
        //setCart con array filtrado
        setCart(newCart)
        handleQuantityChange(id, 0)
    }


    const handleQuantityChange = (productID, newQuantity) => {
        //setProductQuantity
        setProductQuantity((prevState) => (
            {
                ...prevState,
                [productID]: newQuantity
            }
        ))
    }

    const updateTotalCart = () => {
        //setCartTotal
    }

    const confirmOrder = () => {
        //confirm 
    }

    const countTotalProductsInCart = () => {
        // //creamos array con values [1,2, 1, 1 ,....]
        // let productsInCart = Object.values(productQuantity);
        // console.log(productsInCart)
        // //sumar values
        // for (let i = 0; i < productsInCart.length; i++) {
        //     sum(productsInCart[i])
            
        // }
    }


    //cart --> /productPage, /singleProductPage, /carrito, -navbar- 
    //cartTotal --> /carrito
    //productQuantity --> /prductPage, /singleProductPage, /carrito

    //addToCart --> /productPage, /singleProductPage
    //removeFromCart --> /productPage, /singleProductPage, /carrito /(onClick)
    //handleQuantityChange --> /productPage, /singleProductPage, /carrito
    //updateTotalCart --> /carrito
    //confirmOrder --> /carrito

    useEffect(()=> {
        
    },[cart])


    const data = {addToCart, cart, removeFromCart, handleQuantityChange}

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider };
export default CartContext;
