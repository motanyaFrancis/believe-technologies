import React from "react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type FeaturesSectionProps = {
  badgeText: string;
  heading: string;
  features: Feature[];
  imageUrl: string;
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  badgeText,
  heading,
  features,
  imageUrl,
}) => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            {badgeText}
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            {features.map((feature, index) => (
              <div className="flex items-start" key={index}>
                <div className="flex-shrink-0 w-9 h-9 text-primary">
                  {feature.icon}
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <img
              className="w-full rounded-lg shadow-xl"
              src={imageUrl}
              alt="Feature screenshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
