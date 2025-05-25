import React from "react";

type Feature = {
  text: string;
};

type CallToActionWithFeaturesProps = {
  title: string;
  features: Feature[];
  primaryButtonLabel: string;
  primaryButtonUrl: string;
  secondaryButtonLabel: string;
  secondaryButtonUrl: string;
  imageUrl: string;
};

const CallToActionWithFeatures: React.FC<CallToActionWithFeaturesProps> = ({
  title,
  features,
  primaryButtonLabel,
  primaryButtonUrl,
  secondaryButtonLabel,
  secondaryButtonUrl,
  imageUrl,
}) => {
  return (
    <section className="bg-black 2xl:py-24 2xl:bg-gray-50">
      <div className="px-4 mx-auto bg-black max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
          <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
            {/* Image */}
            <div className="lg:order-2 2xl:-mr-24">
              <img
                className="w-full shadow-xl "
                src={imageUrl}
                alt="Dashboard Preview"
              />
            </div>

            {/* Text and Features */}
            <div className="lg:order-1">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-snug">
                {title}
              </h2>

              <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 font-medium text-white">{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                <a
                  href={primaryButtonUrl}
                  className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent hover:bg-blue-700 focus:bg-blue-700"
                >
                  <svg
                    className="w-5 h-5 mr-2 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {primaryButtonLabel}
                </a>
                <a
                  href={secondaryButtonUrl}
                  className="inline-flex items-center justify-center px-4 py-4 mt-5 text-base font-semibold text-white transition-all duration-200 bg-transparent border border-white sm:mt-0 hover:bg-white hover:text-black"
                >
                  {secondaryButtonLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionWithFeatures;
