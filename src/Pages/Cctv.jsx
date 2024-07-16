import React from 'react'
import ServiceTopPage from '../components/PageTopComponent/ServiceTopPage'
import second from '../assets/monitoring.webp'
import CCTVMonitoringSecurityDetails from '../components/ServiceDetail/CCTVMonitoringSecurityDetails'

function Cctv() {
  return (
    <div className='pt-20'>
    <ServiceTopPage type='CCTV Security Service UK' imgSrc={second}/>
    <CCTVMonitoringSecurityDetails/>
  </div>
  )
}

export default Cctv