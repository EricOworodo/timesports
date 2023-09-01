import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.png'

import React from 'react'

export default function MainMenu() {
  return (
   
    <Navbar sticky='top' expand="lg" className="bg-body-primary" >
    <Container>
      
        <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{width:180, height:40}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="home">Home</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      
    
    </Container>
  </Navbar>
 
  )
}
