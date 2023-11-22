import { createContext, useState, useEffect, useReducer } from "react"
import { useNavigate } from "react-router-dom";
import { createOrderReq } from "../hooks/userOrders";
import { ACTIONS } from "../reducers/cartActions";
import { cartReducer, cartInitialState } from "../reducers/cartReducer";

const CartContext = createContext()

const CartProvider = ({children}) => {

    //************************************** VARIABLES **************************************/

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const { cart } = state

    // $valor total de carrito
    const [cartTotal, setCartTotal] = useState(0)

    // productos totales en carrito
    const[navBarItemQuantity, setNavBarItemQuantity] = useState(0)

    // show Add To Cart Button
    const [showBtn, setShowBtn] = useState(true)

    // ORDER success message (order sent)
    const [orderSuccess, setOrderSuccess] = useState(false)

    // ORDER error msg (sending Order to backend)
    const [errorMsgs, setErrorMsgs] = useState([])

    const navigate = useNavigate()

     //************************************************************* CART FUNCTIONS *************************************************************/
    //****** ADD *******/
    const addToCart = (product) => {
        dispatch({type: ACTIONS.ADD_TO_CART, payload: product})
        setShowBtn(false)
    }

 //****** REMOVE *******/
    const removeFromCart = (id) => {
        dispatch({type: ACTIONS.REMOVE_ITEM_FROM_CART, payload: id})
        setShowBtn(true)
    }

 //****** UPDATE NUM OF PRODUCTS IN NAV BAR CART ICON  && TOTAL CART *******/
    useEffect(()=> {
        countTotalProductsInCart()
        updateTotalCart()
        // checkIfItemIsInCart()
        const itemNamesAndQuantity = cart.map((item) => {
            let data = {product: item.name + item.quantity}
            return data
        });
        console.log(itemNamesAndQuantity)
        
    },[cart])

    const increaseItemQuantity = (item) => {
        dispatch({type: ACTIONS.ADD_ONE_QUANTITY, payload: item})
    }

    const reduceItemQuantity = (item) => {
        dispatch({type: ACTIONS.REDUCE_ONE_QUANTITY, payload: item})
    }

  //****** SUM OF ITEMS FOR NAV BAR ICON *******/
    const countTotalProductsInCart = () => {

        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            let productQuantity = cart[i].quantity
            count += productQuantity
        }

        setNavBarItemQuantity(count)
    }

  //****** SUM OF $ITEMS * QUANTITY OF EACH  *******/
    const updateTotalCart = () => {

        let newTotal = 0;

        cart.forEach(item => {

            let quantity = item.quantity
            let price = item.price;

            // multiply {quantity*price} = single itemTotal
            const singleItemTotal = price * quantity;

            // cart total, sum all single itemTotals... 
            newTotal = newTotal + singleItemTotal;
            setCartTotal(newTotal)
        
        })
    }

    //************************************************************* CHECKOUT *************************************************************/

    useEffect(() => {
        resetSuccessMsg()
    }, [orderSuccess])

    useEffect(() => {
        resetErrorMsgs()
    }, [errorMsgs])

    //****** CLICK ON 'COMPRAR' AT CART.JSX *******/
    const goToCheckout = (e) => {
        e.preventDefault()
        if (cart.length === 0 ) {
            confirm(`OOPS. Tu carrito esta vacío..`)
            return;
        }
        const confirmOrder = confirm(`El total de tu compra es $${new Intl.NumberFormat().format(cartTotal)}. Serás redirigido para completar tus datos y realizar el pago.`)
        if(confirmOrder){
            console.log("go to checkout") 
            navigate('/checkout')
        } else {
           console.log("buuuu") 
        }
    }

    const confirmOrder = (userID, token, deliveryData) => { 
        sendOrderData(userID, token, deliveryData)
    }

    //reset cart & array of quantities that was used to get quantitySum (navbar icon number)
    const resetCart = () => {
        dispatch({type: ACTIONS.CLEAR_CART})
    }

    const sendOrderData = async (userID, token, deliveryData) => {
        //Data to be saved in MONGO
        const total = cartTotal

        const itemNamesAndQuantity = cart.map((item) => {
            let quantityData = item.quantity.toString()
            let data = `${item.name} (${quantityData})`
            return data
        });
        const userId = userID;

        const {nombre, apellido, region, comuna, direccion, extra} = deliveryData

        if (nombre.length < 2 || apellido.length < 2) {
            return setErrorMsgs([...errorMsgs, ["Debes rellenar nombre y apellido."]])
        }

        if (comuna.length < 3 || direccion.length < 3) {
            return setErrorMsgs([...errorMsgs, ["Debes rellenar dirección y comuna."]])
        }

        console.log(deliveryData)
        const fullName = `${nombre} ${apellido}`
        const address = `${direccion}, ${comuna}`
        const addressData = `${extra}`

        const orderBody = {
            items: itemNamesAndQuantity,
            total: total,
            userId: userId,
            region: region,
            receiver: fullName,
            address: address,
            extra: addressData
        }
        console.log(orderBody)

        //save data in mongo
        try {
            const res = await createOrderReq(orderBody, token)
            resetCart()
            setOrderSuccess(true)
            console.log(res)
        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
            setErrorMsgs([...errorMsgs, [error.response.data.message]])
        }

    }



    const resetSuccessMsg = () => {
        let timer;
         if(orderSuccess)
         {
             timer = setTimeout(() => {
                 setOrderSuccess(false)
                 navigate('/myprofile')
             }, 10000)
         }
         return () => clearTimeout(timer)
         
     }

    //clear checkout form error
    const resetErrorMsgs = () => {
        let timer;
        if (errorMsgs.length > 0) {
            timer =  setTimeout(() => {
                setErrorMsgs([])
            }, 5000)
        }
       return () => clearTimeout(timer)
    }

    const data = {
        addToCart,
        cart,
        removeFromCart,
        increaseItemQuantity,
        reduceItemQuantity,
        navBarItemQuantity,
        cartTotal,
        setShowBtn,
        goToCheckout,
        showBtn,
        confirmOrder,
        setOrderSuccess,
        orderSuccess,
        errorMsgs,
        setErrorMsgs
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )

}

export { CartProvider };
export default CartContext;
