import React from 'react';
import constructionbg from '../../assets/construction.webp'
import monitoringbg from '../../assets/monitoring.webp'
import trafficbg from '../../assets/traffic.webp'
import firebg from '../../assets/fire.webp'
import keybg from '../../assets/keys (2).webp'
import subbg from '../../assets/subcontracting.webp'
import carbg from '../../assets/car.webp'
import dogbg from '../../assets/dog.webp'
import { Link } from 'react-router-dom';

function Services2() {
  return (
    <div className='flex flex-col'>
      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={constructionbg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Construction Security</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-[#343A40] lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>Construction Security</h1>
            <p className='text-white mb-6'>Ensure the safety and security of your construction site with our dedicated security services. Our trained guards are skilled in preventing theft, vandalism, and unauthorized access, safeguarding your valuable assets and ensuring smooth project progression.</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row-reverse justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={firebg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Fire Marshals</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-primary lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-[#333] mb-6'>Fire Marshals</h1>
            <p className='text-[#333] mb-6'>Our certified fire marshals are experts in fire prevention and emergency response. They conduct regular inspections, enforce fire safety regulations, and are always prepared to act swiftly in case of a fire, ensuring the safety of your property and personnel.</p>
            <Link to='/' className='text-white bg-[#333] px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={trafficbg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Traffic Marshals</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-gray-900 lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>Traffic Marshals</h1>
            <p className='text-white mb-6'>Managing traffic flow and ensuring safety on construction sites and events is critical. Our traffic marshals are trained to direct vehicles and pedestrians efficiently, minimizing risks and ensuring smooth operations in busy environments.</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row-reverse justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={dogbg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Dog Handler Security</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-white lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-[#333] mb-6'>Dog Handler Security</h1>
            <p className='text-[#333] mb-6'>Our highly trained dog handler teams provide an effective security solution for various environments. With keen senses and rigorous training, our security dogs and handlers are excellent deterrents against intruders and can detect threats swiftly.</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={carbg}
              alt='' 
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Patrolling Security</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-[#343A40] lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>Patrolling Security</h1>
            <p className='text-white mb-6'>Our patrolling security services ensure continuous surveillance and monitoring of your premises. With regular and random patrols, our security personnel detect and deter suspicious activities, providing a robust layer of security for your property.</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row-reverse justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={keybg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Key Holding Services</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-primary lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-[#333] mb-6'>Key Holding Services</h1>
            <p className='text-[#333] mb-6'>Crown Defence Security Ltd offers professional key holding services, ensuring that your keys are securely stored and accessible only to authorized personnel. We provide rapid response services, attending to alarms and emergencies promptly.</p>
            <Link to='/' className='text-white bg-[#333] px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={monitoringbg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>CCTV Monitoring</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-gray-900 lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>CCTV Monitoring</h1>
            <p className='text-white mb-6'>Enhance your security with our comprehensive CCTV monitoring services. Our experienced operators keep a vigilant eye on your premises, detecting and responding to any suspicious activity in real-time, ensuring your property remains safe and secure.</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>


      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row-reverse justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={carbg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Escort Services</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-[#343A40] lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-primary mb-6'>Escort Services</h1>
            <p className='text-white mb-6'>Our professional escort services ensure the safety and security of individuals and assets during transit. Whether for personal protection or secure transportation of valuable items, our experienced security personnel provide reliable and discreet escort services.</p>
            <Link to='/' className='text-[#333] bg-primary px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>

      <div className='w-full lg:h-[600px] h-auto'>
        <div className='relative flex flex-col lg:flex-row justify-center items-center'>
          <div className='w-full lg:w-1/2 relative'>
            <img
              src={subbg}
              alt=''
              className='w-full lg:h-[600px] h-auto object-cover object-center filter grayscale hover:grayscale-0 transition duration-500 ease-in-out cursor-pointer'
            />
            <h1 className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10 pointer-events-none'>Subcontracting Services</h1>
          </div>
          <div className='w-full lg:w-1/2 text-center bg-primary lg:h-[600px] h-auto flex flex-col items-center justify-center p-10 lg:px-20 lg:py-10'>
            <h1 className='text-4xl font-normal text-[#333] mb-6'>Subcontracting Services</h1>
            <p className='text-[#333] mb-6'>Crown Defence Security Ltd offers reliable subcontracting services, providing trained and professional security personnel to meet your specific needs. Our team integrates seamlessly with your operations, ensuring high standards and efficient security solutions.</p>
            <Link to='/' className='text-white bg-[#333] px-6 py-3 rounded-full cursor-pointer hover:scale-105 duration-200'>Find out more</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services2;
