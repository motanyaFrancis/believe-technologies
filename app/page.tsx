import Hero from '@components/HeroSection';
import Career from '@components/CareerSection';
import Footer from '@components/FooterSection';
import FeaturesSection from "@components/FeaturesSection";
import { CheckIcon, CodeBracketIcon, HeartIcon } from "@heroicons/react/24/outline";
import VisualFeatureSection from "@components/VisualFeatureSection";
import ImageFeatureSplit from "@components/ImageFeatureSplit";
import CallToActionWithFeatures from "@components/CallToActionWithFeatures";
import IntegrationHighlight from "@components/IntegrationHighlight";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturesSection
        badgeText="Tailored Tech for Africa"
        heading="Empowering Digital Transformation for Businesses"
        imageUrl="/images/services/accounting.jpg"
        features={[
          {
            icon: <CodeBracketIcon className="text-green-500 w-9 h-9" />,
            title: "Custom ERP Solutions",
            description:
              "Modular ERP systems for HR, Procurement, Payroll, Finance, and Fleet — built for scalability and affordability.",
          },
          {
            icon: <CheckIcon className="text-blue-600 w-9 h-9" />,
            title: "Integrated Payments",
            description:
              "Secure automation for M-Pesa, Visa/MasterCard, and banking APIs tailored to local needs.",
          },
          {
            icon: <HeartIcon className="text-red-500 w-9 h-9" />,
            title: "Full-Stack Development",
            description:
              "From CMS to custom web apps and portals — we deliver fast, modern, and secure digital experiences.",
          },
        ]}
      />

      <ImageFeatureSplit
        label="Why Believe Technologies?"
        title="Technology That Understands Your Market"
        description="We help African businesses overcome inefficient processes with affordable, scalable, and localized digital systems."
        subDescription="Our tools bridge legacy systems to modern operations, boosting agility and competitiveness."
        buttonLabel="Discover Our Solutions"
        buttonUrl="#"
        foregroundImage="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/girl-drinking-coffee.jpg"
        backgroundImage="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg"
      />

      <VisualFeatureSection
        title="Built for SMEs. Trusted by Enterprises."
        description="From QuickBooks integration to full ERP deployments — Believe Technologies enables fast, seamless digital transformation for all scales of business."
        primaryImage="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/team-work.jpg"
        secondaryImage="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/woman-working-on-laptop.jpg"
        circleOverlayImage="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
        buttonLabel="Request a Demo"
        buttonUrl="#"
        videoUrl="https://youtu.be/ZncigqbVlXQ"
      />

      <IntegrationHighlight
        title="Seamless Integrations. Endless Possibilities."
        description="We integrate legacy systems, financial tools, and third-party services to create efficient, future-proof digital ecosystems."
        buttonLabel="Explore Integrations"
        buttonUrl="#"
        imageUrl="https://cdn.rareblocks.xyz/collection/celebration/images/integration/2/services-icons.png"
      />

      <Career />

      <CallToActionWithFeatures
        title="Partner with Believe Technologies"
        features={[
          { text: "Modular ERP for SMEs" },
          { text: "Secure M-Pesa & Visa Integration" },
          { text: "Legacy to Cloud System Migration" },
          { text: "Custom API Development" },
          { text: "QuickBooks Custom Integrations" },
          { text: "On-site & Remote Support" },
        ]}
        primaryButtonLabel="Start Your Transformation"
        primaryButtonUrl="#"
        secondaryButtonLabel="See Full Services"
        secondaryButtonUrl="#"
        imageUrl="/images/services/erp-solutions.jpg"
      />

      <Footer />
    </>
  );
}
