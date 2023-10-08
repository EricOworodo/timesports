import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPost from './pages/AdminPost'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import {Provider} from 'react-redux'
import store from './redux/store'
import NewsPostPage from './pages/NewsPostPage'
import AdminDashboard from './pages/AdminDashboard'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Posts from './components/Posts'
import PreAuthorisedPosts from './components/PreAuthorisedPosts'

let persistor = persistStore(store);

function App() {
 

  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/adminpost" element={<AdminPost />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/newspostpage" element={<NewsPostPage />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/preauthorisedposts" element={<PreAuthorisedPosts />} />
              
              
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
