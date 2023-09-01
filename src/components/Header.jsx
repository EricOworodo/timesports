import React from 'react'
import MainMenu from './MainMenu'

export default function Header() {
  return (
    <div style={{background:'#fff', marginBottom:8, marginTop:15, zIndex:1, position:'relative'}}>
        <MainMenu />
    </div>
  )
}
