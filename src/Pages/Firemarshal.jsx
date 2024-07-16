import React from 'react'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import fire from '../assets/fire.webp'
import FireMarshalDetails from '../components/ServiceDetail/FireMarshalDetails'

function Firemarshal() {
  return (
    <div className='pt-20'>
      <ServiceTopPage type='Fire Marshals UK' imgSrc={fire}/>
      <FireMarshalDetails/>
    </div>
  )
}

export default Firemarshal