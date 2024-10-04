import React from 'react'
import { Form, Button, FormLabel } from 'react-bootstrap'


const ComplainForm = () => {
  return (
    <div>
         <Form className='form mt-5 mb-5'>
            <h4 className='text-success'>Your Complaint/Feedback/Suggestion
            </h4>
            
      
            <Form.Label htmlFor="inputPassword5"></Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        className='mb-3'
        placeholder='Name'
        aria-describedby="passwordHelpBlock"
      />
      
      <Form.Label htmlFor="inputPassword5"></Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        className='mb-3'
        placeholder='Subject'
        aria-describedby="passwordHelpBlock"
      />
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" placeholder='Enter Your Complaint/Feedback/Suggestion' rows={3} />
      </Form.Group>
       
      <center>
        <Button varient="" className='btn btn-success btn-lg '>Send Message</Button>
      </center>
      </Form>
      
    </div>
  )
}

export default ComplainForm
