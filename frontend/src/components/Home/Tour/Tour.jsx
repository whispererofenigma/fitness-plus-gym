import React from 'react';
import InfiniteScroll from './InfiniteScroll';
import Image1 from '../../../images/Tour/1.jpg';
import Image2 from '../../../images/Tour/2.jpg';
import Image3 from '../../../images/Tour/3.jpg';
import Image4 from '../../../images/Tour/4.jpg';
import Image5 from '../../../images/Tour/5.jpg';
import Image6 from '../../../images/Tour/6.jpg';


function Tour() {

    const items = [
       
        { content: <img src={Image1} alt="" className='h-full w-full object-cover' /> },
        { content: <img src={Image2} alt="" className='h-full w-full object-cover' /> },
        { content: <img src={Image3} alt="" className='h-full w-full object-cover' /> },
        { content: <img src={Image4} alt="" className='h-full w-full object-cover' /> },
        { content: <img src={Image5} alt="" className='h-full w-full object-cover' /> },
        { content: <img src={Image6} alt="" className='h-full w-full object-cover' /> },
    ];

    return (
        <div className=' px-[4vw] mx-[4vw] w-[92vw] md:flex gap-8 justify-center items-start'>
            <div className='md:w-[50%] order-2'> 
                <h2 className='text-4xl text-[#a2ff00] '>Step Inside FItness Plus</h2>
                <p>At Fitness Plus, every corner is designed to inspire and motivate you. From our spacious cardio zones to our cutting-edge weightlifting areas, you’ll find the perfect setting to crush your fitness goals. Our group class studios are filled with energy, while the recovery and relaxation zones provide a serene escape for post-workout rejuvenation. With modern amenities, spotless locker rooms, and a welcoming atmosphere, Fitness Plus is more than a gym—it’s where your journey to a healthier, stronger you begins.</p>
            </div>
            <InfiniteScroll
                items={items}
                isTilted={true}
                tiltDirection='left'
                autoplay={true}
                autoplaySpeed={1.5}
                autoplayDirection="down"
                pauseOnHover={true}
            />
        </div>
    )
}

export default Tour