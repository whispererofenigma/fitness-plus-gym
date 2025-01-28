import React from 'react';
import TiltedCard from './TitledCard';
import Shanu from './Shanu.jpg';
import Sagar from './Sagar.jpg';

function Owners() {
    return (
        <div className='p-[4vw] m-[4vw] w-[92vw]'>
            <h2 className='text-4xl text-[#a2ff00]'>Meet the Visionaries</h2>
            <p>At Fitness Plus, we’re more than just a gym—we’re a family united by a passion for health, fitness, and community. Our founders, <a href="https://www.facebook.com/profile.php?id=100088147555472" className='text-[#a2ff00]'>Shanu Roy</a> & <a href='https://www.facebook.com/sagar.roy.79656921' className='text-[#a2ff00]'>Sagar Roy</a>, envisioned creating a space where people of all fitness levels feel inspired, supported, and empowered to achieve their goals. With years of experience in fitness, wellness, and business, they’ve built Fitness Plus as a haven for growth, resilience, and transformation. Every detail, from state-of-the-art equipment to personalized training programs, reflects their commitment to making your fitness journey exceptional.</p>
            <div className='flex flex-col gap-8 md:flex-row my-8'>
                <TiltedCard source={Shanu} name="Shanu Roy" />
                <TiltedCard source={Sagar} name="Sagar Roy" />
            </div>
        </div>
    )
}

export default Owners