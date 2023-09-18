import React from 'react'
import MainMenu from './MainMenu'

export default function Header() {
  return (
    <div style={{background:'#fff', border:1, borderStyle:'solid', borderColor:'#999', marginBottom:8, marginTop:0, zIndex:1, position:'relative'}}>
        <MainMenu />
    </div>
  )
}
