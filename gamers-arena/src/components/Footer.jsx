import React from 'react'
import logo from '../Images/logo.png'
import {  FaFacebookSquare,  FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
  
    
    <div className=' max-w-[1920px] mx-auto bg-[#600300] '>
      <div className=' max-w-[1240px] mx-auto pt-8  grid lg:grid-cols-3 text-gray-300 '>
        <div className=' items-center text-center sm:items-start sm:text-left mx-auto '>
          <img src={logo} alt="" className='w-32 mx-auto md:mx-0' />
          <p className='py-4 '>Gamers Areana associazione sportiva<br /> dilettantistica<br />
            Sede legale: Viale Campi Elisi, 22 – 34143<br /> Trieste (TS)<br />
            Sede operativa: Modena (MO)<br />
            Cellulare: +39 393 2471192<br />
            Email: Info@gamersarena.it<br />
            C.F.: 90143910322<br />
            P.Iva: 01275990321.</p>

          <div className='flex gap-10 md:w-[75%] my-3 ml-[50px] sm:ml-0'>

            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            
          </div>

        </div>
        <div className='lg:col-span-2 flex justify-between  mt-6'>
          <div>
            <h1 className='font-medium text-gray-400'>Solutions</h1>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium text-gray-400'>Support</h1>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API status</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium text-gray-400'>Company</h1>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
              <li className='py-2 text-sm'>Careers</li>
            </ul>
          </div>
          <div>
            <h1 className='font-medium text-gray-400'>Legal</h1>
            <ul>
              <li className='py-2 text-sm'>Claim</li>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>

            </ul>

          </div>

        </div>



      </div>
      <div className=' text-right text-white mx-auto'>
        &copy;
        2023 -
        Gamers Arena. All rights reserved.
      </div>
    </div>
 



  )
}

export default Footer