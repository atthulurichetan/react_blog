import React from 'react'
import Home from './pages/home'
import signin from './pages/signin'
import signup from './pages/signup'
import profile from './pages/profile'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<signin />}/>
        <Route path='/signup' element={<signup />}/>
        <Route path='/about' element={<about />}/>
        <Route path='/profile' element={<profile />}/>
      </Routes>
    </BrowserRouter>  
  )
}

