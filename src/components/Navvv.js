import React from 'react';
import './App.css'; // Import your CSS file

const Navbar1 = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
    </ul>
  </nav>
);

const Navbar2 = () => (
  <nav className="navbar">
    <ul>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#support">Support</a></li>
    </ul>
  </nav>
);

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Navbar2 />
      <div className="content">
        <h1>Welcome to the website!</h1>
        {/* Other content can go here */}
      </div>
    </div>
  );
};

export default App;
