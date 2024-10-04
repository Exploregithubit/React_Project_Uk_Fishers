
import './App.css';
import Navv from './components/navv';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
 import About from './pages/About';
 import Login from './components/Login';
import Footer from './pages/Footer';
import FeedSeed from './pages/FeedSeed';
import Hatchery from './pages/Hatchery';
import ComplainForm from './components/ComplainForm';
import Licence from './pages/Licence';
import Registration from './pages/Registration';
 




function App() {
  return (
    <div className='App'>
       <Router>
    <Navv />

   
    <Routes>
      <Route path="/" element={<HomePage/>} />
       <Route path="/About" element={<About />} /> 
       <Route path="/FeedSeed" element={<FeedSeed />} />
       <Route path="/Hatchery" element={<Hatchery />} /> 
       
       <Route path='/ComplainForm' element={<ComplainForm/>}/>
       <Route path='/Licence' element={<Licence/>}/>
       <Route path="/Login" element={<Login />} /> 
       <Route path='/Registration' element={<Registration/>}/>
      
      
    </Routes>
  </Router>

   <Footer/>
    
    
    


    </div>
   

  );
}

export default App;
