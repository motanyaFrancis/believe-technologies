// components/FeaturesSection.tsx
import React from "react";
import {
  FaChartLine,
  FaBuilding,
  FaChartBar,
  FaStar,
  FaLayerGroup,
  FaPlug,
} from "react-icons/fa";

const features = [
  {
    title: "Increase sales",
    description:
      "Boost your conversions and revenue with smart tools that optimize your customer journey.",
    icon: FaChartLine,
  },
  {
    title: "Enterprise-ready",
    description:
      "Scalable and secure infrastructure tailored for businesses of all sizes.",
    icon: FaBuilding,
  },
  {
    title: "Unlimited growth",
    description:
      "Scale effortlessly without worrying about performance or limits.",
    icon: FaChartBar,
  },
  {
    title: "Recommended by experts",
    description:
      "Trusted and praised by industry leaders for innovation and reliability.",
    icon: FaStar,
  },
  {
    title: "Modern platform",
    description:
      "Cutting-edge tech stack with modern UI/UX to keep you ahead.",
    icon: FaLayerGroup,
  },
  {
    title: "Integrations",
    description:
      "Connect seamlessly with your existing tools and workflows.",
    icon: FaPlug,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-slate-200 to-gray-100 pb-6">
      <div className="max-w-7xl mx-auto p-0 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-white rounded-2xl shadow-sm">
          <div className="mb-16 text-center">
            <h4 className="uppercase text-center text-slate-600 text-xs mb-4 tracking-widest">
              Features
            </h4>
            <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900">
              How we <span className="text-blue-700">change</span> the game
            </p>
          </div>

          <div className="flex flex-wrap my-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`w-full border-b p-8 ${
                    index % 3 !== 2 ? "lg:border-r" : ""
                  } ${index < 3 ? "md:border-r" : ""} md:w-1/2 lg:w-1/3 ${
                    index >= 3 ? "lg:border-b-0" : ""
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <Icon className="h-6 w-6 text-blue-700" />
                    <div className="ml-4 text-xl font-semibold text-gray-800">
                      {feature.title}
                    </div>
                  </div>
                  <p className="leading-loose text-gray-500">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
