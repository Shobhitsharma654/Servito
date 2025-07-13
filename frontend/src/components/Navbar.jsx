
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [isOpen , setIsOpen] = useState(false)
const navigate = useNavigate()


  return (
    <nav className="flex items-center justify-between px-8 py-4 fixed top-0 left-0 z-50 w-full bg-gray-50 shadow ">
      {/* Logo */}
      <div className="font-bold text-2xl text-gray-800">
        Servito
      </div>
      {/* Navigation Links */}
      <ul className="flex gap-8 font-semibold list-none m-0 p-0">
        <li>
          <Link onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} to="/" className="text-gray-800 no-underline hover:text-blue-600 text-lg transition">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-gray-800 no-underline hover:text-blue-600 transition text-lg ">About</Link>
        </li>
        <li>
          <Link onClick={()=>window.scrollTo({top:100, behavior:'smooth'})} to="/services" className="text-gray-800 no-underline hover:text-blue-600 transition text-lg ">Services</Link>
        </li>
        <li>
          <Link onClick={()=> setIsOpen(!isOpen)} className="text-gray-800 no-underline hover:text-blue-600 transition text-lg ">Pricing</Link>
        </li>
        <li>
          <Link onClick={()=> setIsOpen(!isOpen)} className="text-gray-800 no-underline hover:text-blue-600 transition text-lg ">Contact Us</Link>
        </li>
      </ul>
      {/* Auth Buttons */}
      <div className="flex gap-4">
        <button className="px-5 py-2 border  border-green-800 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-gray-100 transition ">
          Login
        </button>
        <button className="px-5 py-2 font-semibold border-none bg-red-600 text-white rounded-lg hover:bg-red-500 text-lg transition">
          Sign Up
        </button>
      </div>
    </nav>
      
  )
}
export default Navbar