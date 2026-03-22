import React from 'react'
import Navbar from '../Components/navbar'
import HeroSection from '../Components/heroSection'
import AiTypes from '../Components/aiTypes'
import Footer from '../Components/footer'
import AiBenefits from '../Components/aiBenefits'
import Contact from '../Components/Contact'

function Home() {
  return (
    <>
    <Navbar/>
    <main>
        <HeroSection/>
        <AiTypes/>           
        <AiBenefits/>
        <Contact/>
    </main>
    <Footer/>
    </>
  )
}

export default Home
