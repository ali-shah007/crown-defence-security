import React from 'react';
import { Link } from 'react-router-dom';
import CallUs from '../components/CallUs/CallUs';

const NotFound = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-gray-900 bg-primary">
        <div className='w-full h-[500px] flex flex-col justify-center items-center text-gray-900 bg-primary pt-20'>
        <h1 className="text-4xl font-semibold mb-4 py-5">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline text-2xl font-bold mb-10 py-10">
        Go to Homepage
      </Link>
        </div>
     
      <div className='w-full'>
      <CallUs/>
      </div>
      <div className='w-full h-[100px] bg-primary'>

      </div>
      
    </div>
  );
};

export default NotFound;
