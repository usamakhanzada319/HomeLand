import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Agents from "../components/Agents.jsx";

function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden -mt-20">
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: "url('/Images/hero_bg_1.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-['Nunito_Sans']">
              CONTACT US
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left: Contact Form */}
            <div className="border p-6 sm:p-8 rounded-lg order-1 lg:order-none">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 font-['Nunito_Sans']">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2 font-['Nunito_Sans']">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CBD1E] text-sm sm:text-base font-['Nunito_Sans']"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2 font-['Nunito_Sans']">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CBD1E] text-sm sm:text-base font-['Nunito_Sans']"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2 font-['Nunito_Sans']">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CBD1E] text-sm sm:text-base font-['Nunito_Sans']"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2 font-['Nunito_Sans']">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CBD1E] text-sm sm:text-base font-['Nunito_Sans'] resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="p-2 bg-[#1F3C88] hover:bg-[#1F3C77] text-white font-semibold transition-colors duration-300 font-['Nunito_Sans'] text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="order-2 lg:order-none">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800 font-['Nunito_Sans']">
                Contact Info
              </h3>

              {/* Contact Details */}
              <div className="mt-6 sm:mt-8 space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 font-['Nunito_Sans']">
                      Phone
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 font-['Nunito_Sans']">
                      +1 (123) 456-7890
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 font-['Nunito_Sans']">
                      Email
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 font-['Nunito_Sans']">
                      info@homeland.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-400 font-['Nunito_Sans']">
                      Address
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 font-['Nunito_Sans']">
                      198 West 21th Street, New York, NY 10010
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <Agents />
    </>
  );
}

export default ContactPage;
