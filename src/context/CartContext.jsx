import { createContext, useState, useEffect } from "react"
// import { axiosGetData } from "../hooks/axiosGetData"

const CartContext = createContext()

const CartProvider = ({children}) => {


    //************* FETCH DATA */
    // const { data: dataApi, loading } = axiosGetData(`https://ratclub.onrender.com/rat-club-api/v1/products/`)

     //*************** VARIABLES */
    // elementos en carrito
    const [cart, setCart] = useState([]);

    // $valor total de carrito
    const [cartTotal, setCartTotal] = useState(0)

    // cantidad de mismo producto en carrito
    const [productQuantity, setProductQuantity] = useState({})
    console.log(productQuantity)

    //productos totales en carrito
    const[quantitySum, setQuantitySum] = useState(0)

    //show Add To Cart Butotn
    const [ addToCartBtn, SetAddToCartBtn ] = useState(true)

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
        handleQuantityChange(product._id, 1)
        // setProductQuantity([...productQuantity, product.id])
        console.log(product)
        // console.log("productQuantity: " + productQuantity)
    }


    const removeFromCart = (id) => {
        //crear nuevo array con productos que se mantienen en cart. 
        const newCart = cart.filter(item => id != item._id)
        console.log(newCart)
        //setCart con array filtrado
        setCart(newCart)
        handleQuantityChange(id, 0)
    }

    useEffect(()=> {

        countTotalProductsInCart()
        console.log(quantitySum)
        
    },[cart, productQuantity])

    const handleQuantityChange = (productID, newQuantity) => {
        //setProductQuantity
        setProductQuantity((prevState) => (
             {
                ...prevState,
                [productID]: newQuantity
             }
        ))
    }

//array of products(id: quantity) with quantities [[id, value], [id, value]...]
    const arrayOfQuantities =  Object.entries(productQuantity)
    console.log(arrayOfQuantities)

    const countTotalProductsInCart = () => {

        let sum = 0;
        // transformamos values de obj en array , para poder sumarlos 
        let productsInCart = Object.values(productQuantity);
        console.log(productsInCart)

        //sum and store sum in 'QuantitySum'
        productsInCart.forEach(num => {
            sum += num
            return sum
        })

        setQuantitySum(sum)
    }

    // cambiar btn en product card
    const checkIfItemIsInCart = (id) => {
        cart.forEach((product) => {
        if (product._id === id){
          SetAddToCartBtn(false)
          return;
        } else {
          SetAddToCartBtn(true)
        }
      })
  
  
    }


    

    const updateTotalCart = () => {
        //setCartTotal
    }

    const confirmOrder = () => {
        //confirm 
    }


    //cart --> /productPage, /singleProductPage, /carrito, -navbar- 
    //cartTotal --> /carrito
    //productQuantity --> /prductPage, /singleProductPage, /carrito

    //addToCart --> /productPage, /singleProductPage
    //removeFromCart --> /productPage, /singleProductPage, /carrito /(onClick)
    //handleQuantityChange --> /productPage, /singleProductPage, /carrito
    //updateTotalCart --> /carrito
    //confirmOrder --> /carrito



    const data = {
        addToCart,
        cart,
        removeFromCart,
        handleQuantityChange,
        quantitySum,
        checkIfItemIsInCart,
        addToCartBtn,
        arrayOfQuantities
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider };
export default CartContext;
