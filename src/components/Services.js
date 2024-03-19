import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import B2B from '../Images/B2B.jfif'
import B2B1 from '../Images/B2B1.jfif'
import Corporate from '../Images/Corporate.jfif'
import Inhouse from '../Images/Inhouse.jfif'

const Services = () => {
  return (
    <div>
      <section className="services-section">
      <h2 style={{textAlign:"center",color:"#fc7a46"}}>Services we offer</h2>
        <Container>
      <Row>
        <Col md={3}>
          <Card className="card-services" style={{width:"100%",backgroundColor:"#0c83c8"}}>
            <Card.Body>
              <Card.Title style={{color:"#fc7a46",backgroundColor:"white",padding:"2px",textAlign:"center"}}>Corporate Training</Card.Title>
              <Card.Text style={{color:"#ffffff",textAlign:"center"}}>Business to Client</Card.Text>
              <Card.Img variant="top" src={Corporate} alt="Corporate Training"/><br/><br/>
              <ul className="list-unstyled" style={{color:"#ffffff"}}>
                <li>
                  <strong>Onboarding training:</strong> Introduce new employees to company policies, procedures.
                </li>
                <li>
                  <strong>Internships:</strong> Provide practical work experience to students or recent graduates.
                </li>
                <li>
                  <strong>Domain Training:</strong> Offer specialized training in specific industry domains.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
  <Card className="card-services" style={{width:"100%",backgroundColor:"#0c83c8"}}>
    
    <Card.Body>
      <Card.Title style={{color:"#fc7a46",backgroundColor:"white",padding:"2px",textAlign:"center"}}>In-House Training</Card.Title>
      <Card.Text style={{color:"#ffffff",textAlign:"center"}}>Business to Client</Card.Text>
      <img className="card-img" style={{height:"160px"}} src={Inhouse} alt="In-House Training" /><br/><br/>
      <ul className="list-unstyled" style={{color:"#ffffff"}}>
        <li>
          <strong>Competitive Training:</strong> Provide training to stay competitive in the market.
        </li>
        <li>
          <strong>Bootcamps:</strong> Intensive training programs designed for specific skill sets or roles.
        </li>
        <li>
          <strong>Internships:</strong> Offer internship opportunities for practical experience.
        </li>
      </ul>
    </Card.Body>
  </Card>
</Col>
  {/* </Row>
        <Row> */}
        <Col md={3}>
          <Card className="card-services" style={{width:"100%",backgroundColor:"#0c83c8"}}>
            <Card.Body>
              <Card.Title style={{color:"#fc7a46",backgroundColor:"white",padding:"2px",textAlign:"center"}}>Campus Training</Card.Title>
              <Card.Text style={{color:"#ffffff",textAlign:"center"}}>Business to Business</Card.Text>
              <Card.Img variant="top" src={B2B} alt="Campus Training"/><br/><br/>
              <ul className="list-unstyled" style={{color:"#ffffff"}}>
                <li>
                  <strong>Value added courses:</strong> Courses to enhance students' skills and knowledge.
                </li>
                <li>
                  <strong>Workshops:</strong> Hands-on sessions focused on specific topics or skills.
                </li>
                <li>
                  <strong>Bootcamps:</strong> Intensive training programs designed to quickly develop skills.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="card-services" style={{width:"100%",backgroundColor:"#0c83c8"}}>
            <Card.Body>
              <Card.Title style={{color:"#fc7a46",backgroundColor:"white",padding:"2px",textAlign:"center"}}>Proof of Concepts</Card.Title>
              <Card.Text style={{color:"#ffffff",textAlign:"center"}}>Business to Business</Card.Text>
              <Card.Img variant="top" src={B2B1} alt="Product Development" /><br/><br/>
              <ul className="list-unstyled" style={{color:"#ffffff"}}>
                <li>
                  <strong>Competitive Training:</strong> Provide training to stay competitive in the market.
                </li>
                <li>
                  <strong>Bootcamps:</strong> Intensive training programs designed for specific skill sets or roles.
                </li>
                <li>
                  <strong>Internships:</strong> Offer internship opportunities for practical experience.
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
      </section>
      
    </div>
  )
}

export default Services
