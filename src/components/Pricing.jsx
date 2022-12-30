import React from "react";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "$9.99",
      features: [
        "10 watermarked images/month",
        "Custom text and logo watermarks",
        "Basic font and color options",
      ],
    },
    {
      id: 2,
      name: "Pro",
      price: "$19.99",
      features: [
        "Unlimited watermarked images",
        "Custom text and logo watermarks",
        "Advanced font and color options",
        "Priority support",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: "$49.99",
      features: [
        "Unlimited watermarked images",
        "Custom text and logo watermarks",
        "Advanced font and color options",
        "Priority support",
        "Access to premium watermark templates",
      ],
    },
  ];

  return (
    <div className="container mx-auto py-6 mt-12 px-4">
      <h2 className="text-3xl font-bold text-center text-sky-800 mb-6">
        Pricing Plans
      </h2>
      <div className="flex flex-col md:flex-row justify-around">
        {plans.map((plan) => (
          <div key={plan.id} className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold text-center text-sky-800 mb-4">
                {plan.name}
              </h3>
              <div className="text-center mb-4">
                <span className="text-4xl font-bold block text-sky-800">
                  {plan.price}
                </span>
                <span className="text-sm font-light text-gray-600">
                  / month
                </span>
              </div>
              <ul className="list-disc list-inside mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="py-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-sky-700 hover:bg-sky-800 text-white font-bold py-3 rounded-full focus:outline-none">
                Choose Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
