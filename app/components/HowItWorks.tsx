import Image from 'next/image';

const HowItWorks: React.FC = () => {
  return (
    <section className="bg-slate-950 py-32">
      <div className="container mx-auto px-4">
        <p className="uppercase text-center text-slate-300 text-xs mb-4 tracking-widest">
          HOW IT WORKS
        </p>
        <h1 className="font-heading text-white text-center mb-6 text-4xl md:text-5xl font-bold max-w-2xl mx-auto">
          See how we simplify your financial tasks
        </h1>
        <div className="mx-auto rounded-3xl overflow-hidden" style={{ height: '600px', maxWidth: '100%' }}>
          <Image
            src="/images/how-it-works/illustration-blue3.png"
            alt="How it works illustration"
            width={1000}
            height={600}
            className="object-cover mx-auto h-full w-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
