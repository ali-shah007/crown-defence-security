import React from 'react';
import { FaEye } from "react-icons/fa";
import { BiSolidTorch } from "react-icons/bi";
import { BiSolidCctv } from "react-icons/bi";
// import { IoIosKey } from "react-icons/io";
import { FaRoadBarrier } from "react-icons/fa6";
import { SiPrivateinternetaccess } from "react-icons/si";
import cctv from '../../assets/cctv.png'
import './Services.css'; // Import the custom CSS file

function Services() {
  return (
    <div className='flex w-full h-auto pb-20 bg-brand-color justify-center items-center'>
      <div className='flex w-[80vw] -mt-10 bg-white h-full py-20'>
        <div className='flex flex-col w-[60vw] mx-auto gap-10'>
          <div className='text-center text-4xl'>
            <h1 className=' font-semibold'>Professional Security Services</h1>
          </div>
          <div>
            <p className='text-base text-center'>
              Many people feel they cannot afford to employ a security services company to protect their investment as they feel that security is a non-productive area, however, in the society we now find ourselves living in, unfortunately it must be viewed as a necessity. In this time of ever increasing crime it makes sound financial sense to make the right decisions regarding your site security needs now.
            </p>
          </div>
          <div className='flex flex-col gap-20 pb-20'>
            <div className='flex md:flex-row flex-col  justify-between py-10 gap-14 md:gap-0'>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <FaEye className=' text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  CCTV Systems and Monitoring
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Advanced Wired and Wireless CCTV security systems for homes, commercial buildings, construction sites, plant and machinery.</p>
                <button className='mt-4 py-2 px-4 bg-brand-color text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <BiSolidTorch className='text-blue-500 text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  CCTV Systems and Monitoring
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Advanced Wired and Wireless CCTV security systems for homes, commercial buildings, construction sites, plant and machinery.</p>
                <button className='mt-4 py-2 px-4 bg-brand-color text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <BiSolidCctv className='text-red-500 text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  CCTV Systems and Monitoring
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Advanced Wired and Wireless CCTV security systems for homes, commercial buildings, construction sites, plant and machinery.</p>
                <button className='mt-4 py-2 px-4 bg-brand-color text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
            </div>
            {/* 2nd row */}
            <div className='flex md:flex-row flex-col justify-between gap-14 md:gap-0'>
            <div className='flex flex-col items-center text-center md:w-1/3 group md:-mt-7 -mt-12 '>
                {/* <IoIosKey className='text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' /> */}
                <img src={cctv} alt="cctv"  className=' w-[100px] h-auto mb-1 transition-transform transform group-hover:scale-110 cursor-pointer'/>
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  CCTV Systems and Monitoring
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Advanced Wired and Wireless CCTV security systems for homes, commercial buildings, construction sites, plant and machinery.</p>
                <button className='mt-4 py-2 px-4 bg-brand-color text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <FaRoadBarrier className='text-brand-color text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  CCTV Systems and Monitoring
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Advanced Wired and Wireless CCTV security systems for homes, commercial buildings, construction sites, plant and machinery.</p>
                <button className='mt-4 py-2 px-4 bg-brand-color text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <SiPrivateinternetaccess className='text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  CCTV Systems and Monitoring
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Advanced Wired and Wireless CCTV security systems for homes, commercial buildings, construction sites, plant and machinery.</p>
                <button className='mt-4 py-2 px-4 bg-brand-color text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
