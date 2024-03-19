import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Homepage.css'; // Import your custom CSS file
import { Link } from 'react-scroll';

function HomePage() {

  return (
    <div className="homepage">
      <section className="hero-section">
        <Container>
          <Row>
            <Col>
              <h1>Crafting innovative learning solutions<br/>that ignite your potential</h1>
              <p>Learn | Practice | Implement | Career</p>
              <Button style={{backgroundColor:"#fc7a46"}}><Link to="contact-section" duration={5000}>Reach Us</Link></Button>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default HomePage;
