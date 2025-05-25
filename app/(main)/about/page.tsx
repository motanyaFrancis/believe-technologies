import AboutSection from "@components/AboutSection";
import CallToActionWithFeatures from "@components/CallToActionWithFeatures";
import TestimonialSection from '@components/TestimonialSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Believe Technologies',
};

export default function About() {
  return (
    <>
      <AboutSection />

      <TestimonialSection
        emoji=""
        testimonialText="Believe Technologies transformed the way we operate — their ERP and payment integrations saved us hours of manual work every week."
        mainImageSrc="/images/services/solution.jpg"
        heading="Trusted by businesses In Nairobi"
        paragraphs={[
          'From SMEs to growing enterprises, our clients rely on Believe Technologies for tailored ERP systems, fast integrations, and real-time data automation.',
          'We’re proud to build with purpose — empowering local businesses through efficient, scalable tech that actually fits their needs.',
        ]}
      />

      <CallToActionWithFeatures
        title="Ready to Digitize Your Operations with Believe?"
        features={[
          { text: "Modular ERP for HR, Finance, Fleet, and More" },
          { text: "Secure M-Pesa & Card Payment Integrations" },
          { text: "Custom QuickBooks & Bank API Integration" },
          { text: "Built for African Business Needs" },
          { text: "Local Support & Continuous Optimization" },
          { text: "Affordable, Scalable, Reliable" },
        ]}
        primaryButtonLabel="Get Started Today"
        primaryButtonUrl="#"
        secondaryButtonLabel="See Full Solutions"
        secondaryButtonUrl="#"
        imageUrl="/images/services/erp-solutions.jpg"
      />
    </>
  );
}
