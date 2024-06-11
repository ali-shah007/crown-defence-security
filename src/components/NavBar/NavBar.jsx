import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className='flex flex-col z-20'>
      <div className={`lg:hidden flex w-full h-[120px] bg-black text-white`}>
        <div className='flex w-[65vw] h-[120px] mx-auto px-4'>
          <div className='flex justify-center items-center w-full'>
            <NavLink to='/'>
              <img
                className='w-[286px] h-[102px] hover:scale-105 duration-200 rounded-lg'
                src={logo}
                alt='logo'
              />
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className={`flex w-full h-[102px] bg-black ${scrollPosition > 0 ? 'bg-black' : 'lg:bg-transparent'} text-white lg:fixed z-10 backdrop-blur-3xl border-b border-white`}
      >
        <div className='hidden lg:flex justify-end items-center pr-5 w-1/3 border-r border-white'>
          <NavLink to='/'>
            <img
              className='w-[200px] h-auto hover:scale-105 duration-200 rounded-lg'
              src={logo}
              alt='logo'
            />
          </NavLink>
        </div>
        <div className='flex w-[100vw] lg:w-2/3 text-white mx-auto px-4 justify-center items-center'>
          <ul className='flex gap-6 lg:gap-20 text-base capitalize font-bold'>
            {data.map(({ id, title, tolink }) => (
              <NavLink
                to={tolink}
                key={id}
                className={({ isActive }) =>
                  `cursor-pointer hover:scale-105 duration-200 lg:hover:text-black lg:p-2 lg:rounded lg:hover:bg-white  ${
                    isActive ? 'bg-[#c6af6b] text-white lg:p-2 p-1 rounded' : ''
                  }`
                }
              >
                {title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
