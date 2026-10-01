import React from 'react'
import HeroBg from '../components/Hero'
import Partner from '../components/Partner'
import PassionSection from '../components/PassionSection'
import CourseCards from '../components/CourseCard'
import LearningPath from '../components/LearningPath'
import Testimonials from '../components/Testimonial'
import ProfessionalGrowthSection from '../components/ProfessionalGrowthSection'

const Home = () => {
  return (
    <div>
      <HeroBg/>
      <Partner/>
      <PassionSection/>
      <CourseCards/>
      <LearningPath/>
         <ProfessionalGrowthSection/>
      <Testimonials/>
    </div>
  )
}

export default Home
