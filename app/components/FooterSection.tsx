import Image from 'next/image';

const FooterNewsletter: React.FC = () => {
  return (
    <section className="bg-gradient-to-t from-slate-900 via-blue-800 to-blue-600 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-4">
          {/* Newsletter Section */}
          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <div className="lg:pl-4 py-20 md:pr-8 md:border-r border-white/30 h-full">
              <p className="font-heading text-white text-xl font-semibold mb-4">
                Subscribe to our newsletter
              </p>
              <form>
                <div className="rounded-full bg-white/5  border border-white/10  p-1 flex items-center max-w-sm">
                  <input
                    className="flex-1 bg-transparent outline-none text-white placeholder-gray-300 pl-4"
                    type="email"
                    placeholder="Email address*"
                  />
                  <button
                    type="submit"
                    className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 opacity-40 group-focus:opacity-20 rounded-full" />
                    <div className="relative z-50 flex items-center py-2 px-4 bg-white group-hover:bg-opacity-80 group-focus:bg-opacity-80 rounded-full transition duration-200">
                      <p className="text-blue-950">Subscribe</p>
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="pl-8 xl:pl-24 py-20 pr-8 h-full">
              <div className="flex flex-wrap justify-between gap-6">
                <ul className="flex flex-col gap-6">
                  <li>
                    <p className="font-heading text-white font-semibold">Product</p>
                  </li>
                  <li><a className="text-white hover:text-opacity-70 text transition duration-200" href="#">Features</a></li>
                  <li><a className="text-white hover:text-opacity-70 text transition duration-200" href="#">How it works</a></li>
                  <li><a className="text-white hover:text-opacity-70 text transition duration-200" href="#">Pricing</a></li>
                  <li><a className="text-white hover:text-opacity-70 text transition duration-200" href="#">FAQs</a></li>
                </ul>
                <ul className="flex flex-col gap-6">
                  <li>
                    <p className="font-heading text-white font-semibold">Company</p>
                  </li>
                  <li><a className="text-white hover:text-opacity-70 transition duration-200" href="#">About</a></li>
                  <li><a className="text-white hover:text-opacity-70 transition duration-200" href="#">Blog</a></li>
                  <li><a className="text-white hover:text-opacity-70 transition duration-200" href="#">Contact</a></li>
                  <li><a className="text-white hover:text-opacity-70 transition duration-200" href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/30 w-full">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -m-4">
            {/* Logo and Copyright */}
            <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
              <div className="pl-4 py-11 pr-8 sm:border-r border-white/30 h-full">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <a href="#" className="inline-block">
                    <Image src="/images/logo-white.svg" alt="Logo" height={32} width={120} />
                  </a>
                  <p className="text-white">© 2025 Believe Technologies.</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="pl-8 xl:pl-28 pr-8 py-11">
                <div className="flex flex-wrap gap-6">
                  <a href="#" className="inline-block">
                    <Image src="/images/logos/twitter-x-logo.svg" alt="Twitter" width={24} height={24} />
                  </a>
                  <a href="#" className="inline-block">
                    <Image src="/images/logos/linkedin-logo.svg" alt="LinkedIn" width={24} height={24} />
                  </a>
                  <a href="#" className="inline-block">
                    <Image src="/images/logos/instagram-logo.svg" alt="Instagram" width={24} height={24} />
                  </a>
                  <a href="#" className="inline-block">
                    <Image src="/images/logos/facebook-logo.svg" alt="Facebook" width={24} height={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterNewsletter;
