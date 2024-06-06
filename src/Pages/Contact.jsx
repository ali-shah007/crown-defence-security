import React from 'react'
import contact from '../assets/contact.jpg'

function Contact() {
  return (
    <div
    className='w-full h-[100vh] bg-cover bg-center bg-fixed'
   style={{ backgroundImage: `url(${contact})` }}>
 </div>
  )
}

export default Contact