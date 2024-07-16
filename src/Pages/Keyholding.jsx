import React from 'react'
import key from '../assets/key.webp'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import KeyHoldingServicesDetails from '../components/ServiceDetail/KeyHoldingServicesDetails'

function Keyholding() {
  return (
    <div className='pt-20'>
    <ServiceTopPage type='Key Holding Service UK' imgSrc={key}/>
    <KeyHoldingServicesDetails/>
  </div>
  )
}

export default Keyholding