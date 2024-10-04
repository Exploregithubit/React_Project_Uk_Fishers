import React from 'react'
import { Form, Button,  Container } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import './Registration.css'

const Registration = () => {
  return (
    <Container>
        <Row  className='heads'>
       <h2 className='text-white'>Department of Fishery
      </h2>
      <span>(Uttarakhand)</span>
     

     

    </Row>
       <center> <Form className='form-control mt-5 '>
       <h4 className='text-success'>Registration Form | पंजीकरण फॉर्म
       </h4>
       <Row>
            <Col md={6}>
       <Form.Label htmlFor="inputName5">Group/Farmer Name | समूह का नाम</Form.Label>
 <Form.Control
   type="password"
   id="inputPassword5"
   className='mb-3'
   placeholder='Enter User Name'
   aria-describedby="passwordHelpBlock"
 />
 
 <Form.Label htmlFor="inputPassword5">Mobile No. | मोबाइल नंबर</Form.Label>
 <Form.Control
   type="number"
   id="inputPassword5"
   className='mb-3'
   placeholder='Mobile No.'
   aria-describedby="passwordHelpBlock"
 />
  District name | जनपद का नाम:<Form.Select aria-label="Default select example">
      <option>District Name</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select> </Col>
 <Col md={6}>  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   <Form.Label></Form.Label>
   <Form.Control type="email" placeholder="Enter Your Email" />
 </Form.Group>
 <Form.Label htmlFor="inputPassword5">Adhar Number | आधार नंबर</Form.Label>
 <Form.Control
   type="number"
   id="inputPassword5"
   className='mb-3'
   placeholder='Aadhar No.'
   aria-describedby="passwordHelpBlock"
 />
 
 Block Name | ब्लॉक का नाम<Form.Select aria-label="Default select example">
      <option>Choose District to show Block Names</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select></Col>
        </Row>
 
 

  
 <center>
   <Button varient="" className='btn btn-success btn-lg mt-5 '>Register Now | पंजीकरण करें</Button>
 </center>
 </Form> </center>
   
 
</Container>
  )
}

export default Registration
