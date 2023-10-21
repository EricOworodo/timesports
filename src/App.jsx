import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import NewsPostPage from './pages/NewsPostPage'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import PreAuthorisedPosts from './pages/admin/PreAuthorisedPosts'
import AdminDashboard from '../src/pages/admin/AdminDashboard'
import CreatePost from './pages/admin/CreatePost'
import CreateUser from './pages/admin/CreateUser'
import AdminLogin from './pages/admin/AdminLogin'
import Posts from './pages/admin/posts'

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
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/newspostpage" element={<NewsPostPage />} />
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/preauthorisedposts" element={<PreAuthorisedPosts />} />
              <Route path="/createpost" element={<CreatePost />} />
              <Route path="/createuser" element={<CreateUser />} />
              
              
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
