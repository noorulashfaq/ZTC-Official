import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import EmpImg from '../Images/Employee1.png'

const Team = () => {
  return (
    <div>
      
      <section className='team-section'>
      <div className="team-page">
      <Container>
        <Row>
          <Col>
            <h1 style={{color:"#fc7a46"}}>Our Team</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card style={{border:"none"}}>
              <Card.Img style={{borderRadius:"50%",width:"50%",display:"flex",alignSelf:"center"}} variant="top" src={EmpImg} />
              <Card.Body style={{textAlign:"center",color:"#fc7a46"}}>
                <Card.Title style={{color:"#0c83c8"}}>Razak Mohamed S</Card.Title>
                <Card.Text>
                  Founder & Head of Talent Development
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{border:"none"}}>
              <Card.Img style={{borderRadius:"50%",width:"50%",display:"flex",alignSelf:"center"}} variant="top" src={EmpImg} />
              <Card.Body style={{textAlign:"center",color:"#fc7a46"}}>
                <Card.Title style={{color:"#0c83c8"}}>Rasheedha R</Card.Title>
                <Card.Text>
                  Operations Head
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{border:"none"}}>
              <Card.Img style={{borderRadius:"50%",width:"50%",display:"flex",alignSelf:"center"}} variant="top" src={EmpImg} />
              <Card.Body style={{textAlign:"center",color:"#fc7a46"}}>
                <Card.Title style={{color:"#0c83c8"}}>Annamalai</Card.Title>
                <Card.Text>
                  Development Manager
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
      </section>

    </div>
  )
}

export default Team
