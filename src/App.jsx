import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cards from './components/Cards'
import FaqItem from './components/FaqItem'
import Integrations from './components/Integrations'
import AnimatedFeatures from './components/AnimatedFeatures'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <Nav/>
      <Hero/>
      <AnimatedFeatures/>
      <Integrations/>
      <Testimonials/>
      <Cards/>
      <FaqItem/>
      <Footer/>
    </div>
  )
}

export default App
