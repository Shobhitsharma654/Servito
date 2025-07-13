import React from 'react'
import { assets } from '../assets/assets'


const Hero = () => {
  return (
    <div className='mt-2 h-screen items-center  flex  flex-cols-2   justify-around'>
            <div className='items-center  justify-center  px-4 space-y-9 '>
                <h1 className='text-3xl font-semibold my-4'>Seamless Solutions,<br />Anytime, Anywhere At Your Doorstep! </h1>
                <p className='font-medium w-auto'>We connect users with trusted service providers for plumbing, electrical work, car washing, <br />beauty, and more making service booking easy and reliable.</p>
               <div className='flex gap-5 my-4'>
                 <button className='flex items-center gap-2 px-7 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-md font-medium cursor-pointer text-white'>Read More</button>
                <button className='flex items-center gap-2 px-7 py-3 bg-red-500 hover:bg-red-600 transition rounded-md font-medium cursor-pointer text-white'>Contact Us</button>
               </div>
            </div>
            <div>
                <img className='h-65 w-65' src={assets.logo} alt="" />
            </div>
    </div>
  )
}

export default Hero