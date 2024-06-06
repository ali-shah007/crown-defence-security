import React from 'react';
import logo from '../assets/logo.jpg'
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

function LoadScreen() {
  return (
    <div>
        <NavBar/>
<div className="loading-screen ">
      <div className="logo "><img className='w-[500px] h-auto' src={logo} alt='logo'/></div>
      <div className="spinner"></div>
      <p>Loading...</p>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}

export default LoadScreen;
