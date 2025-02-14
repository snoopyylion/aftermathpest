import React from 'react'
import CTASection from '../../Components/CTASection/CTASection'
import FAQSection from '../../Components/FAQ/FAQSection'
import Testimonials from '../../Components/Testimonials/Testimonials'
import './Contact.css'
import Gallery from '../../Components/Gallery/Gallery'

const Contact = () => {
  return (
    <div className='contact'>
        <CTASection/>
        <FAQSection/>
        <Gallery/>
        <Testimonials/>
    </div>
  )
}

export default Contact