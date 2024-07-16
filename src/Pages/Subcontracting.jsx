import React from 'react'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import sub from '../assets/subcontracting.webp'
import SubcontractingServicesDetails from '../components/ServiceDetail/SubcontractingServicesDetails'

function Subcontracting() {
  return (
    <div className='pt-20'>
    <ServiceTopPage type='Subcontracting Service UK' imgSrc={sub}/>
    <SubcontractingServicesDetails/>
  </div>
  )
}

export default Subcontracting