import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png'

import React from 'react'

export default function HeaderLogo() {
  return (
<div class='col-lg-12 px-lg-5 px-sm-5 ps-lg-0 ps-sm-5' style={{display:'flex', flexDirection:'row', background:'#003366', justifyContent:'space-between', alignContent:'center', alignItems:'center', height:100, marginBottom:0, marginTop:15, zIndex:1, position:'relative'}}>
    <Navbar.Brand sticky='top' href="#home"><img src={logo} alt="logo" style={{width:'100%',}} /></Navbar.Brand>
    <div style={{color:'#fff', display:'flex', flexDirection:'row'}}>
        <p style={{marginRight:30,}}>Login</p>
        <p>Sign Up</p>
    </div>
</div>
  )
}

