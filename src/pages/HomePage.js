import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import seedBg from '../assets/img/seed-bg.jpg'; // Corrected import statement

import slider from '../assets/img/slider.jpg'; // Corrected import statement
import fishers from '../assets/img/fishers.jpg'
import fish3 from '../assets/img/fish3.jpg'
import fslogo from '../assets/img/fslogo.jpg'
import fish from '../assets/img/fish-rearing.jpg'
 import g2 from '../assets/img/g2.jpg'
 import g4 from '../assets/img/g4.jpg'
 import g7 from '../assets/img/g7.jpg'
 import g10 from '../assets/img/g10.jpg'
 import g11 from '../assets/img/g11.jpg'
import h8 from '../assets/img/h8.jpg'
import img3 from '../assets/img/img3.jpg'
import list from '../assets/img/list.jpg'
import image2 from '../assets/img/image2.jpg'
import farmer1 from '../assets/img/farmer1.jpg'
import farmer2 from '../assets/img/farmer2.jpg'
import farmer4 from '../assets/img/farmer4.jpg'
import farmer5 from '../assets/img/farmer5.jpg'
import seed1 from '../assets/img/seed1.png'
import feed1 from '../assets/img/feed1.png'
import feed2 from '../assets/img/feed2.png'
import ins from '../assets/img/ins.jpg'
import './HomePage.css';
import Container from 'react-bootstrap/Container';
import {Row,  Col  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

        
function HomePage() {
  return (
    <Container fluid>

      <Row>
        <Col md={3} className='About-list'>
        <ul>
          <h5 className='bg-dark' >About Us</h5>
          <img
        className="about-img "
         src={fslogo}
        alt="First slide"
      />

          <li className='mt-3' >
          <a variant="primary" > Our Objectives</a> </li>
          <li className=' mt-3'>  <a variant="primary"> Services Provided</a> </li>
          <li className='mt-3'><a variant="primary"> Our Motives</a></li>
          <li className=' mt-3'>  <a variant="primary"> Services Provided</a> </li>
          <li className='mt-3'><a variant="primary"> Our Motives</a></li>
          <li className=' mt-3'>  <a variant="primary"> Services Provided</a> </li>
         
          
        </ul>
        <Card className='card-control mb-5' style={{ width: '18rem'  }}>
       <Card.Img variant="top" className='' src={fish3} /> 
      <Card.Body>
        <Card.Title>Our Objectives</Card.Title>
        <Card.Text>
      <p>Increasing the production of fishes.
Providing Training in fisheries.
</p>  
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
</Col>
        <Col md={6}>
        <h4 className='heading'>Welcome To Official Website Of State Fishers Department Uttarakhand</h4>
       <Carousel data-bs-theme="dark" className='icon'>
    <Carousel.Item>
      <img
        className="img-control "
         src={seedBg}
        alt="First slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-control"
        src={slider}
        
        alt="Second slide"
      />
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-control"
        src={fishers}
        alt="Third slide"
      />
      <Carousel.Caption>
        
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-control"
        src={img3}
        alt="Third slide"
      />
      <Carousel.Caption>
        
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-control"
        src={image2}
        alt="Third slide"
      />
      <Carousel.Caption>
        
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-control"
        src={fishers}
        alt="Third slide"
      />
      <Carousel.Caption>
        
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <h5 className='heading1 mt-3'>Introduction</h5>
  <p className='mt-3'>Fishing is the activity of trying to catch fish. Fish are normally caught in the wild. Techniques for catching fish include hand, gathering,spearing, netting, angling and trapping.Fishing may include catching aquatic animals other than fish also. Fisheries and aquaculture not provides fish only as a food option but it also provides direct and indirect employment opportunities in the state.

The Department of Fisheries is carrying out various schemes for development of fisheries in the state. In the recent years, a large no. of people have been engaged in aquaculture & allied activities.

</p></Col>
  <Col md={3} sm={12}className='card-style'>
  
  <ul className='notice'>
 <li><h6>Notification</h6></li> 
    <p className=''> Some quick example text to build on the card title and make up the
    bulk of the card's content.</p>
    <a href="#">More anouncement</a>
    </ul>
    <ul className='notice mt-5'>
 <li><h6>Recent Updates</h6></li> 
    <p className=''> Some quick example text to build on the card title and make up the
    bulk of the card's content.</p>
    <a href="#">More anouncement</a>
    </ul>
    
    <Card className='card-control' style={{ width: '18rem' }}>
      <Card.Img variant="top" className='' src={fish3} />
      <Card.Body>
      <Card.Title>Our Objectives</Card.Title>
        <Card.Text>
      <p>Increasing the production of fishes.
Providing Training in fisheries.
</p>  
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

      </Row>
     
  <Row className="cards">
    <Col md={4}>
    <h2 className='mt-5'>What does Department of Fisheries, Uttarakhand do ???</h2>
    <p>The Main aim of Department is developing and Promoting business of fisheries in the State by providing services and basic needs to the farmers who are linked with us</p>
   
    <Button variant="primary">Learn More..</Button>
   </Col>
   
   <Col md={2} className='card2'>
   <Card className='card-control mt-5' style={{ width: '18rem'  }}>
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
   <Card className='card-control mt-5' style={{ width: '18rem'  }}>
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
   <Card className='card-control mt-5 mb-5' style={{ width: '18rem'  }}>
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
    <Row>
    
    <Col md={5}>
    <h2>Fisheries Resource of Uttarakhand mainly comprises of</h2>
    <p>Uttarakhand state is enriched with rivers of about length 2686 kms which provide a wide range of angling options in terms of destinations spanning throughout the state for sport fisheries. The rivers of Uttarakhand are rich in mahaseer & trout fishery.</p>
    
<Button variant="primary">Learn More..</Button>


</Col>
<Col md={7}>
<img variant="top" className='list mt-3 mb-3' src={list} />
</Col>

      
    </Row>

    
  </Row>
  <Container fluid>
  
    <h3 className='bg-transparent'>TOTAL FISHERMEN AND FISHERIES WORKER</h3>
    <Row className='heading10'>
    
    <h1>Become a farmer</h1>
    <p>
   <strong>Fisheries has been a key sector for employment in Uttarakhand. State Government has launched various schemes for the betterment of fishermen. Department of Fisheries is the concerned department for the Fisheries Scheme.</strong> 
    </p>
    <Button variant="primary">Register</Button>
    <Row> 
    <Col md={3}>
   
   <h2>6445</h2>
      <img variant="top" className='fish1 mt-3' src={slider} />
      <h5>Our Farmers</h5>
      </Col>
     

      <Col md={3}>
      <h2>6445</h2>
      <img variant="top" className=' fish1 mt-3' src={fish} />
      <h5>Fishes Breeds</h5>
      </Col>

      <Col md={3}>
      <h2>6445</h2>
      <img variant="top" className='img mt-3' src={fish3} />
      <h5>Fish Farm & hatcheries</h5>
      </Col>

      <Col md={3}>
      <h2>6445</h2>
      <img variant="top" className='fish1   mt-3' src={ins} />
      <h5>Inspectors and Senior Inspectors</h5>
      </Col>
</Row>
<Row>
<Col><Card className='card-layout mt-5 mb-5' >
          <h1>13806</h1>
     
      
        <Card.Title>Fisheries Stakeholders</Card.Title>
        <Card.Body>
        <Card.Text>
     
        </Card.Text>
       
      </Card.Body>
    </Card></Col>
    <Col><Card className='card-layout mt-5 mb-5' >
     
     <h1>8908</h1> 
     <Card.Title>Fisheries Stakeholders</Card.Title>
     <Card.Body>
     <Card.Text>
  
     </Card.Text>
    
   </Card.Body>
 </Card></Col>
 <Col><Card className='card-layout mt-5 mb-5' >
     
      <h1>26</h1>
     <Card.Title>Fisheries Stakeholders</Card.Title>
     <Card.Body>
     <Card.Text>
  
     </Card.Text>
    
   </Card.Body>
 </Card></Col>
 <Col><Card className='card-layout mt-5 mb-5' >
     
      <h1>149</h1>
     <Card.Title>Fisheries Stakeholders</Card.Title>
     <Card.Body>
     <Card.Text>
  
     </Card.Text>
    
   </Card.Body>
 </Card></Col>

</Row>
<Row>  
<Col><Card className='card-layout mt-5 mb-5'>
     
     <h1>5147</h1>
    <Card.Title>Fisheries Stakeholders</Card.Title>
    <Card.Body>
    <Card.Text>
 
    </Card.Text>
   
  </Card.Body>
</Card></Col>
<Col><Card className='card-layout mt-5 mb-5'>
    
     <h1>14</h1>
    <Card.Title>Fisheries Stakeholders</Card.Title>
    <Card.Body>
    <Card.Text>
 
    </Card.Text>
   
  </Card.Body>
</Card></Col>
<Col><Card className='card-layout mt-5 mb-5' >
    
     <h1>2</h1>
    <Card.Title>Fisheries Stakeholders</Card.Title>
    <Card.Body>
    <Card.Text>
 
    </Card.Text>
   
  </Card.Body>
</Card>

</Col>
<Col><Card className='card-layout mt-5 mb-5 ' >
    
     <h1>318</h1>
    <Card.Title>Fisheries Stakeholders</Card.Title>
    <Card.Body>
    <Card.Text>
 
    </Card.Text>
   
  </Card.Body>
</Card></Col>
 

</Row>

    </Row>
    </Container>
   
   
<Row>
<Card className='card-layout mb-5' >
     
      <h1>2</h1>
     <Card.Title>Fisheries Stakeholders</Card.Title>
     <Card.Body>
     <Card.Text>
  
     </Card.Text>
    
   </Card.Body>
 </Card>
 <Row>


       </Row>

      

  </Row>

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
    <Row >
      <h3 className=''>Our Farmers</h3>
     <p>Farmers from different parts of Uttarakhand are Welcome to Join us, Supporting the Farmers is our main Objective. Providing Assistance and Resources so that farmer and generate a healthy living.
     </p> 
     <Row className='new-container'>
      <Col md={3}> <Card className='card-control mt-3' style={{ width: '18rem'  }}>
      <Card.Img variant="top" className='card-img' src={farmer1} />
     <p><strong>Prakash Singh</strong></p>
     <span>Dwarahat</span>
    </Card></Col>
      <Col md={3}> <Card className='card-control mt-3' style={{ width: '18rem'  }}>
      <Card.Img variant="top" className='card-img' src={farmer4} />
     <p><strong>Harish Chandra</strong></p>
     <span>Joshimath</span>
    </Card></Col>
      <Col md={3}> <Card className='card-control mt-3' style={{ width: '18rem'  }}>
      <Card.Img variant="top" className='card-img' src={farmer2} />
      <p><strong>Ramesh singh </strong></p>
      <span>Sitarganj</span>
    </Card></Col>
    <Col md={3}> <Card className='card-control mt-3 mb-5' style={{ width: '18rem'  }}>
      <Card.Img variant="top" className='card-img' src={farmer5} />
      <p><strong>Pradeep singh negi</strong></p>
      <span>Joshimath</span>
    </Card></Col>
</Row>
          </Row>

  


    </Container>

    
   
  );
}

export default HomePage;
