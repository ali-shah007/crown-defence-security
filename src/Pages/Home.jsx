import React from 'react'
import Hero from '../components/Hero/Hero'
import Featured from '../components/Featured/Featured'
import Marquee from '../components/Marquee/Marquee'
import CallUs from '../components/CallUs/CallUs'
import Brochure from '../components/Brochure/Brochure'


function Home() {
  return (
    <div>
        <Hero />
        <Marquee/>
        <CallUs/>
        <Featured/>
        <Brochure/>
        
    </div>
  )
}

export default Home