import React from 'react'

function Dummy({type}) {
  return (
    <div className='flex w-full h-screen bg-yellow-500 justify-center items-center'>
            <h1 className=' text-white text-6xl'>{type}</h1>
    </div>
  )
}

export default Dummy