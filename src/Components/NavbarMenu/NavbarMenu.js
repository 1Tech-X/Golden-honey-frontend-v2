import React, {useState} from 'react'
import './NavbarMenu.css'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
const NavbarMenu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

    
  return (
    <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navbarMenu'>
  <Container fluid>
  <Navbar.Brand as={Link} to="/"><img src='images/Logo.png' alt='logo' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars'} /></Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/"  eventKey={2} onClick={closeMobileMenu}>HOME</Nav.Link>
      <Nav.Link as={Link} to="/"  eventKey={2} onClick={closeMobileMenu}>ABOUT US</Nav.Link>
      <NavDropdown title="OUR SERVICES" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/" eventKey={2} onClick={closeMobileMenu}>Action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/"  eventKey={2} onClick={closeMobileMenu}>Another action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/"  eventKey={2} onClick={closeMobileMenu}>Something</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/" eventKey={2} onClick={closeMobileMenu}>Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/"    eventKey={2} onClick={closeMobileMenu}>CONTACT US</Nav.Link>
      <Nav.Link as={Link} to="/"    eventKey={2} onClick={closeMobileMenu}>CAREER</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
  <Nav.Link href="#deets" ><i className="fab fa-facebook"></i></Nav.Link> 
      <Nav.Link href="#memes">
      <i className="fab fa-instagram"></i>
      </Nav.Link>
  </Container>
</Navbar>
    </div>
  )
}

export default NavbarMenu