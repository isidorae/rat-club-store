import { useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import SignInContext from '../context/SignInContext'
import { useNavigate } from 'react-router-dom'
import MyProfile from '../components/profile/MyProfile'


export default function UserProfile() {

    const { setSignIn } = useContext(SignInContext)
    const { isAuth } = useContext(AuthContext)

    const navigate = useNavigate()

    //permitir acceso solo si esta AUTH, sino reedirigi a login
    useEffect(() => {
        if (!isAuth) {
            setSignIn(true)
            navigate('/')
        }

    }, [])

    return(
        <>
        <MyProfile/>
        </>
    )
}