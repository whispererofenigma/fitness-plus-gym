import React from 'react';
import Squares from '../views/Backgrounds/Squares';
import Navbar from '../layouts/Navbar';
import Hero from '../components/Home/Hero';








function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Squares/>
    </div>
  )
}

export default Home