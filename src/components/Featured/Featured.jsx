import React from 'react'
import Slider from '../Slider/Slider'

function Featured() {
  return (
    <div className=' w-full  bg-black'>
 <div className='flex flex-col gap-10 w-[95vw] h-auto text-white justify-center items-center'>
        <div className='text-4xl lg:text-6xl font-semibold mt-12'>
            Featured Services
        </div>
        <div>
          <div className='flex w-[80vw] h-[70vh] lg:w-[50vw] lg:h-[50vh]'>
          <Slider/>
          </div>
        </div>

    </div>
    </div>
   
  )
}

export default Featured