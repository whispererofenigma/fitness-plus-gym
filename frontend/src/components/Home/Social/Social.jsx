import React from 'react'
import IgPosts from './IgPosts'

function Social() {
  return (
    <div className=' p-[4vw] m-[4vw] w-[92vw]'>
        <h2 className='text-4xl text-[#a2ff00]'>Checkout Us on Social Media</h2>
        <IgPosts />
        <div className='w-full flex justify-center p-4'><a href="/social" className='text-xl text-[#a2ff00] hover:scale-110 transition ease-in-out'>See more content!</a></div>
    </div>
  )
}

export default Social