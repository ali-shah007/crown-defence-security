import React from 'react'
import Slider from '../Slider/Slider'

function Featured() {
  return (
    <div className='flex flex-col gap-10 w-full h-auto bg-black text-white justify-center items-center'>
        <div className='text-6xl font-semibold mt-12'>
            Featured Services
        </div>
        <div>
          <div className='flex w-[50vw] h-[50vh]'>
          <Slider/>
          </div>
        </div>

    </div>
  )
}

export default Featured