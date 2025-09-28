import React from "react";
import { FaCheck } from "react-icons/fa";

const Card = () => {
  return (
    <div className="w-80 bg-white  shadow-lg overflow-hidden mt-10 ml-10 border border-gray-200">
      {/* Image Section */}
      <div className="w-full h-48">
        <img
          src="/card1.webp"
          alt="CRM Card"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-2xl font-extrabold text-gray-900">
          CRM Solutions
        </h2>

        {/* Subtitle */}
        <div className="inline-block mt-2 bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-semibold">
          Customer Relationship Management
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Streamline customer relationships and boost sales efficiency.
        </p>

        {/* Features List */}
        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
          <li className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-0.5" />
            Manage customer data easily
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-0.5" />
            Track leads & sales pipeline
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-0.5" />
            Boost customer engagement
          </li>
          <li className="flex items-start gap-2">
            <FaCheck className="text-green-500 mt-0.5" />
            Generate real-time reports
          </li>
        </ul>

        {/* Button */}
        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-md flex items-center justify-center gap-2 transition-all duration-200 shadow-md">
          Let’s Connect →
        </button>
      </div>
    </div>
  );
};

export default Card;
