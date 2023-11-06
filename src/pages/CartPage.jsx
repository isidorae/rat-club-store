import Cart from "../components/carrito/Cart"
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import SignInContext from "../context/SignInContext";


export default function CartPage() {

    const { setSignIn } = useContext(SignInContext)
    const { isAuth } = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            setSignIn(true);
            navigate('/')
        }

    }, [])


    return(
        <>
        <div className="product-collection-container">
            <h1 className="text-center py-5">Carrito de compras</h1>
            <Cart/>
        </div>
        </>
    )

}