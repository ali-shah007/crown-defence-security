import React from 'react'
import services from '../assets/services.jpg'

function Services() {
  return (
    
         <div
       className='w-full h-[100vh] bg-cover bg-center bg-fixed'
      style={{ backgroundImage: `url(${services})` }}>
    </div>
    
  )
}

export default Services