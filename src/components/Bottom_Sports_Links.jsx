import React from 'react'
import { Link } from 'react-router-dom'

export default function Bottom_Sports_Link() {
  return (
    <div style={{display:'flex', justifyContent:'left', fontSize:14, textAlign:'left'}}>
        <ul style={{listStyleType:'none'}}>
            <p style={{fontSize:18, fontWeight:500}}>Sports Categories</p>
            <li>
                <Link to={'/Home'} style={{color:'#f0f0f0',}}>Sports</Link>
            </li>
            <li>
                <Link to={'/'} style={{color:'#f0f0f0',}}>Foothball</Link>
            </li>
            <li>
                <Link to={'/'} style={{color:'#f0f0f0',}}>Tennis</Link>               
            </li>
            <li>
                <Link to={'/'} style={{color:'#f0f0f0',}}>Wrestling</Link>               
            </li>
            <li>
                <Link to={'/'} style={{color:'#f0f0f0',}}>BasketBall</Link>               
            </li>
            <li>
                <Link to={'/'} style={{color:'#f0f0f0',}}>Athletics</Link>               
            </li>
            <li>
                <Link to={'/'} style={{color:'#f0f0f0',}}>Golf</Link>               
            </li>
           
        </ul>
    </div>
  )
}
