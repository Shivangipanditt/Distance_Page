import React from "react";
import { FaCheck } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/crmSolutions.webp",
    title: "CRM Solutions",
    subtitle: "Customer Relationship Management",
    description:
      "Streamline customer relationships and boost sales efficiency.",
  },
  {
    id: 2,
    image: "/ERPSystem.webp",
    title: "ERP System",
    subtitle: "Enterprise Resource Planning",
    description:
      "Manage business operations efficiently and enhance productivity.",
  },
  {
    id: 3,
    image: "/digital-marketing.webp",
    title: "Digital Marketing",
    subtitle: "Customer Relationship Management",
    description:
      "Grow your audience and engagement through digital strategies.",
  },
  {
    id: 4,
    image: "/lms.webp",
    title: "Online LMS",
    subtitle: "Learning Management System",
    description:
      "Simplify online learning and improve student engagement.",
  },
  {
    id: 5,
    image: "/automation.webp",
    title: "Automation",
    subtitle: "Customer Relationship Management",
    description:
      "Automate workflows to save time and reduce manual effort.",
  },

];

export default function CardSection() {
  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 flex justify-center items-center gap-2">
          Our Beneficial Products{" "}
          <span className="text-orange-500 text-2xl">💼</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="justify-center items-center px-38">
   <div className="flex flex-wrap justify-start gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="w-80 bg-white  shadow-md overflow-hidden  hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-extrabold text-gray-900">
                {item.title}
              </h2>

              <div className="inline-block mt-2 bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-semibold">
                {item.subtitle}
              </div>

              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>

              {/* Features */}
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
        ))}
      </div>
      </div>
   
    </section>
  );
}
