// src/Brochure.js
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './Brochure.css';

const Brochure = () => {
  return (
    <div className="hidden lg:flex brochure-container">
      <HTMLFlipBook width={500} height={600} showCover={true}>
        <div className="demoPage">
        <img className=' w-full h-full object-cover' src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Description" />
        </div>
        <div className="demoPage">
          <img className=' w-full h-full object-cover' src="https://images.pexels.com/photos/96612/pexels-photo-96612.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Description" />
          
        </div>
        <div className="demoPage">
        <img className=' w-full h-full object-cover' src="https://images.pexels.com/photos/1119152/pexels-photo-1119152.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Description" />
        </div>
        <div className="demoPage">
        <img className=' w-full h-full object-cover' src="https://images.pexels.com/photos/68798/pexels-photo-68798.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Description" />
        </div>
        {/* Add more pages as needed */}
      </HTMLFlipBook>
    </div>
  );
};

export default Brochure;
