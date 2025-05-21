import Hero from '@components/HeroSection';
import How from '@components/HowItWorks';
import Career from '@components/CareerSection';
import CTA from '@components/CTABanner';
import Footer from '@components/FooterSection';
import Features from '@components/FeaturesSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Features/>
      <Career />
      <CTA />
      <Footer />
    </>
  );
}
