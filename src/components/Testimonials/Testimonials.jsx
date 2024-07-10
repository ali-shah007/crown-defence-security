import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.jpg'
import 'tailwindcss/tailwind.css';

const testimonials = [
  {
    name: 'Lara Smith',
    title: 'CEO, Zoma',
    quote: 'The security services provided have been exceptional. Their guards are always professional and courteous.',
    image: client1,
  },
  {
    name: 'Sidharth Anand',
    title: 'Manager, Brickleys',
    quote: 'We have been extremely satisfied with the security services. The team is reliable and responsive.',
    image: client2,
  },
  {
    name: 'Alice Johnson',
    title: 'Director, Burrack Constructors',
    quote: 'Excellent security services! Highly recommend for any business looking for professional security solutions.',
    image: client3,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setDirection('next');
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const slideIn = useSpring({
    from: {
      transform: direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)',
      opacity: 0,
    },
    to: {
      transform: 'translateX(0%)',
      opacity: 1,
    },
  });

  const slideOut = useSpring({
    from: {
      transform: 'translateX(0%)',
      opacity: 1,
    },
    to: {
      transform: direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)',
      opacity: 0,
    },
    config: { duration: 500 },
  });

  return (
    <div className="relative w-full h-[400px] max-w-screen-lg mx-auto mt-10 px-4 justify-center items-center py-20">
        
      <animated.div style={slideIn} className=" h-[200px] inset-0 flex flex-col items-center justify-center  bg-gray-100 rounded-lg p-6 md:p-8 shadow-lg">
      <h2 className='lg:text-6xl md:text-4xl text-2xl font-bold text-[#333] max-w-screen-lg mb-4'>What Our Clients say</h2>
        <img src={testimonials[index].image} alt={testimonials[index].name} className="rounded-full mb-4 w-20 h-20 md:w-24 md:h-24 object-cover object-center" />
        <h3 className="text-lg md:text-xl font-semibold mb-2">{testimonials[index].name}</h3>
        <h4 className="text-sm md:text-md text-gray-600 mb-4">{testimonials[index].title}</h4>
        <p className="text-gray-700 text-sm md:text-base">{testimonials[index].quote}</p>
      </animated.div>
      <animated.div style={slideOut} className="absolute inset-0"></animated.div>
      <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 md:p-3 rounded-full hover:bg-gray-900 focus:outline-none">‹</button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 md:p-3 rounded-full hover:bg-gray-900 focus:outline-none">›</button>
    </div>
  );
};

export default Testimonials;
