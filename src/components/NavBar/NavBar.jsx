import React from 'react';
import logo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
  const data = [
    {
      title: 'Home',
      tolink: '/',
      id: 1,
    },
    {
      title: 'About',
      tolink: '/about',
      id: 2,
    },
    {
      title: 'Services',
      tolink: '/services',
      id: 6,
    },
    {
      title: 'Contact',
      tolink: '/contact',
      id: 7,
    },
  ];

  return (
    <div className='flex flex-col z-10'>
      <div className='lg:hidden flex w-full h-[120px] bg-black text-white'>
        <div className='flex w-[65vw] h-[120px] mx-auto px-4'>
          <div className='flex justify-center items-center w-full'>
            <img className='w-[286px] h-[102px]' src={logo} alt='logo' />
          </div>
        </div>
      </div>
      <div className='flex w-full h-[102px] bg-black lg:bg-transparent text-white lg:fixed z-10 backdrop-blur-3xl border-b border-white'>
        <div className='flex justify-end items-center pr-5 w-1/3 border-r border-white'>
          <Link to='/'><img className='w-[200px] h-auto hover:scale-105 duration-200 rounded-lg' src={logo} alt='logo' /></Link>
        </div>
        <div className='flex w-[100vw] lg:w-2/3 text-white mx-auto px-4 justify-center items-center'>
          <ul className='flex gap-10 lg:gap-20 text-base capitalize font-bold'>
            {data.map(({ id, title, tolink }) => (
              <Link to={tolink} key={id} className='cursor-pointer hover:scale-105 duration-200 hover:text-[#c6af6b]'>
                {title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
