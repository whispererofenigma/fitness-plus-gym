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
        <div className='w-full mt-[2vw] bg-black absolute z-0'  style={{height: '500px', positon: 'relative'}}>
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