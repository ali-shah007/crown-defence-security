import React, { useState } from 'react';
import services from '../assets/services.jpg';
import { ClipLoader } from 'react-spinners';


function Services() {
  const [loading, setLoading] = useState(true);

  return (
    <div className='relative w-full h-[100vh]'>
      {loading && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <ClipLoader color='#ffffff' loading={loading} size={150} />
        </div>
      )}
      <img
        src={services}
        alt='services'
        className={`w-full h-full object-cover ${loading ? 'hidden' : 'block'}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

export default Services;
