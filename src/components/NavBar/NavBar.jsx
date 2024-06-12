import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      title: 'Brochure',
      tolink: '/brochure',
      id: 3,
    },
    {
      title: 'Services',
      tolink: '/services',
      id: 4,
    },
    {
      title: 'Contact',
      tolink: '/contact',
      id: 5,
    },
  ];

  return (
    <div className='flex flex-col z-20'>
      <div
        className={`flex w-full h-[102px] bg-black ${
          scrollPosition > 0 ? 'bg-black' : 'lg:bg-transparent'
        } text-white fixed z-10 backdrop-blur-3xl border-b border-white`}
      >
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <div className='flex justify-center lg:justify-end items-center pr-5 w-1/2 lg:w-1/3 lg:border-r lg:border-white z-20'>
          <NavLink to='/'>
            <img
              className='w-[150px] lg:w-[200px] h-auto hover:scale-105 duration-200 rounded-lg'
              src={logo}
              alt='logo'
            />
          </NavLink>
        </div>
        <div className='hidden lg:flex w-2/3 text-white mx-auto px-4 justify-center items-center z-20'>
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
        <div className='lg:hidden flex w-1/2 justify-end items-center pr-5 z-20'>
          <button
            className='text-white focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-1/2 bg-black text-white p-4 z-30 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className='text-white mb-4 focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            ></path>
          </svg>
        </button>
        <ul className='flex flex-col gap-6 text-base capitalize font-bold'>
          {data.map(({ id, title, tolink }) => (
            <NavLink
              to={tolink}
              key={id}
              className={({ isActive }) =>
                `cursor-pointer hover:scale-105 duration-200 ${
                  isActive ? 'bg-[#c6af6b] text-white p-1 rounded' : ''
                }`
              }
              onClick={toggleMenu} // Close the menu on link click
            >
              {title}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
