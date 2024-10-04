import React from 'react'
import { Form, Button,  Container } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'


const Licence = () => {
  return (
    <Container fluid>
       
    <Form className='form mt-5 mb-5'>
       <h4 className='text-success'>Angling License Request Form
       </h4>
       <Row>
            <Col md={6}>
       <Form.Label htmlFor="inputPassword5"></Form.Label>
 <Form.Control
   type="password"
   id="inputPassword5"
   className='mb-3'
   placeholder='Enter User Name'
   aria-describedby="passwordHelpBlock"
 />
 
 <Form.Label htmlFor="inputPassword5"></Form.Label>
 <Form.Control
   type="number"
   id="inputPassword5"
   className='mb-3'
   placeholder='Mobile No.'
   aria-describedby="passwordHelpBlock"
 />
  <Form.Select aria-label="Default select example">
      <option>District Name</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select> </Col>
 <Col md={6}>  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label></Form.Label>
   <Form.Control type="email" placeholder="Enter Your Email" />
 </Form.Group>
 <Form.Label htmlFor="inputPassword5"></Form.Label>
 <Form.Control
   type="number"
   id="inputPassword5"
   className='mb-3'
   placeholder='Aadhar No.'
   aria-describedby="passwordHelpBlock"
 />
 
 <Form.Select aria-label="Default select example">
      <option>Choose District to show Block Names</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select></Col>
        </Row>
 
 

  
 <center>
   <Button varient="" className='btn btn-success btn-lg mt-5 '>Send Message</Button>
 </center>
 </Form>
 
</Container>
  )
}

export default Licence
