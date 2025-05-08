import Image from 'next/image';

const BookkeepingSection: React.FC = () => {
  return (
    <section className="bg-gray-950 py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-4 text-center">
          Easy bookkeeping for your business
        </h1>
        <p className="text-white text-opacity-70 text-lg max-w-xl text-center mx-auto mb-20">
          Our software provides intuitive bookkeeping solutions, allowing you to focus on growing your business rather than crunching numbers.
        </p>

        {/* Section 1 */}
        <div className="rounded-xl px-8 md:px-12 pt-14 pb-8 bg-gradient-to-b from-blue-950 via-blue-700 to-blue-400 mb-10">
          <div className="flex flex-wrap items-center -m-4 mb-6">
            <div className="w-full lg:w-1/3 p-4">
              <h2 className="font-heading text-white text-4xl md:text-5xl font-bold max-w-xs mb-6">
                Simple Accounting
              </h2>
              <p className="text-white text-opacity-70 max-w-xs">
                Keep track of your financial transactions with ease and simplicity.
              </p>
            </div>
            <div className="w-full lg:w-2/3 p-4">
              <Image
                src="/images/features/picture-blue1.png"
                alt="Simple Accounting"
                width={1200}
                height={450}
                className="rounded-xl object-cover w-full h-[450px]"
                priority
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-6">
            {[
              "Automated financial tracking",
              "Easy invoicing and payment reminders",
              "Real-time access to your financial data"
            ].map((item, index) => (
              <div className="flex items-center gap-4" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M4.16666 10.8333L5.73222 12.3988C6.70853 13.3752 8.29145 13.3752 9.26774 12.3988L15.8333 5.83325"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-white text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="rounded-xl px-8 md:px-12 py-20 bg-slate-400 mb-10">
          <div className="flex flex-wrap items-center -m-4">
            <div className="w-full lg:w-2/3 p-4">
              <Image
                src="/images/features/picture-blue2.png"
                alt="Multiple Accounts"
                width={1200}
                height={450}
                className="rounded-xl object-cover w-full h-[450px]"
              />
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <h2 className="font-heading text-blue-950 text-4xl md:text-5xl font-bold max-w-xs mb-6">
                Multiple Accounts
              </h2>
              <p className="text-blue-950 text-opacity-70 max-w-xs">
                Gain a comprehensive overview of all your accounts.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="rounded-xl px-8 md:px-12 py-20 bg-slate-400 mb-10">
          <div className="flex flex-wrap items-center -m-4">
            <div className="w-full lg:w-1/3 p-4">
              <h2 className="font-heading text-blue-950 text-4xl md:text-5xl font-bold max-w-xs mb-6">
                Detailed Analytics
              </h2>
              <p className="text-blue-950 text-opacity-70 max-w-xs">
                Get detailed insights about your financial health with our analytics feature.
              </p>
            </div>
            <div className="w-full lg:w-2/3 p-4">
              <Image
                src="/images/features/picture-blue3.png"
                alt="Detailed Analytics"
                width={1200}
                height={450}
                className="rounded-xl object-cover w-full h-[450px]"
              />
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div className="rounded-xl px-8 md:px-12 py-20 bg-gradient-to-t from-blue-950 via-blue-700 to-blue-400">
          <div className="flex flex-wrap items-center -m-4">
            <div className="w-full lg:w-2/3 p-4">
              <Image
                src="/images/features/picture-blue4.png"
                alt="Cloud-Based"
                width={1200}
                height={450}
                className="rounded-xl object-cover w-full h-[450px]"
              />
            </div>
            <div className="w-full lg:w-1/3 p-4">
              <h2 className="font-heading text-white text-4xl md:text-5xl font-bold max-w-xs mb-6">
                Cloud-Based
              </h2>
              <p className="text-white text-opacity-70 max-w-xs">
                Access your financial data anywhere, anytime with our cloud-based system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookkeepingSection;
