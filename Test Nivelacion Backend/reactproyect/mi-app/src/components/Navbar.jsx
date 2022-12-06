import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';




function NavBar() {


  return (

    <Navbar bg="light" expand="lg">
      <Container fluid className="containerNav">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="container-fluid my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >         
          </Nav>

          
        </Navbar.Collapse>


        <Nav>
          
        <Nav.Link href="/Login" className="loginButton">Log in</Nav.Link>
        <Nav.Link href="/Register" className="registerButton">Register</Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar