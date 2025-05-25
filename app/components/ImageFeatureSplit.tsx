import React from "react";

type ImageFeatureSplitProps = {
  label: string;
  title: string;
  description: string;
  subDescription?: string;
  buttonLabel: string;
  buttonUrl: string;
  foregroundImage: string;
  backgroundImage: string;
};

const ImageFeatureSplit: React.FC<ImageFeatureSplitProps> = ({
  label,
  title,
  description,
  subDescription,
  buttonLabel,
  buttonUrl,
  foregroundImage,
  backgroundImage,
}) => {
  return (
    <section className="py-10 bg-gray-800 lg:py-0">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
          {/* Image Section */}
          <div className="h-full pr-12 lg:order-2 lg:mb-40">
            <div className="relative h-full lg:h-auto">
              <div className="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                <img
                  className="object-cover object-right w-full h-full scale-150"
                  src={backgroundImage}
                  alt="Background Decoration"
                />
              </div>
              <div className="relative lg:-top-12">
                <img src={foregroundImage} alt="Main Visual" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {label}
              </p>
              <h2 className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                {title}
              </h2>
              <p className="text-xl leading-relaxed text-gray-200 mt-9">
                {description}
              </p>
              {subDescription && (
                <p className="mt-6 text-xl leading-relaxed text-gray-200">
                  {subDescription}
                </p>
              )}
              <a
                href={buttonUrl}
                className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 hover:bg-blue-700 focus:bg-blue-700"
                role="button"
              >
                {buttonLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageFeatureSplit;
