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


function App() {

  return (
    <>
    <NavbarComp/>
    <Routes>
      <Route path='/' element={< Home/>}></Route>
      <Route path='/contacto' element={< Contact/>}></Route>
      <Route path='/about' element={< About/>}></Route>
      <Route path='/store' element={< Store/>}></Route>
      <Route path='/store/:productCollection' element={< ProductCollection />}></Route>
      <Route path='/product' element={< Product />}></Route>
      <Route path='/*' element={< Navigate to='/'/>} ></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
