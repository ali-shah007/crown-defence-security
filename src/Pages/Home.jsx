import React from 'react'
import Hero from '../components/Hero/Hero'
import Featured from '../components/Featured/Featured'
import Marquee from '../components/Marquee/Marquee'


function Home() {
  return (
    <div>
        <Hero />
        <Marquee/>
        <Featured/>
    </div>
  )
}

export default Home