import React from 'react'
import { logo } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-[10px] '>
        <img src={logo} alt="logo" className='w-[150px] sm:w-[200px]'/>
        <div className=' hidden sm:flex gap-[40px] text-sm items-center'>
            <div>Work</div>
            <div>Solution</div>
            <div>Service</div>
            <div>Tech for Hire</div>
            <div>About Us</div>
            <div>Blog</div>
            <div>
                <button type='button' className='rounded-full px-5 py-4 bg-[#3C2837] text-white font-black cursor-pointer'>Request a quote</button>
            </div>
        </div>
        <div className='bg-[#3C2837] rounded-full w-[40px] h-[40px] flex items-center justify-center sm:hidden'>
        <FontAwesomeIcon icon={faBars} size='xs' color='#fff'/>
        </div>
    </div>
  )
}

export default Navbar