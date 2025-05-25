import React from "react";

interface SectionWithImageProps {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl: string;
  reverse?: boolean; // If true, image comes before text
}

const SectionWithImage: React.FC<SectionWithImageProps> = ({
  title,
  subtitle,
  content,
  imageUrl,
  reverse = false,
}) => {
  return (
    <section className="w-full py-36 bg-gray-100">
      <div className={`container mx-auto flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center`}>
        <div className="md:w-1/2 px-6">
          {/* <h2 className="text-3xl font-bold mb-4">{title}</h2> */}
          {subtitle && <h3 className="text-4xl text-slate-600 font-medium mb-2">{subtitle}</h3>}
          <p className="text-lg text-gray-700">{content}</p>
        </div>
        <div className="md:w-1/2 px-6 mt-8 md:mt-0">
          <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
};

export default SectionWithImage;
