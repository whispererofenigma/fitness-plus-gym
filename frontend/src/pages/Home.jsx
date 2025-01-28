import React from 'react';
import Squares from '../views/Backgrounds/Squares';
import Navbar from '../layouts/Navbar';
import Hero from '../components/Home/Hero/Hero';
import Personalisation from '../components/Home/Personalisation/Personalisation';
import Motivation from '../components/Home/Motivation/Motivation';
import Features from '../components/Home/Features/Features';
import Tour from '../components/Home/Tour/Tour';



function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Personalisation />
        <Motivation /> 
        <Features />       
        <Tour />
        <Squares/>
    </div>
  )
}

export default Home