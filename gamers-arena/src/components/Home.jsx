import React from 'react'
import vid from '../Video/home video.mp4'
import Typewriter from 'typewriter-effect';
import { BsChatQuoteFill } from 'react-icons/bs'
import gamer from '../Images/Game analytics-amico.svg'
import { FaTelegramPlane } from 'react-icons/fa'
import { GiConsoleController, GiChampions } from 'react-icons/gi'
import { MdEmojiEvents } from 'react-icons/md'
import { ImEarth } from 'react-icons/im'
import { BsController } from 'react-icons/bs'
import { GrInstall } from 'react-icons/gr'

const Home = () => {
    return (
        <div>
            <div className='max-w-[1920px] mx-auto relative'>
                <video src={vid} autoPlay muted loop className=' opacity-90' />
                <span className='  w-full text-center justify-center flex flex-col absolute top-0 mt-[20%] text-white '>
                    <p className='  text-xl sm:text-2xl md:text-8xl font-extrabold italic'>Gamers Arena</p>
                    <h1 className=' md:text-4xl sm:text-2xl text-lg font-bold md:py-4'>Grow With Gamers</h1>
                    <div className='flex justify-center items-center'>
                        <span className='md:text-4xl sm:text-lg py-2 pl-2 md:pl-3  text-md font-bold  '>
                            <Typewriter
                                options={{

                                    strings: ['Compete', 'Chat', 'Fun'],
                                    deleteSpeed: '150',
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                            
                        </span>
                    </div>
                </span>
                <div className=' flex flex-wrap justify-center text-center mx-auto bg-[#600300] mt-1 rounded-xl'>
                    <h1 className=' font-medium mr-6 mt-8 text-white italic text-xl sm:text-2xl md:text-3xl'>we are organizers of gaming events</h1>
                    <button className=' bg-white text-red-600  flex justify-center rounded-xl py-3 w-[200px] md:font-semibold  text-sm sm:text-lg md:text-xl  my-6 italic'>Ask For a Quote <BsChatQuoteFill className='ml-2 mt-1' /></button>

                </div>
            </div>
            <div className=' w-full py-1'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                    <img className=' w-[200px] md:w-[400px] mx-auto my-4 rounded-3xl ' src={gamer} alt='' />
                    <div className='flex flex-col justify-center'>
                        <p className='text-red-600 font-bold text-2xl '>Gamers Arena</p>
                        <h1 className='md:text-4xl sm:text-2xl text-xl font-bold py-2'>
                            Get Ready TO Dive Into Magical world of <span className='md:text-6xl text-4xl text-red-600'>Gaming</span>
                        </h1>
                        <p>
                            Gamers Arena was born from the desire to share and spread the passion for video games. The goal of our team is to create opportunities for meeting and sporting competition in places where children, families and proGamers can have fun thanks to the variety of entertainment offered by electronic games.
                        </p>
                        <button className='text-white rounded-xl py-3 w-[200px] md:font-semibold flex justify-center  text-sm sm:text-lg md:text-xl my-6 mx-auto md:mx-0 bg-red-700 hover:text-red-600 hover:bg-white duration-500 ease-in-out'>Let's Dive<FaTelegramPlane size={30} className='ml-2' /></button>
                    </div>

                </div>
                <div className='w-full py-16 bg-[#600300] rounded-xl text-white'>
                    <div className='max-w-[1400px] mx-auto grid md:grid-cols-3'>
                        <div className=' flex flex-col justify-center items-center md:border-r '>
                            <GiChampions size={150} className='hover:scale-105 hover:translate-y-3 duration-500 ease-in-out mb-12 ' />
                            <h1 className='text-xl md:text-2xl font-semibold '>CHAMPIONSHIP</h1>
                        </div>
                        <div className=' flex flex-col justify-center items-center md:border-r'>
                            <MdEmojiEvents size={200} className='hover:scale-105 hover:translate-y-3 duration-500 ease-in-out' />
                            <h1 className='text-xl md:text-2xl font-semibold mt-1'>EVENTS</h1>
                        </div>
                        <div className=' flex flex-col justify-center items-center'>
                            <GiConsoleController size={200} className='hover:scale-105 hover:translate-y-3 duration-500 ease-in-out' />
                            <h1 className='text-xl md:text-2xl font-semibold mt-1'>Games</h1>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-full py-16 mt-5  rounded-xl text-[#600300]'>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3'>
                    <div className=' flex flex-col  items-center justify-center  md:border-r '>
                        <ImEarth size={50} />
                        <h1 className='text-xl md:text-2xl font-semibold mt-5'>EVENTS</h1>
                        <p className=' text-center mx-3 mt-5 font-semibold'> We have been active since 2014 as organizers of video games events in collaboration with the main exhibition bodies.</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center md:border-r'>
                        <BsController size={50} className=' mt-2 ' />
                        <h1 className='text-xl md:text-2xl font-semibold mt-5'>CHAMPIONSHIP</h1>
                        <p className=' text-center mx-3 mt-5 font-semibold'> Gamers Arena manages the most important Italian expo events contributing to the growth of the sports sector, organizing over 100 tournaments a year with more than 1000 participating players..</p>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <GrInstall size={50} className=' mt-2  ' />
                        <h1 className='text-xl md:text-2xl font-semibold mt-5'>INSTALLATIONS</h1>
                        <p className=' text-center mx-3 mt-5 font-semibold'>We personally take care of the gaming stations with the best professional products. Suitable both for the highest expo competitions and for the fun of the casual player.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home