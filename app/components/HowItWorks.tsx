import React from "react";

// Define the steps for the "How It Works" section
const steps = [
  {
    number: "01",
    title: "Understand Your Business Needs",
    description:
      "We start by learning about your business goals, existing systems, and specific operational challenges to ensure tailored solutions.",
  },
  {
    number: "02",
    title: "Propose a Scalable Solution",
    description:
      "Our team recommends the right combination of ERP modules, integrations, and infrastructure to support your growth and efficiency.",
  },
  {
    number: "03",
    title: "Customize and Develop",
    description:
      "We develop custom software or adapt existing platforms to your specific workflows, including M-Pesa, QuickBooks, and API integrations.",
  },
  {
    number: "04",
    title: "Deploy & Integrate Systems",
    description:
      "We deploy your solution, integrate it with your current tools or legacy systems, and ensure seamless operation across departments.",
  },
  {
    number: "05",
    title: "Train Your Team",
    description:
      "We provide hands-on training and documentation to ensure your team is confident using the new systems effectively.",
  },
  {
    number: "06",
    title: "Ongoing Support & Optimization",
    description:
      "After launch, we offer continuous support, system updates, and optimizations to adapt with your evolving business needs.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    // Section container with padding and white background
    <section className="py-20 px-4 bg-white font-inter">
      <div className="max-w-7xl mx-auto">
        
        {/* Grid container for the steps.
            On all screen sizes, it's a single column grid (grid-cols-1).
            gap-y-20 provides vertical spacing between each step, ensuring they are on separate rows. */}
        <div className="grid grid-cols-1 gap-y-12">
          {steps.map((step, index) => {
            // Determine horizontal alignment for the zigzag pattern on large screens.
            // The pattern is left, center, right, center, then repeats.
            // This corresponds to index % 4:
            // 0 -> left (justify-self-start)
            // 1 -> center (justify-self-center)
            // 2 -> right (justify-self-end)
            // 3 -> center (justify-self-center)
            const justifySelfClass =
              index % 4 === 0
                ? "lg:justify-self-start"
                : index % 4 === 1
                ? "lg:justify-self-center"
                : index % 4 === 2
                ? "lg:justify-self-end"
                : "lg:justify-self-center"; // For index % 4 === 3

            return (
              <div
                key={step.number}
                // Apply the horizontal alignment class for large screens.
                // flex items-start space-x-4 ensures the number and text are aligned within the step.
                // Added lg:w-1/3 to make each step container take up one-third of the width on large screens.
                className={`flex items-start space-x-4 w-full lg:w-1/3 ${justifySelfClass}`}
              >
                {/* Step number */}
                <div className="text-blue-600 font-light text-5xl">{step.number}</div>
                {/* Step title and description */}
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-md text-gray-600 text-justify">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
