import React from 'react'
import team from '../assets/team.jpg'


function About() {
  return (
    <div
       className='w-full h-[100vh] bg-cover bg-center bg-fixed'
      style={{ backgroundImage: `url(${team})` }}>
    </div>
  )
}

export default About