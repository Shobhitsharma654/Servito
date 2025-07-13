import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import aircondtionerImage from '../assets/ac.png'; 
import PlumbingImage from '../assets/plumbing.png'; 
import ElectricianImage from '../assets/electric.png';
import cleaningImage from '../assets/clean.png';
import repair from '../assets/repair.png';
import autoservice from '../assets/auto.png';


const Services = () => {
    const services = [{
        id: 1,
        Image: PlumbingImage,
        title: "Plumbing",
        description: "Fixing leaks, installing faucets, and maintaining pipelines.",
    },
    {
        id: 2,
        Image: ElectricianImage,  
        title: "Electrical",
        description: "Wiring, circuit installation, and electrical repairs.",
    },{
        id: 3,
        Image: cleaningImage,
        title: "Cleaning Services",
        description: "Professional house cleaning, pest control, and laundry services for a spotless space.",
    },{
        id: 4,
        Image: aircondtionerImage,
        title: "Air Conditioning Maintenance",
        description: "Installation, repair, and maintenance of air conditioning systems for optimal cooling.",
    },{
        id: 5,
        Image: repair,
        title: "Appliance Repair and Maintenance",
        description: "Repairing and maintaining household appliances like refrigerators, washing machines, and ovens.",
    },{
        id: 6,
        Image: autoservice,
        title: "Automobile Services",
        description: "Convenient car washing, detailing, and repair services at your location.",
    }
]
  return (
    <div className='flex flex-col items-center mb-15'>
        <h2 className='text-3xl font-semibold mb-5 text-center'>Our Services</h2>
        <p className='text-center text-sm'>We offer a wide range of services to meet your needs.</p>

            <div className='grid grid-cols-3 mt-15 py-6 gap-11'>
       {services.map((item,index)=>(
          <div key={index} className='flex flex-col items-center justify-between p-3 mb-4 rounded-2xl hover:-translate-y-1 h-64 w-90 transition duration-300 shadow-lg bg-white  '>
                    <img  className='rounded-full h-20 w-20 border border-b-amber-100 object-cover object-right-bottom cursor-pointer' alt="" src={item.Image} />
                    <h3 className='font-semibold mt-2 truncate'>{item.title}</h3>
                    <p className='text-sm text-center text-gray-400 mt-2'>
                    {item.description}
                    </p>
                        <a className='flex items-center gap-1 text-sm text-blue-600 mt-1 pr-1'>
                            Read More 
                        <FaArrowRightLong />
                        </a>
        
                 </div>
       ))}
       
            </div>
    </div>
  )
}

export default Services