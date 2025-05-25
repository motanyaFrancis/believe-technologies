import React from "react";

type IntegrationHighlightProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
  imageUrl: string;
};

const IntegrationHighlight: React.FC<IntegrationHighlightProps> = ({
  title,
  description,
  buttonLabel,
  buttonUrl,
  imageUrl,
}) => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          {/* Image Section */}
          <div>
            <img
              className="w-full max-w-md mx-auto"
              src={imageUrl}
              alt="Service Integration Illustration"
            />
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-base text-gray-600">{description}</p>
            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 mt-9 hover:bg-blue-700 focus:bg-blue-700"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationHighlight;
