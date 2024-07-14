import React from 'react'

import Forms from '../Forms/Forms'

function GetQuoteSection() {
  return (
    <div name="quote" className='relative flex w-full h-auto py-20  justify-center items-center' >
      <div className='absolute inset-0 bg-gray-900 opacity-100'></div>
      <div className='relative flex justify-center items-center w-[90vw] max-w-lg '>
        <Forms/>
      </div>
    </div>
  )
}

export default GetQuoteSection
