import React from 'react'

function CallUs() {
  return (
    <div className=' w-full h-auto bg-gray-900   text-white'>
        <div className='flex  flex-col justify-center items-center text-center py-20 gap-7 w-[80vw] mx-auto'>
        <div>
            <h1 className='text-4xl font-bold '>Security Guard Services throughout Manchester and the North West of England</h1>
        </div>
        <div>
            <h1 className='text-2xl font-semibold'>Greater Manchester | Nationwide</h1>
        </div>
        <a href='tel:+1234567890'>
            <button className='text-[#333] text-xl font-semibold px-10 py-4 bg-[#FFD600] rounded-full hover:scale-105 duration-200'>Call us on <br/> <span className='text-2xl lg:text-4xl font-bold'>0800 123 3345</span></button>
        </a>
       
        <div>
            <h1>Crown Defence Security (UK) Limited provides the Door Supervision, Security Guarding and Keyholding Services.</h1>
        </div>
        </div>
       

    </div>
  )
}

export default CallUs