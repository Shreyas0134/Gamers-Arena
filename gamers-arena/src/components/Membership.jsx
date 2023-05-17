import React from 'react'
import video from '../Video/member.mp4'

import mem from '../Images/membership.jpg'

const Membership = () => {
  return (
    <div>
      <div className='max-w-[1920px] mx-auto relative'>
        <img src={mem} alt='' />
        <div className='  w-full mx-auto text-center justify-center flex flex-col absolute top-0 mt-[8%] text-white '>
          <p className='  text-xl sm:text-2xl md:text-8xl font-extrabold italic'>Membership</p>
          <h1 className=' md:text-4xl sm:text-2xl text-lg font-bold md:py-4'>Connect with us</h1>
        </div>
      </div>
      <div className='max-w-[1920px] mx-auto  bg-gradient-to-b from-black to-[#990000] text-white '>
        <div className=' flex justify-center pt-4  mx-auto'>
          <p className='memp text-xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold italic  '>What is the membership Card?</p>
        </div>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2  p-5'>

          <video src={video} autoPlay muted loop className='p-5 mx-auto my-auto' />
          <div className='  text-sm  md:text-2xl p-5  flex  '>

            <p>
              The membership card is the means by which a natural person proves to be linked to a sector of a Sports Promotion Agency, as a member of an affiliated association. It allows therefore to participate in all the activities organized by the Sector and by the Associations affiliated to it. The card also demonstrates that the person carries out sporting and/or recreational-recreational activities. The reference year is the solar year: from 1 January to 31 December, therefore, regardless of the date on which the card is obtained, starting from 1 January of the following year it must be renewed.
            </p>


          </div>
        </div>
       
        <div className='flex justify-center p-5'>
          <button className='text-white bg-[#600300]  rounded-57 p-4 rounded-[57px] text-sm sm:text-base md:text-2xl font-semibold tracking-widest btn italic btnfont'>
            Get your membership card now!
          </button>
        </div>
        

      </div>
    </div>

  )
}

export default Membership