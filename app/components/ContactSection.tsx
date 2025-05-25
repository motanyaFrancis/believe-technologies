'use client';

import React from 'react';

const ContactSection = () => {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left image section */}
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://images.pexels.com/photos/1181429/pexels-photo-1181429.jpeg"
              alt="African businesswoman using a laptop"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Let’s build something that matters
              </h3>
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                {['Local Expertise', 'Responsive Support', 'Tailored Tech', 'Business Empowerment'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right contact form */}
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Have a question or want to collaborate? Reach out to our team.
            </p>

            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">Full Name</label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">Email Address</label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">Subject</label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject of your message"
                      required
                      className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">Message</label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Type your message..."
                      required
                      className="block w-full py-4 pl-4 pr-4 text-black placeholder-gray-500 border border-gray-200  bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 resize-none"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent bg-gradient-to-r from-blue-700 to-blue-500 focus:outline-none hover:opacity-90"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
