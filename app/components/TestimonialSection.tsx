import React from 'react';

type TestimonialSectionProps = {
  emoji?: string;
  testimonialText: string;
  mainImageSrc: string;
  dotsPatternSrc?: string;
  heading: string;
  paragraphs: string[];
  className?: string;
};

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  emoji = '"',
  testimonialText,
  mainImageSrc,
  dotsPatternSrc = 'https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg',
  heading,
  paragraphs,
  className = '',
}) => {
  return (
    <section className={`py-10 bg-white sm:py-16 lg:py-24 ${className}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src={dotsPatternSrc}
              alt="Dots pattern"
            />
            <div className="pl-12 pr-6">
              <img className="relative" src={mainImageSrc} alt="Main visual" />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-blue-600  sm:max-w-md xl:max-w-md">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">{emoji}</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        {testimonialText}
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              {heading}
            </h2>
            {paragraphs.map((para, idx) => (
              <p key={idx} className="text-xl leading-relaxed text-gray-900 mt-6">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
