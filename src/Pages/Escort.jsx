import React from 'react'
import car from '../assets/car.webp'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import EscortServicesDetails from '../components/ServiceDetail/EscortServicesDetails'

function Escort() {
  return (
    <div className='pt-20'>
    <ServiceTopPage type='Escort Services UK' imgSrc={car}/>
    <EscortServicesDetails/>
  </div>
  )
}

export default Escort