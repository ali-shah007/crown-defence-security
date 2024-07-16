import React from 'react'
import car from '../assets/car.webp'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import PatrollingSecurityDetails from '../components/ServiceDetail/PatrollingSecurityDetails'

function Patrolling() {
  return (
    <div className='pt-20'>
    <ServiceTopPage type='Patrolling Security Service UK' imgSrc={car}/>
    <PatrollingSecurityDetails/>
  </div>
  )
}

export default Patrolling