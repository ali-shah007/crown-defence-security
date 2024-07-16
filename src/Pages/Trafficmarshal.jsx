import React from 'react'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import traffic from '../assets/traffic.webp'
import TrafficMarshalDetails from '../components/ServiceDetail/TrafficMarshalDetails'

function Trafficmarshal() {
  return (
    <div className='pt-20'>
      <ServiceTopPage type="Traffic Marshals UK" imgSrc={traffic}/>
      <TrafficMarshalDetails/>
    </div>
  )
}

export default Trafficmarshal