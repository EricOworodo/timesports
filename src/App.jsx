import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p style={{fontSize:30, fontWeight:650, lineHeight:1.2}}>
        Welcome to Times Sports
      </p>
      <p style={{fontSize:18, marginTop:-20, lineHeight:1.3}}>
        kindly check back soon, this website is under construction
      </p>
      </div>
      
    </>
  )
}

export default App
