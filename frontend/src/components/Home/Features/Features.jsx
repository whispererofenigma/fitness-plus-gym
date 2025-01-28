import React from 'react';
import SpotlightCard from './SpotLightCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVenusMars, faDumbbell, faUserTie, faJar  } from '@fortawesome/free-solid-svg-icons'







function Features() {

    const spotlightData = [
        {
          icon: faVenusMars,
          title: "Unisex",
          description:
            "A welcoming and inclusive space for everyone, regardless of gender.",
          
        },
        {
          icon: faDumbbell,
          title: "Cutting-Edge Equipment",
          description: "Experience the latest in fitness technology.",
          
        },
        {
          icon: faUserTie,
          title: "Experienced Trainers",
          description: "Expert guidance tailored to your unique goals.",
          
        },
        {
          icon: faJar,
          title: "Exclusive Supplements",
          description:
            " Premium, in-house supplements to fuel your progress.",
          buttonText: "Learn more",
        },
      ];

    return (
        <div className='p-[4vw] m-[4vw] w-[92vw]'>
            <h2 className='text-4xl text-[#a2ff00]'>What Makes Us Stand Out?</h2>
            <p>Step into a space designed to inspire, motivate, and deliver results. At our gym, we combine state-of-the-art facilities with expert guidance and personalized care to ensure every workout feels like a step closer to your goals. Whether you're here to build strength, improve endurance, or simply embrace a healthier lifestyle, we've got everything you need to make it happen—because your success is our priority.</p>
            <div className='grid lg:grid-cols-4 gap-4 mt-8 justify-center items-center'>
                {spotlightData.map((item, index) => (
                    <SpotlightCard className='flex gap-x-6 items-start' key={index}>
                        <FontAwesomeIcon icon={item.icon} className='text-2xl text-white/40'/>
                        <div>
                          <h3 className='text-[#a2ff00] text-xl font-semibold'>{item.title}</h3>
                          <p className='font-light'>{item.description}</p>
                        </div>
                        
                    </SpotlightCard>
                ))}
            </div>
        </div>
    )
}

export default Features