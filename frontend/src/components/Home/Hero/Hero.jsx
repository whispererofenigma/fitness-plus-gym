import React from 'react';

import BlurText from './BlurText';
import TrueFocus from './TrueFocus';


function Hero() {


    return (
        <div className='px-[4vw] mx-[4vw] w-[92vw]  flex h-screen items-center' >
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