import axios from 'axios'
import Cookies from 'js-cookie'
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser, loginUser, logoutRequest, getUserDataReq } from '../hooks/authUser'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // user que estara loggeado
    const [loggedUser, setLoggedUser] = useState(null)
    //autenticado
    const [isAuth, setIsAuth] = useState(false)
    //error msg
    const [errorMsgs, setErrorMsgs] = useState([])

    // connected to SignUpBox.jsx
    const signUp = async (user) => {
        try {
            const res = await registerUser(user)
            console.log(res)
            console.log(res.data.detail)
            //id, username e email. 
            // setLoggedUser(res.data.detail)
            getCookies()
            setIsAuth(true)
        } catch (error) {
            console.log(error)
            setErrorMsgs([error.response.data.message])
        }
    }

    // connected to LoginBox.jsx
    const login = async (user) => {
        try {
            const res = await loginUser(user)
            console.log(res)
            console.log(res)
            // setLoggedUser(res.data.detail)
            getCookies()
            setIsAuth(true)
        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
            setErrorMsgs([...errorMsgs, [error.response.data.message]])
        }
    }

    const navigate = useNavigate()

    // connected to navbar logout button
    const logout = async () => {
        try {
            console.log('logout')
            logoutRequest()
            setLoggedUser(null)
            setIsAuth(false)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        resetErrorMsgs()
        console.log(errorMsgs)
    }, [errorMsgs])


    //clear LOGIN/SINGUP errors
    const resetErrorMsgs = () => {
        let timer;
        console.log('not eliminado')
        if (errorMsgs.length > 0) {
            timer =  setTimeout(() => {
                console.log('eliminado')
                setErrorMsgs([])
            }, 5000)
        }
       return () => clearTimeout(timer)
    }

    useEffect(() => {
        getCookies()
        console.log(loggedUser)
    }, [])


    const getCookies = async () => {
        const cookies = Cookies.get()
        console.log(cookies)

        if(cookies.token){
            console.log(cookies.token)
            const res = await getUserDataReq();
            console.log(res.data)
            setLoggedUser(res.data)
            setIsAuth(true)
        }
    }

console.log(loggedUser)


    const data = { signUp, login, logout, isAuth, errorMsgs, setErrorMsgs, loggedUser}

    return(
        <AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };
export default AuthContext;