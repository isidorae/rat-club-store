import { createContext, useState, useEffect } from "react"
import { createOrderReq } from "../hooks/userOrders";

const CartContext = createContext()

const CartProvider = ({children}) => {

    //************************************** VARIABLES **************************************/
    // elementos en carrito
    const [cart, setCart] = useState([]);

    // $valor total de carrito
    const [cartTotal, setCartTotal] = useState(0)

    // cantidad de mismo producto en carrito {id: quantity, id-2: quantity... }
    const [productQuantity, setProductQuantity] = useState({})

    // productos totales en carrito
    const[quantitySum, setQuantitySum] = useState(0)

    // show Add To Cart Button
    const [showBtn, setShowBtn] = useState(true)

    //************************************** FUNCTIONS **************************************/
    //****** ADD *******/
    const addToCart = (product) => {
        // evitar añadir duplicados
        for (let i = 0; i < cart.length; i++) {
            if (product.name === cart[i].name){
                alert("Producto ya esta en el carrito")
                return;
            }
        }
        //hide btn de agregar al carrito y mostrar +/-
        setShowBtn(false)
        // setCart con producto
        setCart([...cart, product])
        handleQuantityChange(product._id, 1)
    }
console.log(cart)
 //****** REMOVE *******/
    const removeFromCart = (id) => {
         //hide btn de agregar al carrito y mostrar +/-
         setShowBtn(true)
        // crear nuevo array con productos que se mantienen en cart. 
        const newCart = cart.filter(item => id != item._id)
        // setCart con array filtrado
        setCart(newCart)
        // actualizar quantity a 0;
        handleQuantityChange(id, 0)
    }

 //****** UPDATE NUM OF PRODUCTS IN NAV BAR CART ICON  && TOTAL CART *******/
    useEffect(()=> {

        countTotalProductsInCart()
        updateTotalCart()
        // checkIfItemIsInCart()
        
    },[cart, productQuantity])


 //****** STORE QUANTITY OF ITEM ADDED TO CART *******/
    const handleQuantityChange = (productID, newQuantity) => {
        // setProductQuantity
        setProductQuantity((prevState) => (
             {
                ...prevState,
                [productID]: newQuantity
             }
        ))
    }

 //****** CREATE ARRAY OF QUANTITIES OF EACH ITEM *******/   
    // array of products(id: quantity) with quantities [[id, value], [id, value]...]
    const arrayOfQuantities =  Object.entries(productQuantity)

  //****** SUM OF ITEMS FOR NAV BAR ICON *******/
    const countTotalProductsInCart = () => {

        let sum = 0;
        // transformamos values de obj en array , para poder sumarlos 
        let productsInCart = Object.values(productQuantity);
        //sum and store sum in 'QuantitySum'
        productsInCart.forEach(num => {
            sum += num
            return sum
        })
        setQuantitySum(sum)
    }


  //****** SUM OF $ITEMS * QUANTITY OF EACH  *******/
    const updateTotalCart = () => {

        let newTotal = 0;
        let quantity = 0;

        cart.forEach(item => {

            // each item has a quantity.. loop through arr of quantities to find item quantity
            for (let i = 0; i < arrayOfQuantities.length; i++)
            {
                if(arrayOfQuantities[i][0] == item._id){
                    quantity = arrayOfQuantities[i][1];
                }
            };

            // each item has a price
            const price = item.price;

            // multiply {quantity*price} = single itemTotal
            const singleItemTotal = price * quantity;
            console.log("new single total: " + singleItemTotal)

            // cart total, sum all single itemTotals... 
            newTotal = newTotal + singleItemTotal;

            setCartTotal(newTotal)
        
        })
    }

    //****** CLICK ON 'COMPRAR' AT CART.JSX *******/
    const confirmOrder = (e, userID, token) => {
        e.preventDefault()
        if (cart.length === 0 ) {
            confirm(`OOPS. Tu carrito esta vacío..`)
            return;
        }
        const confirmOrder = confirm(`El total de tu compra es $${cartTotal}. Serás redirigido para completar tus datos y realizar el pago.`)
        if(confirmOrder){
            console.log("saving order data") 
            sendOrderData(userID, token)
        } else {
           console.log("buuuu") 
        }
    }

    const sendOrderData = async (userID, token) => {
        const total = cartTotal;
        const itemNames = cart.map((item) => {
           return item.name
        });
        const userId = userID;

        const orderBody = {
            items: itemNames,
            total: total,
            userId: userId
        }
        console.log(orderBody)
        console.log(token)

        const res = await createOrderReq(orderBody, token)
        console.log(res)
    }


    const data = {
        addToCart,
        cart,
        removeFromCart,
        handleQuantityChange,
        quantitySum,
        arrayOfQuantities,
        cartTotal,
        confirmOrder,
        setShowBtn,
        showBtn,
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider };
export default CartContext;
