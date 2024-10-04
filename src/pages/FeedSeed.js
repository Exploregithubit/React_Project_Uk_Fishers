import React from 'react'
import { Container } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import seed1 from '../assets/img/seed1.png'
import feed1 from '../assets/img/feed1.png'

const FeedSeed = () => {
  return (
    <Container fluid>
      <Row className='content'>
    
  
    <Col md={4} className=''> 
         <h1>Feed & Seed</h1>
        <p><strong>For sustainable and profitable fish farming, quality fish seed of the candidate species in adequate quantity is one of the most important factoRs. The production of marketable fish begins with stocking of Fingerlings into a culture pond that ensures optimum and rapid growth to allow harvest in the shortest time.
   Farmer has to stock adequate number of seeds for better results. Farmers must stock fingerlings of minimum of 70 MM size and stocking density of 10,000 fingerlings per hectare of pond. Department of Fisheries Uttrakhand provide seeds of six carp varieties from its Fish seed Hatcheries/Farms situated at district Udhamsingh Nagar and Dehradun and also from different fish rearing units established through different schemes.
  
  Department also facilitates farmers of the state to provide seeds of Amur and Pangasius Species from other sources. Department is also promoting Tilapia culture in controlled environment.</strong></p>
    </Col>
    
  
  
  <Col md={8} className="">
  <Row>
    <Col><Card className=' mt-3 mb-3' >
        <Card.Img variant="top" className='fish2' src={seed1} />
        <strong>Seed Quality</strong>
       <p>For sustainable and profitable fish farming, Quality fish seed must be Used.</p>
      
      </Card></Col>
      <Col>
      <Card className=' mt-3 mb-3' >
       <Card.Img variant="top" className='fish2' src={feed1} />
       <strong>Seed Quality</strong>
      <p>For sustainable and profitable fish farming, Quality fish seed must be Used.</p>
     
     </Card>
  
      </Col>
  
     
  </Row>
  <Row>
    <Col><Card className=' mt-3' >
       <Card.Img variant="top" className='fish2' src={feed1} />
       <strong>Seed Quality</strong>
      <p>For sustainable and profitable fish farming, Quality fish seed must be Used.</p>
     
     </Card> </Col>
     <Col><Card className=' mt-3' >
       <Card.Img variant="top" className='fish2' src={feed1} />
       <strong>Seed Quality</strong>
      <p>For sustainable and profitable fish farming, Quality fish seed must be Used.</p>
     
     </Card> </Col>
  
  
  
  </Row>
   </Col>
  </Row>
   
 </Container>
  )
}

export default FeedSeed
