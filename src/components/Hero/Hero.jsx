import React, { useState, useEffect } from 'react';
import heroimg from '../../assets/bghero.jpg';
import Forms from '../Forms/Forms';
import cam from '../../assets/camera.png';
import keys from '../../assets/keys.png';
import vest from '../../assets/vest.png';
import classNames from 'classnames';
import './Hero.css';

function Hero() {
  const images = [keys, cam, vest];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className='w-full h-[400px] md:h-[600px] lg:h-[85vh] bg-cover bg-center bg-fixed relative flex items-end md:items-center justify-between'
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 bg-black opacity-40'></div>

      <div className='w-1/2 hidden justify-center  relative'>
        <Forms />
      </div>
      
      <div className=' flex lg:w-1/2 w-2/5 flex-col justify-center pb-10 md:pt-10 md:pb-0 relative pl-5 lg:pl-10 gap-3 lg:gap-8'>
        <h1 className='text-white text-2xl md:text-3xl lg:text-6xl font-bold mb-4 animate-slideUp'>Hire Now the best Security at affordable price</h1>
        <button
          className='lg:w-1/2 bg-brand-color text-base md:text-xl lg:text-4xl text-gray-900 font-semibold lg:py-4 py-2 px-4 rounded-md hover:bg-opacity-70 transition-all duration-200 ease-in-out animate-slideUp'
          style={{ animationDuration: '3000ms' }}
        >
          Get Free Quote
        </button>
      </div>

      <div className='flex lg:w-1/2 w-3/5 justify-center items-end relative h-full overflow-hidden'>
        {images.map((img, index) => (
          <img
            key={index}
            className={classNames(
              'lg:w-[600px] w-full h-auto absolute bottom-0 transition-all duration-1000 ease-in-out',
              {
                'opacity-0': currentImage !== index,
                'opacity-100 animate-slideUp': currentImage === index,
              }
            )}
            src={img}
            alt='security'
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
