import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/security-logo.webp'
import logo2 from '../../assets/logo2.webp'



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
    "277 throne road Doncaster,",


"DN2 5AR",
  ]
  return (
    <div className=' bg-[#111825] border-t border-white'>
     
 <div className='flex flex-col lg:flex-row w-[90vw] lg:w-[70vw] h-auto pt-20 pb-10 lg:pb-20 mx-auto ml:5 lg:ml:0 text-white text-base font-bold'>
 
 <div className='flex flex-col lg:flex-row w-1/2 gap-10 lg:gap-20'>
 <div className='flex flex-col gap-10'>
          <img className='w-[180px] h-auto' src={logo} alt='logo'/>
       
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
      <h1  className='whitespace-nowrap'>24/7 Control Room: <a href='tel:07460395006' className='text-primary hover:text-yellow-500'>0746 0395 006</a></h1>
          <a href='mailto:info@crowndefencesecurity.co.uk' className='whitespace-nowrap'>Email: <span className='text-primary hover:text-yellow-500'>info@crowndefencesecurity.co.uk</span></a>
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
        <h1 className='mt-10 lg:mt-3'>VAT Registration No:</h1>
        <h1 className='text-[#c6af6b]'>3333333</h1>
        

        <div className='flex flex-col gap-10 mt-10 '>
          <img className='w-[100px] h-auto' src={logo2} alt='logo'/>
       
      </div>

      </div>
</div>
     
    
    </div>

    <div className='w-full h-[50px] bg-[#77828d] flex flex-col justify-center items-center'>
    <h1 className=' text-white'>Copyright © 2024 Crown Defence Security Ltd</h1>
        {/* <h1 className='text-white'>All Rights Reserved </h1> */}
        

    </div>
    </div>
   
  )
}

export default Footer