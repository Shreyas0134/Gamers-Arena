import React, { useState } from 'react'
import logo from '../Images/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    function toggle() {
        setNav(!nav)
    }

    if (nav) {
        document.body.classList.add('overflow-hidden');
    } else {
        document.body.classList.remove('overflow-hidden');
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  relative'>
            <img src={logo} alt="/" className=' w-32 ' />
            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link to='/membership'>Membership</Link>
                </li>
                <li className='p-4'>
                    <Link to='/eventpage'>Event</Link>
                </li>
                <li className='p-4'>Products</li>
                <li className='p-4'>Contact Us</li>
            </ul>
            <div className='block md:hidden ease-in-out' onClick={toggle}>
                {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
            </div>
            <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0  w-[60%] h-full border-r text-white border-r-gray-900  bg-[#000300] ease-in-out duration-500 z-50 '}>

                <ul className='p-4 uppercase'>
                    <img src={logo} alt="/" className=' w-32 ' />
                    <li className='p-4 mt-2 border-b'><Link to='/'>Home</Link></li>
                    <li className='p-4 border-b'> <Link to='/membership'>Membership</Link></li>
                    <li className='p-4 border-b'> <Link to='/eventpage'>Event</Link></li>
                    <li className='p-4 border-b'>Products</li>
                    <li className='p-4 border-b'>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar