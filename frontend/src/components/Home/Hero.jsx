import React from 'react';
import HeroImage from '../../images/Hero-image.jpg';
import BlurText from './BlurText';
import TrueFocus from './TrueFocus';


function Hero() {


    return (
        <div className='px-4 flex h-screen w-screen items-center' >
            <text className='text-[10vh] md:text[16v] leading-[1] w-full'>
                <BlurText
                    text="UNLOCK YOUR GODLY POTENTIAL WITH"
                    delay={150}
                    className=""
                />
                <TrueFocus
                    sentence="FITNESS PLUS"
                    manualMode={false}
                    blurAmount={4}
                    borderColor="#a2ff00"
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                />
            </text>
        </div>
    )
}

export default Hero