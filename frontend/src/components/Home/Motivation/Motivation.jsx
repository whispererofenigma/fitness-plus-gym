import React from 'react';



const Card = ({text, bg, offset}) => {
    return (
        <div style={{background: bg}} data-aos-offset={offset} data-aos="fade-up" className='w-full h-[30vh] rounded-xl flex justify-center items-center text-5xl font-black text-black mix-blend-screen'>
            {text}
        </div>
    )
}

function Motivation() {
    
    return (
    
    <div className='flex flex-col xl:flex-row gap-y-0 md:gap-8 p-[4vw] m-[4vw] w-[92vw] bg-transparent'>
        <Card text="PUSH!" bg="linear-gradient(#a2ff00, black)"/>
        <Card text="PROGRESS!" offset="250" bg="linear-gradient(white, black)"/>
        <Card text="PREVAIL!" offset="300" bg="linear-gradient(#a2ff00, black)"/>
        <Card text="REPEAT." offset="350" bg="linear-gradient(white, black)"/>
        
        
    </div>
  )
}

export default Motivation