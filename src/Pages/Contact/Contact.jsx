import React from 'react'
import CTASection from '../../Components/CTASection/CTASection'
import FAQSection from '../../Components/FAQ/FAQSection'
import Testimonials from '../../Components/Testimonials/Testimonials'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
        <CTASection/>
        <FAQSection/>
        <Testimonials/>
    </div>
  )
}

export default Contact