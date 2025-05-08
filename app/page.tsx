import Hero from '@components/HeroSection';
import How from '@components/HowItWorks';
import BookKeeping from '@components/BookkeepingSection';
import CTA from '@components/CTABanner';
import Footer from '@components/FooterSection';

export default function Home() {
  return (
    <>
      <Hero />
      <How />
      <BookKeeping />
      <CTA />
      <Footer />
    </>
  );
}
