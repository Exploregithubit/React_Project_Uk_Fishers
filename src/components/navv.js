import React from 'react';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../assets/img/logo1.jpeg';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

import './navv.css';

function Navv() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (

    

    <nav className="navbar">
            <Row className="header1">
                <Nav activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Government Of Uttarakhand</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Deparment of Fishers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Col></Col>
      {/* <Form className="search-bar">
        
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
          <Button variant="success" className='search-btn'>Search</Button>
      */}
    </Nav>
                
            </Row>
            <Row className="header2">
              <Col sm={3}>
              <Navbar.Brand href="#home">
          <img
         src={logo1} // Adjusted path
          className='img-brand'
             alt="Brand Logo"
          />
       </Navbar.Brand></Col>
       <Col sm={6}>
       <h4 className='head1 text-danger'>Official Website of</h4>
       <h5 className='head2'> Deparment of Fishers Uttarakhand</h5>
       </Col>
       <Col sm={3} className='Address contact-us'>
            <h7 className ="text-danger">Contact Us</h7>
            <p>
                <strong>Directorate:</strong>
                <span> Badasi Grant (Dhanyari), Dehradun</span>
                <br />
                <strong>Phone:</strong>
                <span> +91 7251037221</span>
                <br />
                <strong>Email:</strong>
                <span> info.fisheriesuk@gmail.com</span>
            </p>
        </Col>
      
            </Row>
            <Row className="header3">
            <Navbar expand="lg" className="bg-body-primary">
       <Navbar.Toggle aria-controls="basic-navbar-nav"  className='nav-toggle'/>
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
           <Nav.Link as={Link} to="/">Home</Nav.Link>
             <Nav.Link as ={Link} to="/About">About</Nav.Link>
           <Nav.Link as ={Link} to="/FeedSeed">FeedSeed</Nav.Link>
            <Nav.Link as={Link}to="/Hatchery">Hatchery</Nav.Link>
            <Nav.Link href="#home">Farmers</Nav.Link>
            <Nav.Link as={Link}to="/Licence">Angling License</Nav.Link>
           <Nav.Link as={Link}to="/ComplainForm">शिकायत/प्रतिक्रिया</Nav.Link>
           <NavLink to="/login" className='nav-login'>Login</NavLink>
            <Nav.Link as={Link}to="/Registration" className='nav-login'>मत्स्य पालक बने  </Nav.Link>

            
          </Nav>
       </Navbar.Collapse>
       
    </Navbar>
    
                
            </Row>
        </nav>
    

    
    // 
  );
}

export default Navv;
