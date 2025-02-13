import React from 'react'
import OurServices from '../../Components/OurServices/OurServices'
import Testimonials from '../../Components/Testimonials/Testimonials'
import FAQSection from '../../Components/FAQ/FAQSection'
import './Services.css'

const Services = () => {
  return (
    <div className='services'>
        <OurServices/>
        <Testimonials/>
        <FAQSection/>
    </div>
  )
}

export default Services