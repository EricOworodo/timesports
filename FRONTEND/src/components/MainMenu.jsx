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
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="home">Sports</Nav.Link>
            <Nav.Link href="home">FoothBall</Nav.Link>
            <Nav.Link href="home">Tennis</Nav.Link>
            <Nav.Link href="home">Wrestling</Nav.Link>
            <Nav.Link href="home">Athletics</Nav.Link>
            <Nav.Link href="home">BasketBall</Nav.Link>
            <Nav.Link href="home">Golf</Nav.Link>
       
            
          </Nav>
        </Navbar.Collapse>
      
    
    </Container>
  </Navbar>
 
  )
}
