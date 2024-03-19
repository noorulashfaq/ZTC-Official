import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <section className="about-section">
        <Container>
          <Row>
            <Col>
              <h3 style={{color:"#fc7a46",textAlign:"center"}}><b>About Us</b></h3>
              <p style={{color:"#0c83c8",textAlign:"center"}}>
                Zealous Academy of Career Training is most desirable young and
                enthusiastic team of Skill set training company focus on technical part, we are
                known for our practical approach towards trainings that enable students to gain
                real-time exposure on competitive technologies and meet the industry
                requirement.
                Our Trainings are focused on perfect improvement of technical skills set
                for entry level recruits in organizations and working professional. Training
                classes are sure to help the trainee with COMPLETE PRACTICAL TRAINING
                and Real time methodologies which lead them to get placed, our previous
                candidates are best example of this fact.<br/><hr/>
                <p style={{textAlign:"center"}}><b style={{color:"#fc7a46"}}>OUR MISSION</b><br/>
                Deliver a real time Skill set training in various genre which lead candidates
                to meet the industry requirements without any compromise.<br/></p><hr/>
                <p style={{textAlign:"center"}}><b style={{color:"#fc7a46"}}>OUR DREAM</b><br/>
                “Every student in each node of India is comprised with various talents. Our
                dream is to induce them with proper guidance to meet industry requirements and
                enhance their future”.<br/></p><hr/>
                <p style={{textAlign:"center"}}><b style={{color:"#fc7a46"}}>We Zealous believe and work towards “MUTUAL ENHANCEMENT FOR
                BOTH U AND US”
                - Founder</b></p>
              </p><hr/>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About
