import React, { useState, useEffect } from 'react';
import logo from '../../assets/security-logo.png';
import { NavLink } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

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
        className={`flex w-full h-[102px] bg-black justify-between ${
          scrollPosition > 0 ? 'bg-black' : 'lg:bg-transparent'
        } text-white fixed z-10 backdrop-blur-3xl border-b border-white`}
      >
        <div className='absolute inset-0 bg-black opacity-30'></div>
        <div className='lg:hidden flex justify-end items-center z-10 pl-5'>
          <a
            href='tel:+1234567890'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaPhoneAlt className='text-2xl' />
          </a>
        </div>
        <div className='flex justify-center lg:justify-end items-center pr-5 lg:w-1/3 lg:border-r lg:border-white z-20'>
          <div className='hidden lg:flex justify-start items-center z-10 pr-5 hover:scale-105 duration-200 hover:text-brand-color'>
            <a
              href='tel:+1234567890'
              style={{
                color: 'inherit',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <FaPhoneAlt className='text-2xl lg:text-4xl' />
            </a>
          </div>
          <NavLink to='/'>
            <img
              className='w-[200px] lg:w-[200px] h-auto hover:scale-105 duration-200 rounded-lg'
              src={logo}
              alt='logo'
            />
          </NavLink>
        </div>
        <div className='hidden lg:flex  text-white mx-auto px-4 justify-center items-center z-20'>
          <ul className='flex lg:gap-10 text-base capitalize font-bold'>
            {data.map(({ id, title, tolink }) => (
              <NavLink
                to={tolink}
                key={id}
                className={({ isActive }) =>
                  `cursor-pointer hover:scale-105 duration-200 lg:hover:text-black lg:p-2 lg:rounded lg:hover:bg-white ${
                    isActive
                      ? 'bg-[#c6af6b] text-white lg:p-2 p-1 rounded'
                      : ''
                  }`
                }
              >
                {title}
              </NavLink>
            ))}
          </ul>
          <div className='flex items-center z-10 pl-20 hover:scale-105 duration-200 '>
            <a
              href='mailto:info@crowndefencesecurity.co.uk'
              className='flex items-center text-white no-underline hover:text-brand-color duration-200'
            >
              <IoIosMail className='text-2xl lg:text-4xl' />
              <span className='hidden lg:block ml-2 text-nowrap'>Email Us</span>
            </a>
          </div>
        </div>
        <div className='lg:hidden flex justify-end items-center pr-5 z-20'>
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

        {/* <div className='flex items-center mt-6'>
          <a
            href='mailto:info@example.com'
            className='flex items-center text-white no-underline hover:text-brand-color duration-200'
          >
            <IoIosMail className='text-2xl' />
            <span className='ml-2'>Email Us</span>
          </a>
        </div> */}
        <div className='mt-5'>
        <div className='mt-auto pt-6 border-t border-gray-600'>
          <h3 className='text-xl font-bold mb-4'>Get in Touch</h3>
          <div className='flex flex-col gap-4'>
            <a
              href='tel:+1234567890'
              className='flex items-center text-white no-underline hover:text-brand-color duration-200'
            >
              <FaPhoneAlt className='text-xl mr-2' />
              <span>+1234567890</span>
            </a>
            <a
              href='mailto:info@crowndefencesecurity.co.uk'
              className='flex items-center text-white no-underline hover:text-brand-color duration-200'
            >
              <IoIosMail className='text-xl mr-2' />
              <span>Mail</span>
            </a>
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default NavBar;
