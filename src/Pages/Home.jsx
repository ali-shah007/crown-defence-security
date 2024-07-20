import React from 'react'
import Hero from '../components/Hero/Hero'
// import Featured from '../components/Featured/Featured'
import Marquee from '../components/Marquee/Marquee'
import CallUs from '../components/CallUs/CallUs'
// import Services from '../components/Services/Services'
// import Testimonials from '../components/Testimonials/Testimonials'
import GetQuoteSection from '../components/GetQuoteSection/GetQuoteSection'
import Services2 from '../components/Services2/Services2'
import { Helmet } from 'react-helmet';




function Home() {
  return (
    <div>
      <Helmet>
        <title>Crown Defence Security</title>
        <meta name="description" content="Professional security services for all your needs. Our team is dedicated to providing top-notch protection and peace of mind." />
        <meta name="keywords" content="Security, Security Services, Crown Defence Security, Protection, Professional Security, UK security guard, security services uk, doncaster security services" />
      </Helmet>
        <Hero />
        <Marquee/>
        <CallUs/>
        <Services2/>
        {/* <Testimonials/> */}
        <GetQuoteSection/>
       
        
        
    </div>
  )
}

export default Home