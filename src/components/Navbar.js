import React from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import zealous from '../Images/Zealous.png';

function Navigation() {
  return (
    <Navbar expand="lg" className='custom-navbar'>
      <Container>
        <Navbar.Brand>
          <Link href="/" smooth={true} duration={1000}>
            <img src={zealous} alt="Zealous Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="hero-section" duration={1000} className="nav-link" style={{cursor:"pointer",color:"#0c83c8"}}>Home</Link>
            <Link to="about-section" duration={1000} className="nav-link" style={{cursor:"pointer",color:"#0c83c8"}}>About</Link>
            <Link to="team-section" duration={1000} className="nav-link" style={{cursor:"pointer",color:"#0c83c8"}}>Team</Link>

            {/* <NavDropdown title="Services" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="#">Business to Client</NavDropdown.Item>
              <NavDropdown.Item href="#">Business to Business</NavDropdown.Item>
            </NavDropdown> */}

            <Link to="services-section" duration={1000} className="nav-link" style={{cursor:"pointer",color:"#0c83c8"}}>Services</Link>

            <Link to="technology-section" duration={2000} className="nav-link" style={{cursor:"pointer",color:"#0c83c8"}}>Technology</Link>

            <Link to="contact-section"  duration={4000} className="nav-link" style={{cursor:"pointer",color:"#0c83c8"}}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
