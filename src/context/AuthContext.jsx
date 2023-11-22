import Cookies from 'js-cookie'
import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser, loginUser, logoutRequest, getUserDataReq, updateUserDataReq, updateUserPassReq, updateUserEmailReq } from '../hooks/authUser'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    // user que estara loggeado
    const [loggedUser, setLoggedUser] = useState(null)
    // user id de loggedUser
    const [userID, setUserID] = useState(null)
    //autenticado
    const [isAuth, setIsAuth] = useState(false)
    //error msg (login/sign up)
    const [errorMsgs, setErrorMsgs] = useState([])
    //loading msg
    const [userLoading, setUserLoading ] = useState(false)
    //save token
    const [token, setToken] = useState("")

    const navigate = useNavigate()

    // connected to SignUpBox.jsx
    const signUp = async (user) => {
        try {
            setUserLoading(true)
            const res = await registerUser(user)
            setUserID(res.data.detail.id)
            setToken(res.data.detail.token)
            setUserLoading(false)
            setIsAuth(true)
            getUserData(res.data.detail.id, res.data.detail.token)
            navigate('/myprofile')
        } catch (error) {
            console.log(error)
            setErrorMsgs([error.response.data.message])
            setUserLoading(false)
        }
    }

    // connected to LoginBox.jsx
    const login = async (user) => {
        try {
            setUserLoading(true)
            const res = await loginUser(user)
            setToken(res.data.detail.token)
            setUserID(res.data.detail.id)
            setUserLoading(false)
            setIsAuth(true)
            getUserData(res.data.detail.id, res.data.detail.token)
        } catch (error) {
            console.log(error)
            console.log(error.response.data.message)
            setErrorMsgs([...errorMsgs, [error.response.data.message]])
            setUserLoading(false)
        }
    }

    const getUserData = async (id, token) => {
        const res = await getUserDataReq(id, token)
        const userData = await res.data
        setLoggedUser(userData)
    }

    // connected to navbar logout button
    const logout = async () => {
        try {
            console.log('logout')
            logoutRequest()
            setLoggedUser(null)
            setIsAuth(false)
            setToken("")
            navigate('/')
            setUserID(null)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        resetErrorMsgs()
    }, [errorMsgs])


    //clear LOGIN/SINGUP errors
    const resetErrorMsgs = () => {
        let timer;
        if (errorMsgs.length > 0) {
            timer =  setTimeout(() => {
                setErrorMsgs([])
            }, 5000)
        }
       return () => clearTimeout(timer)
    }

    //**************** update successful msg */
    const [ updateSuccess, setUpdateSuccess ] = useState(false)
    //**************** update error msg */
    const [updateErrorMsg, setUpdateErrorMsg] = useState([])

    useEffect(() => {
        resetSuccessMsg()
    }, [updateSuccess])

    useEffect(() => {
        resetUpdateErrMsg()
    }, [updateErrorMsg])

    //update user data
    const updateUserData = async (id, body, token) => {
            try {
                console.log(id, body, token)
                const res = await updateUserDataReq(id, body, token);
                console.log(res)
        
                if(res.status === 200) {
                    setUpdateSuccess(true)
                    setLoggedUser(res.data.detail)
                }
                
            } catch (error) {
                console.log(error.response.data.message)
                setUpdateErrorMsg([error.response.data.message])
            }
        }

    //update email
    const updateUserEmail = async (id, email, token) => {
        try {
            const res = await updateUserEmailReq(id, email, token);
            console.log(res)

            if(res.status === 200) {
                setUpdateSuccess(true)
                setLoggedUser(res.data.detail)
            }
        } catch (error) {
            console.log(error.response.data.message);
            setUpdateErrorMsg([error.response.data.message])
        }
    }

    //update password
    const updateUserPass = async (id, pass, token) => {

        try {
            const res = await updateUserPassReq(id, pass, token)
            console.log(res)
            if(res.status === 200) {
                setUpdateSuccess(true)
            }
            return;
        } catch (error) {
            console.log(error.response.data.message)
            setUpdateErrorMsg([error.response.data.message])
        }
    }

    const resetSuccessMsg = () => {
       let timer;
        if(updateSuccess)
        {
            timer = setTimeout(() => {
                setUpdateSuccess(false)
            }, 5000)
        }
        return () => clearTimeout(timer)
        
    }

    const resetUpdateErrMsg = () => {
        let timer;
        if (updateErrorMsg.length > 0)
        {
            timer = setTimeout(() => {
                setUpdateErrorMsg(false)
            }, 4000)
        }
        return () => clearTimeout(timer)
    }


    const data = {
        signUp, login, logout, token, userLoading, userID,
        isAuth, errorMsgs, setErrorMsgs, updateSuccess, loggedUser,
        updateUserData, updateUserPass, updateUserEmail, updateErrorMsg
        }

    return(
        <AuthContext.Provider value={data} >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };
export default AuthContext;