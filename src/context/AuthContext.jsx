import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser, loginUser, logoutRequest } from '../hooks/authUser'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // user que estara loggeado
    const [loggedUser, setLoggedUser] = useState(null)

    const [isAuth, setIsAuth] = useState(false)

    // connected to SignUpBox.jsx
    const signUp = async (user) => {
        try {
            const res = await registerUser(user)
            console.log(res)
            console.log(res.data.detail)
            //id, username e email. 
            setLoggedUser(res.data.detail)
            setIsAuth(true)
        } catch (error) {
            console.log(error)
        }
    }

    // connected to LoginBox.jsx
    const login = async (user) => {
        try {
            const res = await loginUser(user)
            console.log(res)
            console.log(res)
            setLoggedUser(res.data.detail)
            setIsAuth(true)
        } catch (error) {
            console.log(error)
        }
    }

    const navigate = useNavigate()

    // connected to navbar logout button
    const logout = async () => {
        try {
            console.log('logout')
            logoutRequest()
            setIsAuth(false)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const data = { signUp, login, logout, isAuth }

    useEffect(() => {
        console.log(loggedUser)
    }, [setLoggedUser])

    return(
        <AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };
export default AuthContext;