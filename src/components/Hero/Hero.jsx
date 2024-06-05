import React from 'react';
import heroimg from '../../assets/heroimg.jpg';

function Hero() {
  return (
    <div
      className='w-full h-[100vh] bg-cover bg-center bg-fixed'
      style={{ backgroundImage: `url(${heroimg})` }}
    >
    </div>
  );
}

export default Hero;
