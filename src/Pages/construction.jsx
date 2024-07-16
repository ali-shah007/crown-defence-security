import React from 'react'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import bg from '../assets/construction.webp'
import ConstructionDetails from '../components/ServiceDetail/ConstructionDetails'

function construction() {
  return (
    <div className='pt-20'>
      <ServiceTopPage type='Construction Site Security' imgSrc={bg}/>
      <ConstructionDetails/>
    </div>
  )
}

export default construction