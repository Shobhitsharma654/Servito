import React from 'react'
import { assets } from '../assets/assets'

const AboutPage = () => {
  return (
    <div className='w-full h-50vh flex my-19'>
        <div className='flex flex-col ml-20 w-full gap-4 p-8'>
            <h2 className='font-bold text-2xl '>About Us</h2>
            <p className='mt-4 text-gray-900'>Welcome to our one-stop platform for all your service needs! We connect users with trusted professionals offering a range of services, including plumbing, electrical repairs, car washing, beauty treatments, and more. Whether it's home maintenance, automobile care, or cleaning services, we make booking easy, quick, and reliable. With verified service providers, location-based recommendations, and transparent ratings, we ensure top-quality service at your convenience. Our mission is to simplify your everyday tasks by bringing the right professionals to your doorstep.</p>
        <button className=' items-center w-[10vw] gap-2 px-7 py-3 my-4 bg-red-500 hover:bg-red-600 transition rounded-md font-medium cursor-pointer text-white'>Read More</button>
        </div>
        <img className='h-[60vh] w-[60vw] object-fit px-20' src={assets.aboutImg} alt="" />
    </div>
  )
}

export default AboutPage