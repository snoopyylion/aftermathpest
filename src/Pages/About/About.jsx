import React from 'react'
import AboutUs from '../../Components/AboutUs/AboutUs'
import CTASection from '../../Components/CTASection/CTASection'
import FAQSection from '../../Components/FAQ/FAQSection'
import './About.css'
import Gallery from '../../Components/Gallery/Gallery'

const About = () => {
  return (
    <div className='about'>
        <AboutUs/>
        <CTASection/>
        <Gallery/>
        <FAQSection/>
    </div>
  )
}

export default About