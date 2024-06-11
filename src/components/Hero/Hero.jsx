import React from 'react';
import heroimg from '../../assets/heroimg.jpg';
import Forms from '../Forms/Forms';

function Hero() {
 

  return (
    <div
      className='w-full h-[65vh] lg:h-[85vh] bg-cover bg-center bg-fixed flex items-center justify-start pl-20 pt-10'
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className='hidden lg:block'>
        <Forms/>
      </div>
      
      
    </div>
  );
}

export default Hero;
