import React from 'react';
import Squares from '../views/Backgrounds/Squares';
import Navbar from '../layouts/Navbar';
import Hero from '../components/Home/Hero/Hero';
import Personalisation from '../components/Home/Personalization/Personalisation';
import Motivation from '../components/Home/Motivation/Motivation';










function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Personalisation />
        <Motivation />        
        <Squares/>
    </div>
  )
}

export default Home