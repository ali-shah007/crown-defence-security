import React from 'react'
import Hero from '../components/Hero/Hero'
// import Featured from '../components/Featured/Featured'
import Marquee from '../components/Marquee/Marquee'
import CallUs from '../components/CallUs/CallUs'
// import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import GetQuoteSection from '../components/GetQuoteSection/GetQuoteSection'
import Services2 from '../components/Services2/Services2'




function Home() {
  return (
    <div>
        <Hero />
        <Marquee/>
        <CallUs/>
        <Services2/>
        <Testimonials/>
        <GetQuoteSection/>
       
        
        
    </div>
  )
}

export default Home