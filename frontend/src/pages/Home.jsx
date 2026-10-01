import React from 'react'
import HeroBg from '../components/Hero'
import Partner from '../components/Partner'
import PassionSection from '../components/PassionSection'
import CourseCards from '../components/CourseCard'
import LearningPath from '../components/LearningPath'
import Testimonials from '../components/Testimonial'
import ProfessionalGrowthSection from '../components/ProfessionalGrowthSection'
import CareerSection from '../components/CareerSection'

const Home = () => {
  return (
    <div>
      <HeroBg/>
      <Partner/>
      <PassionSection/>
      <CourseCards/>
      <LearningPath/>
         <ProfessionalGrowthSection/>
         <CareerSection/>
      <Testimonials/>
    </div>
  )
}

export default Home
