import React from 'react'
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap'
import './Header.css'
const Header =()=>{


    return (

        
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
   <Navbar.Brand href="/"><span style={{fontFamily:"arial "}}>QuizoPhile</span></Navbar.Brand>
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
   <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto">
       <Nav.Link href="/makequiz">makequiz</Nav.Link>
       <Nav.Link href="#pricing">answerquiz</Nav.Link>
       <NavDropdown title="Features" id="collasible-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
       </NavDropdown>
     </Nav>
     <Nav>
       <Nav.Link href="#deets">Log In</Nav.Link>
       <Nav.Link eventKey={2} href="#memes">
         Sign Up
       </Nav.Link>
     </Nav>
   </Navbar.Collapse>
 </Navbar>
    
    )
}

export default Header 