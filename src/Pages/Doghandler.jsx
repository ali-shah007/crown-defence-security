import React from 'react'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import dog from '../assets/dog.webp'
import DogHandlerSecurityDetails from '../components/ServiceDetail/DogHandlerSecurityDetails'

function Doghandler() {
  return (
    <div className='pt-20'>
      <ServiceTopPage type='Dog Handler Security UK' imgSrc={dog}/>
      <DogHandlerSecurityDetails/>
    </div>
  )
}

export default Doghandler