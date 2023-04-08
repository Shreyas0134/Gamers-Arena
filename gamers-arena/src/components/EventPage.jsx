import React from 'react'
import mem from '../Images/eventpage.jpg'

const EventPage = () => {
  return (
    <div>
      <div className='max-w-[1920px] mx-auto relative'>
        <div className='relative'>
          <img src={mem} alt='' />
          <p className='absolute bottom-28 left-0 right-0 text-center text-white text-base sm:text-xl md:text-6xl underline  leading-1 tracking-widest font-normal'>Organize your eSport event!</p>
        </div>
        <div className='w-full mx-auto text-center justify-center absolute top-0 mt-[8%] text-white'>
          <p className='text-xl sm:text-2xl md:text-4xl lg:text-8xl font-extrabold italic'>Events.</p>
          <h1 className='md:text-4xl sm:text-2xl text-xl font-bold md:py-16'>Tournaments & Exhibitions</h1>
        </div>
      </div>
    </div>
  )
}

export default EventPage