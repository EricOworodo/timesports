import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPost from './pages/AdminPost'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'





function App() {
 

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/adminpost" element={<AdminPost />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            
            
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
