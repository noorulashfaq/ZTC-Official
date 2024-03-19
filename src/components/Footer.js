import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div>
      <footer className="footer-section" style={{backgroundColor:"#fc7a46"}}>
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 Zealous Tech Corp. All rights reserved.</p>
              <p>196/8, Gokulakrishna street, LIC Colony, Hotel Vasantham Road, Opp to New Bus Stand, Salem – 636004</p>
              <p>zactacademy@gmail.com | zealoustechcorp@gmail.com</p>
              <p>9677520692, 9597334782, 8667002959</p>
            {/* </Col>
            <Col> */}
            <hr/>
              <ul>
                <li><Link style={{color:"white",cursor:"pointer"}} to="hero-section" smooth={true} duration={2000}>Home</Link></li>
                <li><Link style={{color:"white",cursor:"pointer"}} to="about-section" smooth={true} duration={2000}>About</Link></li>
                <li><Link style={{color:"white",cursor:"pointer"}} to="team-section" smooth={true} duration={2000}>Team</Link></li>
                <li><Link style={{color:"white",cursor:"pointer"}} to="services-section" smooth={true} duration={2000}>Services</Link></li>
                <li><Link style={{color:"white",cursor:"pointer"}} to="technology-section" smooth={true} duration={1000}>Technology</Link></li>
                {/* <li><Link style={{color:"white"}} to="hero-section" smooth={true} duration={1000}>Contact</Link></li> */}
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
