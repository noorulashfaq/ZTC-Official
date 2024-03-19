import React, { useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    emailjs.send('service_r95amrr', 'template_dlxisr9', { ...formData, to_email: 'noorulashfaq786@gmail.com' }, '4C6XK5WEB_pj_W4Y1')
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
        window.location.assign('/')
      }, (error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });
  };


  return (
    <div>
      <section className='contact-section'>
      <div className="contact-page">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 style={{color:"#fc7a46"}}>Contact Us</h1>
            <p style={{color:"#0c83c8"}}>Have a question or want to get in touch? Fill out the form below:</p>
            <div className='contact-container' >
            {/* <Form onSubmit={handleSubmit}> */}
              <Form.Group style={{marginTop:"5px"}} controlId="formName">
                <Form.Label style={{color:"white"}}>Your Name</Form.Label>
                <Form.Control name="name" onChange={handleChange} type="text" value={formData.name} placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group style={{marginTop:"5px"}} controlId="formEmail">
                <Form.Label style={{color:"white"}}>Email Address</Form.Label>
                <Form.Control name="email" onChange={handleChange} type="email" value={formData.email} placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group style={{marginTop:"5px"}} controlId="formEmail">
                <Form.Label style={{color:"white"}}>Phone</Form.Label>
                <Form.Control name="phone" onChange={handleChange} type="tel" value={formData.phone} placeholder="Enter your Mobile" required />
              </Form.Group>
              <Form.Group style={{marginTop:"5px"}} controlId="formMessage">
                <Form.Label style={{color:"white"}}>Message</Form.Label>
                <Form.Control as="textarea" name="message" type='text' onChange={handleChange} value={formData.message} rows={5} placeholder="Enter your message" required />
              </Form.Group>
              <Button onClick={handleSubmit} style={{backgroundColor:"#fc7a46",width:"100%",marginTop:"10px"}} type="submit">
                Submit
              </Button>
            {/* </Form> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      </section>

    </div>
  )
}

export default Contact
