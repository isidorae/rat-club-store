import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'

import NavbarComp from './components/NavbarComp';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Store from './pages/Store'
import Product from './pages/Product'
import Footer from './components/Footer';
import ProductCollection from './pages/ProductCollection';
import SignIn from './pages/SignIn'
import UserProfile from './pages/UserProfile'

import { useContext } from "react";
import SignInContext from './context/SignInContext'



function App() {

const { signIn } = useContext(SignInContext)

console.log(signIn)
  return (
    <>
    {signIn
    ? (<Routes>
       <Route path='/' element={< SignIn/>}></Route>
       <Route path='/*' element={< Navigate to='/'/>} ></Route>
    </Routes>)
    : ( 
      <>
    <NavbarComp/>
    <Routes>
      <Route path='/' element={< Home/>}></Route>
      <Route path='/contact' element={< Contact/>}></Route>
      <Route path='/about' element={< About/>}></Route>
      <Route path='/store' element={< Store/>}></Route>
      <Route path='/store/:productCollection' element={< ProductCollection />}></Route>
      <Route path='/product/:productCollection/:productID' element={< Product/>}></Route>
      <Route path='/signin' element={< SignIn/>}></Route>
      <Route path='/myprofile' element={< UserProfile/>}></Route>
      <Route path='/*' element={< Navigate to='/'/>} ></Route>
    </Routes>
    <Footer/>
    </>)}
    </>
  )
}

export default App
