import React from 'react'
import {Container } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import g2 from '../assets/img/g2.jpg'
 import g4 from '../assets/img/g4.jpg'
 import g7 from '../assets/img/g7.jpg'
 import g10 from '../assets/img/g10.jpg'
 import g11 from '../assets/img/g11.jpg'
import h8 from '../assets/img/h8.jpg'
import seedBg from '../assets/img/seed-bg.jpg'; 
import fish3 from '../assets/img/fish3.jpg'

const Hatchery = () => {
  return (
    <Container fluid>
        <Row >
    <h3>Fish Farm & Hatchery</h3>
    <p>Fish farming or pisciculture involves commercial breeding of fish, usually for food, in fish tanks or artificial enclosures such as fish ponds. It is a particular type of aquaculture, which is the controlled cultivation and harvesting of aquatic animals such as fish, crustaceans, molluscs and so on, in natural or pseudo-natural environment.


</p>
<Col md={3} className='new-container3'>
    
       <img variant="top" className='fish1 mt-3' src={fish3} />
       
       </Col>
      

       <Col md={3} className='new-container3'>
      
       <img variant="top" className=' fish1 mt-3' src={h8} />
       
       </Col>

       <Col md={3}className='new-container3'>
      
       <img variant="top" className='fish1 mt-3' src={g2} />
       
       
       </Col>

       <Col md={3}className='new-container3'>
   <img variant="top" className='fish1 mt-3' src={g4} />
       
       
       </Col>
       <Row>
       <Col md={3}className='new-container3'>
    
       <img variant="top" className='fish1 mt-3' src={seedBg} />
      
       </Col>
      

       <Col md={3}className='new-container3'>
       
       <img variant="top" className=' fish1 mt-3' src={g7} />
       
       </Col>

       <Col md={3}className='new-container3'>
      
       <img variant="top" className='fish1 mt-3' src={g10} />
      
       </Col>

       <Col md={3}className='new-container3'>
       
       <img variant="top" className='fish1 mt-3' src={g11} />
     
       </Col>
       </Row>
    </Row>
      
    </Container>
  )
}

export default Hatchery
