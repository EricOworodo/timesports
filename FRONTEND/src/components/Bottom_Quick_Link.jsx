import React from 'react'
import { Link } from 'react-router-dom'

export default function Bottom_Quick_Link() {
  return (
    <div style={{display:'flex', justifyContent:'left', fontSize:14, textAlign:'left'}}>
        <ul style={{listStyleType:'none'}}>
            <p style={{fontSize:18, fontWeight:500}}>Our Site</p>
            <li>
                <Link to={'/Home'} style={{color:'#f0f0f0',}}>Home</Link>
            </li>
            <li>
                <Link to={'/'} style={{color:'#f0f0f0',}}>About Us</Link>
            </li>
            <li>
                <Link to={'/'} style={{color:'#f0f0f0',}}>Contact Us</Link>               
            </li>
            <li>
                <Link to={'/signin'} style={{color:'#f0f0f0',}}>Admin Post</Link>               
            </li>
            {/* <li>
                <Link to={'/signup'} style={{color:'#f0f0f0',}}>SignUp</Link>               
            </li> */}
            {/* <li>
                <Link to={'/signin'} style={{color:'#f0f0f0',}}>Admin Login</Link>               
            </li> */}
           
        </ul>
    </div>
  )
}
