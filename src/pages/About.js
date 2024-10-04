import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row, Col, Card, Button } from 'react-bootstrap';



function About() {
  return (
    <Container fluid>
        <h3>About Us</h3>
      <p>Fishing is the activity of trying to catch fish. Fish are normally caught in the wild. Techniques for catching fish include hand, gathering,spearing, netting, angling and trapping.Fishing may include catching aquatic animals other than fish also. Fisheries and aquaculture not provides fish only as a food option but it also provides direct and indirect employment opportunities in the state.

The Department of Fisheries is carrying out various schemes for development of fisheries in the state. In the recent years, a large no. of people have been engaged in aquaculture & allied activities.</p>
<Row className="cards">
    <Col md={4}>
    <h2 className='mt-5'>What does Department of Fisheries, Uttarakhand do ???</h2>
    <p>The Main aim of Department is developing and Promoting business of fisheries in the State by providing services and basic needs to the farmers who are linked with us</p>
   
    <Button variant="primary">Learn More..</Button>
   </Col>
   
   <Col md={2} className='card2'>
   <Card className='card-control mt-5' style={{ width: '15rem'  }}>
     
      <Card.Body>
        <Card.Title>Our Objectives</Card.Title>
        <Card.Text>
      <p>Increasing the production of fishes.
Providing Training in fisheries.
Betterment of ponds in Uttarakhand.
Providing Protein Diet in Different Areas.</p>  
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col md={2} className='card2'>
   <Card className='card-control mt-5' style={{ width: '15rem'  }}>
      {/* <Card.Img variant="top" className='mt-3' src={fish3} /> */}
      <Card.Body>
        <Card.Title>Our Objectives</Card.Title>
        <Card.Text>
      <p>Increasing the production of fishes.
Providing Training in fisheries.
Betterment of ponds in Uttarakhand.
Providing Protein Diet in Different Areas.</p>  
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col md={2} className='card2'>
   <Card className='card-control mt-5 mb-5' style={{ width: '15rem'  }}>
      {/* <Card.Img variant="top" className='mt-3' src={fish3} /> */}
      <Card.Body>
        <Card.Title>Our Objectives</Card.Title>
        <Card.Text>
      <p>Increasing the production of fishes.
Providing Training in fisheries.
Betterment of ponds in Uttarakhand.
Providing Protein Diet in Different Areas.</p>  
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row></Container>
  )
}

export default About
