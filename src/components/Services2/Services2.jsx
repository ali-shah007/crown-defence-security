import React from 'react';
import bg from '../../assets/bghero.webp';
import { Link } from 'react-router-dom';

function Services2() {
  return (
    <div className='flex flex-col'>
      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={bg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Image Heading</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-[#343A40] lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>Heading</h1>
            <p className='text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam omnis ea dolore qui unde esse! Quo maiores hic autem rem facilis? Voluptatibus sunt molestias perspiciatis iste earum laborum nemo!</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row-reverse justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={bg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Image Heading</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-primary lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-[#333] mb-6'>Heading</h1>
            <p className='text-[#333] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam omnis ea dolore qui unde esse! Quo maiores hic autem rem facilis? Voluptatibus sunt molestias perspiciatis iste earum laborum nemo!</p>
            <Link to='/' className='text-white bg-[#333] px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={bg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Image Heading</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-gray-900 lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>Heading</h1>
            <p className='text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam omnis ea dolore qui unde esse! Quo maiores hic autem rem facilis? Voluptatibus sunt molestias perspiciatis iste earum laborum nemo!</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row-reverse justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={bg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Image Heading</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-white lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-[#333] mb-6'>Heading</h1>
            <p className='text-[#333] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam omnis ea dolore qui unde esse! Quo maiores hic autem rem facilis? Voluptatibus sunt molestias perspiciatis iste earum laborum nemo!</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={bg}
              alt='' 
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Image Heading</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-[#343A40] lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>Heading</h1>
            <p className='text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam omnis ea dolore qui unde esse! Quo maiores hic autem rem facilis? Voluptatibus sunt molestias perspiciatis iste earum laborum nemo!</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row-reverse justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={bg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Image Heading</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-primary lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-[#333] mb-6'>Heading</h1>
            <p className='text-[#333] mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam omnis ea dolore qui unde esse! Quo maiores hic autem rem facilis? Voluptatibus sunt molestias perspiciatis iste earum laborum nemo!</p>
            <Link to='/' className='text-white bg-[#333] px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={bg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Image Heading</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-gray-900 lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>Heading</h1>
            <p className='text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veniam omnis ea dolore qui unde esse! Quo maiores hic autem rem facilis? Voluptatibus sunt molestias perspiciatis iste earum laborum nemo!</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services2;
