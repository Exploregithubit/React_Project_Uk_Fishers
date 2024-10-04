import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Login.css';



const Login = () => {
  return (
   <Container >
    <Row  className='heads'>
      <h2 className=''>Department of Fishery
      </h2>
      <span className=''>(Uttarakhand)</span>
       
  </Row>
  <a href="" className=' btn btn-info'>Go Back</a>
    <Row>
      <h5 className='text-info'> Choose Login type to Proceed</h5>
      
      
      <Col className='mb-5 mt-5'>
    <Form className='form-control mt-5 mb-5'>

    {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Director Login"
            className='btn-list'
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="DDF Login(Region)"
            className='btn-list'
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            name="group1"
            label="AD Login(District) "
            className='btn-list'
            type={type}
            id={`inline-${type}-3`}
          />
          <br/>
          <Form.Check
            inline
            label="Inspector Login"
            className='btn-list'
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            name="group1"
            className='btn-list'
            label="Farmer Login "
            type={type}
            id={`inline-${type}-3`}
          />
           <Form.Check
            inline
            name="group1"
            label="Finance Login "
               className='btn-list'
            type={type}
            id={`inline-${type}-3`}
          />


        </div>
      ))}
       

            <h4 className='text-success'>Director login
            </h4>
        <Form.Label htmlFor="inputPassword5"></Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        className='mb-3'
        placeholder='Password'
        aria-describedby="passwordHelpBlock"
      />
        <Form.Select aria-label="Default select example" className='field-control'>
      <option>choose Director</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        
        <Form.Label htmlFor="catpcha"></Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        className='mb-3'
        placeholder='Enter 6 digit Catpcha'
        aria-describedby="passwordHelpBlock"
      />
      <center>
        <Button varient="" className='btn btn-success '>Proceed</Button>
      </center>
      </Form>
        
  
            </Col>
        
    </Row>
   </Container>
  )
}

export default Login
