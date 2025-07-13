import React from 'react'
import user from '../assets/user.png'; // Placeholder for user image

const testimonials = [
  {
    image: user,
    name: "John Doe",
    feedback: "Servita provided excellent service! The team was professional and quick. Highly recommended.",
    location: "New York, USA"
  },
  {
    image: user,
    name: "Aisha Khan",
    feedback: "I am very satisfied with the cleaning services. My house has never looked better.",
    location: "London, UK"
  },
  {
    image: user,
    name: "Rahul Sharma",
    feedback: "Prompt response and great customer support. Will use their automobile services again.",
    location: "Delhi, India"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <h2 className="text-4xl my-14 font-bold text-center text-gray-800 mb-8">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-blue-100 rounded-lg shadow p-6 flex flex-col  items-center">
            <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center  text-2xl font-bold text-blue-600 mb-4">
              <img src={t.image} alt={t.name} className="w-full h-full rounded-full object-cover" />
            </div>
            <h2 className='font-semibold  mb-2'>{t.name}</h2>
            <h2 className='font-semibold  mb-2'>{t.name}</h2>
            <p className="text-gray-700 text-center text-sm mb-4">"{t.feedback}"</p>
            <div className="text-sm text-gray-500 font-semibold">{t.name}</div>
            <div className="text-xs text-gray-400">{t.location}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials