import React from 'react'
import Hero from '../../Components/Hero/Hero'
import AboutUs from '../../Components/AboutUs/AboutUs'
import OurServices from '../../Components/OurServices/OurServices'
import Testimonials from '../../Components/Testimonials/Testimonials'
import CTASection from '../../Components/CTASection/CTASection'
import FAQSection from '../../Components/FAQ/FAQSection'
import Gallery from '../../Components/Gallery/Gallery'

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <AboutUs/>
        <OurServices/>
        <Testimonials/>
        <Gallery/>
        <CTASection/>
        <FAQSection/>
    </div>
  )
}

export default Home