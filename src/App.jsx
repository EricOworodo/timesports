import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPost from './pages/AdminPost'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import AdminPage from './pages/AdminPage'






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
            <Route path="/adminpage" element={<AdminPage />} />
            
            
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
