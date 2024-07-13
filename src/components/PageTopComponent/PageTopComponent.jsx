import React from 'react';
import { Link } from 'react-router-dom';
import second from '../../assets/bghero.webp'

function PageTopComponent({type}) {
  return (
    <div className='w-full h-auto bg-gray-900 text-white border-b border-white' style={{ backgroundImage: `url(${second})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        
      <div className='flex flex-col justify-center items-center text-center py-20 gap-7 w-[80vw] mx-auto'>
        
        {/* Breadcrumbs */}
        <nav className='w-full mb-4 text-sm'>
          <ul className='flex justify-start items-center text-gray-400 space-x-2'>
            <li><Link to="/" className='hover:text-white'>Home</Link></li>
            <li>{'>'}</li>
            <li>{type}</li>
          </ul>
        </nav>

        <div>
          <h1 className='text-4xl font-bold'>{type} Us</h1>
        </div>
        <div>
          <h2 className='text-2xl font-semibold'>Crown Defence Security Ltd</h2>
        </div>
        <div>
         <a href='tel:07460395006'><button className='text-[#333] text-xl font-semibold px-10 py-4 bg-[#FFD600] rounded-full hover:scale-105 duration-200'>
            Call us on <br /> <span className='text-2xl lg:text-4xl font-bold'>0746 039 5006</span>
          </button></a> 
        </div>
        <div>
          <p>Crown Defence Security (UK) Limited provides Door Supervision, Security Guarding, and Keyholding Services across Manchester and the North West of England.</p>
        </div>
      </div>
    </div>
  );
}

export default PageTopComponent;
