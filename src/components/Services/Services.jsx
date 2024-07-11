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
    <div className='relative flex w-full h-auto pb-20 bg-[#111825] justify-center items-center'>
      {/* <div className='absolute inset-0 bg-gray-900 opacity-80'></div> */}
      <div className='flex w-[80vw] -mt-10 bg-white h-full py-20 text-[#2c3e50]'>
        <div className='flex flex-col w-[60vw] mx-auto gap-10'>
          <div className='text-center text-4xl font-bold '>
            <h1 >Professional Security Services</h1>
          </div>
          <div>
            <p className='text-base text-center'>
            In today’s society, security is no longer a luxury but a necessity. Many people hesitate to hire a security services company, viewing it as an unproductive expense. However, with crime rates on the rise, investing in the right security measures is a smart financial decision that protects your valuable assets and ensures peace of mind.
            </p>
          </div>
          <div className='flex flex-col gap-20 pb-20'>
            <div className='flex md:flex-row flex-col  justify-between py-10 gap-14 md:gap-0'>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <FaEye className=' text-6xl text-gray-900 mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  CCTV Systems and Monitoring
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>For Homes, Commercial Buildings, Construction Sites, and Plant and Machinery, we provide comprehensive surveillance solutions that ensure peace of mind.</p>
                <button className='mt-4 py-2 px-4 bg-black text-white font-semibold rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <BiSolidTorch className=' text-gray-900  text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  Manned Guarding
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Our professional security guards offer round-the-clock patrols for building sites, company premises, or parking areas, delivering reliable protection day and night.</p>
                <button className='mt-4 py-2 px-4 bg-black font-semibold text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <BiSolidCctv className=' text-gray-900  text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  Videofied
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Our innovative Videofied system detects intrusions, records incidents in real-time, and promptly alerts our UK-based monitoring station for immediate response to potential threats.</p>
                <button className='mt-4 py-2 px-4 bg-black font-semibold text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
            </div>
            {/* 2nd row */}
            <div className='flex md:flex-row flex-col justify-between gap-14 md:gap-0'>
            <div className='flex flex-col items-center text-center md:w-1/3 group md:-mt-7 -mt-12 '>
                {/* <IoIosKey className='text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' /> */}
                <img src={cctv} alt="cctv"  className=' w-[80px] h-auto mb-1 transition-transform transform group-hover:scale-110 cursor-pointer'/>
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  Keyholding & Alarm Response
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>We act as your primary keyholder, responding swiftly to alarm activations to secure your premises efficiently and effectively.</p>
                <button className='mt-4 py-2 px-4 bg-black font-semibold text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <FaRoadBarrier className=' text-gray-900  text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  Fencing & Barriers
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Visual fencing and barrier systems provide a secure perimeter against intruders, enhancing safety and providing reassurance for you and your property.</p>
                <button className='mt-4 py-2 px-4 bg-black font-semibold text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
              <div className='flex flex-col items-center text-center md:w-1/3 group'>
                <SiPrivateinternetaccess className=' text-gray-900 text-6xl mb-4 transition-transform transform group-hover:scale-110 cursor-pointer' />
                <h1 className='relative font-bold pb-3 cursor-pointer'>
                  Private Investigations
                  <span className='underline-animation'></span>
                </h1>
                <p className='py-2 '>Our discreet surveillance operations ensure complete confidentiality and are tailored to meet the specific requirements of our clients.</p>
                <button className='mt-4 py-2 px-4 bg-black font-semibold text-white rounded transition-transform transform group-hover:scale-110'>More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
