import React, {useState} from 'react'
import contact from '../assets/contact.jpg'
import { ClipLoader } from 'react-spinners';

function Contact() {
  const [loading, setLoading] = useState(true);

  return (
    <div className='relative w-full h-[100vh]'>
      {loading && (
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
          <ClipLoader color='#ffffff' loading={loading} size={150} />
        </div>
      )}
      <img
        src={contact}
        alt='contact'
        className={`w-full h-full object-cover ${loading ? 'hidden' : 'block'}`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}

export default Contact