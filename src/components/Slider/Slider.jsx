import React, { useState } from 'react';

import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

    const prevSlide =() => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide-1)
    };
    const nextSlide =() => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide+1)
    };

    return (
        <div className=' relative overflow-x-hidden'>
             <div className='w-[150vw] h-[50vh]  flex transition-all duration-1000' style={{transform: `translateX(-${currentSlide * 50}vw)`}}>
            <img className='w-[50vw] h-[50vh]  object-cover object-center' src={data[0]} alt='hero'/>
            <img className='w-[50vw] h-[50vh] object-cover object-center' src={data[1]} alt='hero'/>
            <img className='w-[50vw] h-[50vh] object-cover object-center' src={data[2]} alt='hero'/>
        </div>
        <div className='flex absolute right-0 left-0 bottom-[100px] mx-auto w-[100px] gap-3'>
            <div >
            <IoIosArrowDropleft className='w-16 h-16 border-2 border-gray-500 text-gray-800 flex justify-center items-center cursor-pointer' onClick={prevSlide} />
            </div >
            <div >
            <IoIosArrowDropright className='w-16 h-16 border-2 border-gray-500 text-gray-800 flex justify-center items-center cursor-pointer' onClick={nextSlide}/>
            </div>
        </div>
       
        </div>
       
    );
}

export default Slider;
