import React, { useState } from 'react';
import truckImg from '../../assets/truck.png';
import awardImg from '../../assets/quality.png';
import messageImg from '../../assets/online.png';
import cardImg from '../../assets/payment.png';

export default function FeaturesSection() {
  const features = [
    {
      icon: <img src={truckImg} alt="Truck" className="w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover" />,
      title: "PAN India Delivery",
      description: "Get your products delivered at your home with ease.",
      fullDetails: "We provide doorstep delivery across every state and city of India with real-time tracking and hassle-free shipping support.",
    },
    {
      icon: <img src={awardImg} alt="Award" className="w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover" />,
      title: "Quality Assurance",
      description: "Premium quality with easy returns.",
      fullDetails: "All products undergo strict quality checks. If not satisfied, return within 7 days. We ensure top-grade materials only.",
    },
    {
      icon: <img src={messageImg} alt="Message" className="w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover" />,
      title: "Online Support",
      description: "24/7 customer service available.",
      fullDetails: "Our dedicated team is always online to answer queries, provide support, and help with orders or complaints.",
    },
    {
      icon: <img src={cardImg} alt="Card" className="w-16 h-16 md:w-20 md:h-20 rounded-3xl object-cover" />,
      title: "Flexible Payment",
      description: "Multiple payment options available.",
      fullDetails: "We accept cards, UPI, NetBanking, EMI, and even Cash-on-Delivery for a smooth checkout experience.",
    },
  ];

  const repeatedFeatures = Array(6).fill(features).flat();
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="bg-amber-50 py-12 overflow-hidden relative">
      {/* Sliding Cards */}
      <div className="group overflow-hidden">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {repeatedFeatures.map((feature, index) => (
            <div
              key={index}
              onClick={() => setSelectedFeature(feature)}
              className="bg-[#2a2e0f] text-white w-[250px] md:w-[300px] rounded-3xl p-6 mx-3 flex-shrink-0 cursor-pointer hover:scale-105 transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Details Section */}
      {selectedFeature && (
        <div className="mt-12 max-w-4xl mx-auto bg-gray-200 p-6 rounded-xl shadow-lg border border-gray-300 transition-all duration-500 relative">
          <span
            onClick={() => setSelectedFeature(null)}
            className="absolute top-3 right-4 text-xl text-gray-600 cursor-pointer hover:text-black"
            title="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#2a2e0f]">
            {selectedFeature.title}
          </h2>
          <p className="text-gray-700 text-base md:text-lg text-center">
            {selectedFeature.fullDetails}
          </p>
        </div>
      )}
    </div>
  );
}
