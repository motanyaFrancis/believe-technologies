'use client'

import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

type VisualFeatureSectionProps = {
  title: string;
  description: string;
  primaryImage: string;
  secondaryImage: string;
  circleOverlayImage?: string;
  buttonLabel: string;
  buttonUrl: string;
  videoUrl: string; // <-- NEW PROP
};

const VisualFeatureSection: React.FC<VisualFeatureSectionProps> = ({
  title,
  description,
  primaryImage,
  secondaryImage,
  circleOverlayImage,
  buttonLabel,
  buttonUrl,
  videoUrl, // <-- RECEIVED HERE
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
          <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
            <div className="overflow-hidden aspect-w-3 aspect-h-4">
              <img
                className="object-cover bg-center object-top origin-top scale-100"
                src={primaryImage}
                alt="Primary"
              />
            </div>

            <div className="relative">
              <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                <img
                  className="object-cover bg-center scale-100 lg:origin-bottom-right"
                  src={secondaryImage}
                  alt="Secondary"
                />
              </div>

              <div className="absolute inset-0 grid w-full h-full place-items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center w-12 h-12 text-blue-600 bg-white rounded-full cursor-pointer shadow-md lg:w-20 lg:h-20"
                >
                  <svg
                    className="w-6 h-6 lg:w-8 lg:h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                  </svg>
                </button>
              </div>
            </div>

            {circleOverlayImage && (
              <div className="absolute -translate-x-1/2 left-1/2 -top-16 cursor-pointer hover:">
                <img
                  className="w-32 h-32"
                  src={circleOverlayImage}
                  alt="Overlay"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              {description}
            </p>

            <a
              href={buttonUrl}
              className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200  hover:opacity-90 focus:opacity-90 lg:mt-auto bg-gradient-to-r from-fuchsia-600 to-blue-600"
              role="button"
            >
              {buttonLabel}
              <svg
                className="w-5 h-5 ml-8 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-70">
          <div className="relative w-full max-w-3xl px-4">
            <div className="aspect-16/9">
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-0 right-0 p-2 px-3 mt-2 mr-2 text-white bg-gray-800/50 rounded-full hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default VisualFeatureSection;
