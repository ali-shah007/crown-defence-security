import React from 'react';
import { useInView } from 'react-intersection-observer';
import Slider from '../Slider/Slider';
import './Featured.css'


function Featured() {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Percentage of the element visibility to trigger the animation
  });

  const { ref: sliderRef, inView: sliderInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='w-full bg-black'>
      <div className='flex flex-col gap-10 w-[95vw] h-auto text-white justify-center items-center'>
        <div
          ref={textRef}
          className={`text-4xl lg:text-6xl font-semibold mt-12 transition-transform duration-1000 ${
            textInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Featured Services
        </div>
        <div
          ref={sliderRef}
          className={`flex w-[80vw] h-[70vh] lg:w-[50vw] lg:h-[50vh] transition-transform duration-1000 ${
            sliderInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default Featured;
