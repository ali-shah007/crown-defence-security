import React from 'react';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom'

function NavBar() {
  const data=[
    {
      title: 'Home',
      tolink: '/',
      id : 1,
      
    },
    {
      title: 'About',
      tolink: '/about',
      id : 2,
      
    },
    // {
    //   title: 'Guards',
    //   tolink: '/guards',
    //   id : 3,
      
    // },
    // {
    //   title: 'Mobile Security',
    //   tolink: '/mobile-security',
    //   id : 4,
      
    // },
    // {
    //   title: 'Site Detection',
    //   tolink: '/site-detection',
    //   id : 5,
      
    // },
    {
      title: 'Services',
      tolink: '/services',
      id : 6,
      
    },
    {
      title: 'Contact',
      tolink: '/contact',
      id : 7,
      
    },

  ]
  return (
    <div className='flex flex-col'>
 <div className='flex w-full h-[120px] bg-black text-white'>
      <div className='flex w-[65vw] h-[120px] mx-auto px-4'>
        <div className='hidden lg:flex flex-col items-start text-base font-bold mt-3'>
          <h2 className='whitespace-nowrap'>24/7 Control Room: <span className='text-[#c6af6b]'>0300 373 0834</span></h2>
          <h2 className='whitespace-nowrap'>Email: <span className='text-[#c6af6b]'>info@flagsecuritygroup.co.uk</span></h2>
        </div>
        <div className='flex justify-center items-center w-full '>
          <img className='w-[286px] h-[102px]' src={logo} alt='logo' />
        </div>
        <div className='hidden lg:block w-[300px]'></div>
        {/* Placeholder for alignment */}
      </div>
      
    </div>
    <div className=' w-full h-[90px]  bg-black text-white'>
    <div className='flex w-[95vw] lg:w-[70vw] h-[90px]  bg-black text-white mx-auto px-4 justify-center items-center'>
          <ul className='flex gap-10 lg:gap-20 text-base capitalize font-bold '>
            {data.map(({id,title,tolink})=>(
              <Link to={tolink} key={id} className='cursor-pointer hover:scale-105 duration-200 hover:text-[#c6af6b]'>{title}</Link>
            ))}
          </ul>
      </div>
    </div>
    
    </div>
    
   
  );
}

export default NavBar;
