import React from 'react'
import bgimage from '../../assets/contact.jpg'
import Forms from '../Forms/Forms'

function GetQuoteSection() {
  return (
    <div name="quote" className='relative flex w-full h-auto py-20 bg-center bg-cover bg-fixed justify-center items-center' style={{ backgroundImage: `url(${bgimage})` }}>
      <div className='absolute inset-0 bg-gray-900 opacity-80'></div>
      <div className='relative flex justify-center items-center w-[90vw] max-w-lg'>
        <Forms/>
      </div>
    </div>
  )
}

export default GetQuoteSection
