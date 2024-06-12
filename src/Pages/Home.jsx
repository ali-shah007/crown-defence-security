import React from 'react'
import Hero from '../components/Hero/Hero'
import Featured from '../components/Featured/Featured'
import Marquee from '../components/Marquee/Marquee'
import CallUs from '../components/CallUs/CallUs'
import Services from '../components/Services/Services'



function Home() {
  return (
    <div>
        <Hero />
        <Marquee/>
        <CallUs/>
        <Services/>
        <Featured/>
        
        
    </div>
  )
}

export default Home