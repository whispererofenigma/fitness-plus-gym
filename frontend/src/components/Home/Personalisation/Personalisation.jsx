import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperCore from "swiper";
import Strength from './Strength.jpg';
import Functional from './Functional.jpg';
import Cardio from './Cardio.jpg';
import Yoga from './Yoga.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import any required Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';

swiperCore.use([/* default global options */])

const Slides = ({ Image, Caption }) => {
  return (
    <div className=' rounded-xl m-auto relative box-border z-0 w-full aspect-video overflow-hidden'>
      <p className='absolute m-auto top-3/4 left-1/2 -translate-x-1/2 z-20 -translate-y-1/2 text-[6vmin] '>{Caption}</p>
      <div className='w-full h-full absolute top-0 left-0 z-10 bg-black/40'></div>
      <img className='object-cover w-full object-center' src={Image} alt="" />
    </div>
  )
}

const Personalisation = () => {
  return (
    <div className='bg-gray-400/20 grid items-center justify-center grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-8 p-[4vw] m-[4vw] w-[92vw] rounded-xl '>
      <div className='text-center md:text-left col-span-1'>
        <h1 className='text-4xl text-[#a2ff00]'>Achieve Your Goals with Personalized Training</h1>

        <p>At Fitness Plus, we believe fitness is personal. Whether your goal is weight loss, muscle building, improved stamina, or overall health, our programs are designed just for you.

          We start with a full assessment of your fitness level and goals, then create a tailored plan to ensure success. Our expert trainers regularly track your progress, keeping you motivated and on course.

          From strength and cardio to functional training and recovery sessions, we offer diverse options for all fitness levels. Beginners get step-by-step guidance, intermediate trainers can level up with new challenges, and athletes can boost performance with specialized plans.

          </p>
      </div>
      <Swiper className='w-full col-span-2'
        // Install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        autoplay={{
          delay: 3000,
        }}

        spaceBetween={0} // Space between slides
        slidesPerView={1} // How many slides to show at once

        // Dots for pagination
        // Scrollbar
        onSwiper={(swiper) => console.log(swiper)} // Event listeners
        onSlideChange={() => console.log('Slide changed!')}
      >
        <SwiperSlide><Slides Image={Strength} Caption="Strength Training" /></SwiperSlide>
        <SwiperSlide><Slides Image={Cardio} Caption="Cardio Programme" /></SwiperSlide>
        <SwiperSlide><Slides Image={Functional} Caption="Functional Training" /></SwiperSlide>
        <SwiperSlide><Slides Image={Yoga} Caption="Flexibility & Recovery" /></SwiperSlide>


      </Swiper>
    </div>
  );
};

export default Personalisation;
