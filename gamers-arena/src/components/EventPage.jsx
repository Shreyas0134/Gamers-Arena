import React from 'react'
import mem from '../Images/eventpage.jpg'
import img1 from '../Event Image/s1.jpg'
import img2 from '../Images/s2.jpg'
import img3 from '../Images/s3.jpg'
import img4 from '../Images/s4.jpg'
import img5 from '../Images/s5.jpg'
import img6 from '../Images/s6.jpg'
import img7 from '../Images/s7.jpg'
import img8 from '../Images/s8.jpg'


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
      <div className='max-w-[1920px] mx-auto p-10 items-center '>
        <div className='p-3 m-3'>
          <p className='flex justify-center font-bold text-3xl '>Old Events</p>
        </div>
        <div className=' grid sm:mx-auto  sm:grid-cols-2 lg:grid-cols-4 gap-2 text-center p-5'>
          {/* first card */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 ">
          <img src={img1} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modena Nerd 2019</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto nisi quidem perspiciatis temporibus ipsam..</p>
          </div>
        </div>
         {/* first card ends here */}
          {/* second card */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 ">
          <img src={img2} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modena Nerd 2019</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto nisi quidem perspiciatis temporibus ipsam..</p>
          </div>
        </div>
         {/* second card ends here */}
          {/* third card */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 ">
          <img src={img3} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modena Nerd 2019</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto nisi quidem perspiciatis temporibus ipsam..</p>
          </div>
        </div>
         {/* third card ends here */}
          {/* forth card */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 ">
          <img src={img4} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modena Nerd 2019</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto nisi quidem perspiciatis temporibus ipsam..</p>
          </div>
        </div>
         {/* forth card ends here */}
          {/* fifth card */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 ">
          <img src={img5} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modena Nerd 2019</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto nisi quidem perspiciatis temporibus ipsam..</p>
          </div>
        </div>
         {/* fifth card ends here */}
          {/* sixth card */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 ">
          <img src={img6} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modena Nerd 2019</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto nisi quidem perspiciatis temporibus ipsam..</p>
          </div>
        </div>
         {/* sixth card ends here */}
          {/* seventh card */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 ">
          <img src={img7} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modena Nerd 2019</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto nisi quidem perspiciatis temporibus ipsam..</p>
          </div>
        </div>
         {/* seventh card ends here */}
          {/* Eighth card */}
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 ">
          <img src={img8} alt="" />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modena Nerd 2019</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto nisi quidem perspiciatis temporibus ipsam..</p>
          </div>
        </div>
         {/* Eighth card ends here */}
        
        </div>
      </div>
    </div>
  )
}

export default EventPage