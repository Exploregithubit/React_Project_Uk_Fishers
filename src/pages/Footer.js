import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={6}>
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={6}>
            <h4>Follow Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
