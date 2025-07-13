import React from 'react'

const plans = [
  {
    name: "Home Services",
    price: "$9",
    features: [
      'Weekly checkups',
       'ensure top-quality service',
        '24/7 assistance'
    ],
    button: "Get Services"
  },
  {
    name: "Automobile Services",
    price: "$29",
    features: [
   '   Weekly upadation',
'free glass Protection',
'Full Root Access',
'24/7 Availale for assistance,'
    ],
    button: "Get Services"
  },
  {
    name: "Cleaning Services",
    price: "$99",
    features: [
     'cover all Home area',
'Customize service Availale',
'Ensure Security',
'Provide Top top-quality service'
    ],
    button: "Get Services"
  }
];

const Pricing = () => {
  return (
    <div className="  py-14 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Pricing</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div key={plan.name} className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
            <ul className="mb-6 space-y-2 text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing