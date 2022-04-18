import React from 'react'
import './Header.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" className='Header'>
    <Container fluid>
    <Nav className="ms-auto">
      <Nav.Link href="#home"><i className="fab fa-whatsapp"></i> 9318818893</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    </div>
  )
}

export default Header