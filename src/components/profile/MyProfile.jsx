import './myprofile.css'
import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'

import ProfileNavBtns from './profileNavBtns'
import MyProfileInfo from './MyProfileInfo'
import EditProfileInfo from './config/EditProfileInfo'
import MyProfileOrders from './MyProfileOrders'

export default function MyProfile() {

    const { loggedUser } = useContext(AuthContext)

    const [displayAllOrders, setDisplayAllOrders] = useState(true)

    const [userBtnState, setUserBtnState ] = useState(true)
    const [nutBtnState, setNutBtnState ] = useState(false)
    const [ordersBtnState, setOrdersBtnState ] = useState(false)

    const switchProfileSection = (setType) => { 
        setType(true)
    }

    const hideUnselectedSection = (setType, setTypeTwo) => {
        setType(false)
        setTypeTwo(false)
    }



    return(
        <>
        <div className="profile-pg-container box-shadow-container">
            <section className="breadcrumb">
                <nav>
                    <Link as={Link} to='/'>inicio / </Link>
                    <Link as={Link} to='/myprofile'>{loggedUser ? `perfil de ${loggedUser.username}` : <i>..loading</i> }</Link>
                </nav>
            </section>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <section className="d-flex">
                            <ProfileNavBtns
                            setUserBtnState={setUserBtnState}
                            setNutBtnState={setNutBtnState}
                            setOrdersBtnState={setOrdersBtnState}
                            switchProfileSection={switchProfileSection}
                            hideUnselectedSection={hideUnselectedSection}
                            setDisplayAllOrders={setDisplayAllOrders}
                            />
                </section>
                {userBtnState && <div className="mt-2 myprofile-info-container d-flex flex-column justify-content-start align-items-center">
                <MyProfileInfo user={loggedUser}/>
                </div>}
                {ordersBtnState && <div className="mt-2 myprofile-info-orders-container d-flex flex-column justify-content-center align-items-center">
                    <MyProfileOrders
                    displayAllOrders={displayAllOrders}
                    setDisplayAllOrders={setDisplayAllOrders}/>
                </div>}
                {nutBtnState && <div className="mt-2 editmyprofile-info-container d-flex flex-column justify-content-center align-items-center">
                    <EditProfileInfo />
                </div>}
            </div>
        </div>
        </>
    )
}