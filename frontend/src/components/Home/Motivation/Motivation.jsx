import React from 'react';


const Card = ({text, bg}) => {
    return (
        <div data-aos="fade-up" className={`w-full h-[30vh] rounded-xl flex justify-center items-center text-5xl font-black bg-gradient-to-b from-${bg} text-black mix-blend-screen`}>
            {text}
        </div>
    )
}

function Motivation() {
  return (
    <div className='flex flex-col xl:flex-row gap-y-0 md:gap-8 p-[4vw] m-[4vw] w-[92vw] bg-transparent'>
        <Card text="PUSH!" bg="[#a2ff00]"/>
        <Card text="PROGRESS!" bg="white"/>
        <Card text="PREVAIL!" bg="[#a2ff00]"/>
        <Card text="REPEAT." bg="white"/>
        
    </div>
  )
}

export default Motivation