import React from 'react'
import  '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
import { Container } from 'react-bootstrap'


export default function Home() {
  return (
    <div className='App'>
      <div>
        <Header />
        
        <Bottom />
        <Footer />
      </div>
    </div>
  )
}
