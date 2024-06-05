import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import footerbanner from '../../assets/smallbanner.jpg'


function Footer() {
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

  const data2 = [
    "Bishop Auckland",

"Shildon",

"Newton Aycliffe",

"Darlington",

"Durham",

"Newcastle",

"North Yorkshire",

"& Surrounding Areas",
  ]

  const data3 = [
    "Unit 20,",
"South West Durham Business Park",
"Shildon",
"County Durham",
"DL4 2QN",
  ]
  return (
    <div className=' bg-black'>
    
 <div className='flex flex-col lg:flex-row w-[90vw] lg:w-[70vw] h-auto py-20 mx-auto ml:5 lg:ml:0 text-white text-base font-bold'>
 <div className='flex flex-col lg:flex-row w-1/2 gap-10 lg:gap-20'>
 <div className='flex flex-col gap-10'>
          <img className='w-[180px] h-auto' src={logo} alt='logo'/>
          <img className='w-[180px] h-auto'  src={footerbanner} alt='banner'/>
      </div>
      <div className='flex flex-col gap-2'>
          
            <h1 className='text-2xl font-bold text-white mt-1 mb-2 underline'>Quick Links</h1>
            {data.map(({id,title,tolink})=>(
              <Link to={tolink} key={id} className='cursor-pointer hover:scale-105 duration-200 text-[#c6af6b]'>{title}</Link>
            ))}
             <h1 className='text-base font-bold text-white mt-10 lg:mt-3 mb-2 underline'>Serving Areas:</h1>
             <ul className='list-none mb-10 lg:mb-0'>
            {data2.map((area, index) => (
              <li key={index} className='text-[#c6af6b]'>{area}</li>
            ))}
          </ul>
          
      </div>
</div>
<div className='flex flex-col lg:flex-row w-1/2 gap-10 lg:gap-20'>
<div className='flex flex-col'>
      <h2 className='whitespace-nowrap'>24/7 Control Room: <span className='text-[#c6af6b]'>0900 786 01</span></h2>
          <h2 className='whitespace-nowrap'>Email: <span className='text-[#c6af6b]'>info@crowndefencesecurity.co.uk</span></h2>
          <h1 className='text-base font-bold text-white mt-10 lg:mt-3 mb-2 underline'>CDS HeadQuarters</h1>
          <ul className='list-none'>
            {data3.map((area, index) => (
              <li key={index} className='text-[#c6af6b]'>{area}</li>
            ))}
          </ul>
      </div>
      <div>
        <h1>Company No:</h1>
        <h1 className='text-[#c6af6b]'>1234567</h1>
        <h1 >VAT Registration No:</h1>
        <h1 className='text-[#c6af6b]'>3333333</h1>
        <h1 className='text-[#c6af6b]'>Copyright © 2019-2024</h1>
        <h1 className='text-[#c6af6b]'>Crown Defence Security Ltd</h1>
        <h1 className='text-[#c6af6b]'>All Rights Reserved</h1>

      </div>
</div>
     
    
    </div>
    </div>
   
  )
}

export default Footer