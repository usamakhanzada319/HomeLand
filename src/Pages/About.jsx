import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Agents_Data = [
  {
    id: 4,
    image: "/Images/person_4.jpg",
    name: "Sarah Johnson",
    role: "Senior Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  // ✅ New Agent 5
  {
    id: 5,
    image: "/Images/person_5.jpg",
    name: "Michael Brown",
    role: "Real Estate Consultant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },

  {
    id: 6,
    image: "/Images/person_2.jpg",
    name: "Brooke Cagle",
    role: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

// ✅ Sirf 3 Agents (Leadership + Our Agents dono mein same)
const Leader = [
  {
    id: 1,
    image: "/Images/person_1.jpg",
    name: "Megan Smith",
    role: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    image: "/Images/person_2.jpg",
    name: "Brooke Cagle",
    role: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    image: "/Images/person_3.jpg",
    name: "Philip Martin",
    role: "Real Estate Agent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo.",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const faqs = [
  {
    id: 1,
    question: "What is the name of your company?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.",
  },
  {
    id: 2,
    question: "How Much pay for 3 Months?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.",
  },
  {
    id: 3,
    question: "Do i need to register?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.",
  },
  {
    id: 4,
    question: "who should i contact in case of support?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.",
  },
];

function About() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ(activeFAQ === id ? null : id);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden -mt-20">
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
          style={{ backgroundImage: "url('/Images/hero_bg_2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-['Nunito_Sans']">
              ABOUT HOMELAND
            </h1>
          </div>
        </div>
      </section>

      {/* About Content - Image Left + Text Right */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden">
              <img
                src="/Images/about.jpg"
                alt="About Homeland"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-['Nunito_Sans']">
                Our Company
              </h3>
              <h6 className="text-base sm:text-lg text-gray-600 mt-2 font-['Nunito_Sans']">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                in cum odio.
              </h6>
              <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed font-['Nunito_Sans']">
                Illum repudiandae ratione facere explicabo. Consequatur dolor
                optio iusto, quos autem voluptate ea? Sunt laudantium fugiat,
                mollitia voluptate? Modi blanditiis veniam nesciunt architecto
                odit voluptatum tempore impedit magnam itaque natus!
              </p>
              <button className="mt-6 px-6 py-2 border-2 border-blue-500 text-blue-500 bg-white hover:bg-blue-500 hover:text-white transition font-['Nunito_Sans'] font-semibold rounded text-sm sm:text-base">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-['Nunito_Sans']">
              Leadership
            </h3>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-['Nunito_Sans']">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              magnam officiis ipsa eum pariatur labore fugit amet eaque iure
              vitae, repellendus laborum in modi reiciendis quis! Optio minima
              quibusdam, laboriosam.
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Leader.map((agent, index) => (
              <div
                key={agent.id}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="overflow-hidden rounded-lg border border-gray-300">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold my-3 sm:my-4 text-gray-800 font-['Nunito_Sans']">
                  {agent.name}
                </h3>
                <span className="text-gray-500 text-xs sm:text-sm block mt-1 font-['Nunito_Sans']">
                  {agent.role}
                </span>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base font-normal mt-2 sm:mt-3 max-w-xs mx-auto px-4 font-['Nunito_Sans']">
                  {agent.description}
                </p>
                <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 mt-3 sm:mt-4 px-4 sm:px-6 md:px-8">
                  <Link
                    to={agent.social.facebook}
                    className="text-black hover:text-[#7CBD1E] transition"
                  >
                    <FaFacebook className="text-xs sm:text-sm" />
                  </Link>
                  <Link
                    to={agent.social.twitter}
                    className="text-black hover:text-[#7CBD1E] transition"
                  >
                    <FaTwitter className="text-xs sm:text-sm" />
                  </Link>
                  <Link
                    to={agent.social.linkedin}
                    className="text-black hover:text-[#7CBD1E] transition"
                  >
                    <FaLinkedinIn className="text-xs sm:text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Agents Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-['Nunito_Sans']">
              Our Agents
            </h3>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-['Nunito_Sans']">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              magnam officiis ipsa eum pariatur labore fugit amet eaque iure
              vitae, repellendus laborum in modi reiciendis quis! Optio minima
              quibusdam, laboriosam.
            </p>
          </div>

          {/* Agents Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Agents_Data.map((agent, index) => (
              <div
                key={agent.id}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="overflow-hidden rounded-lg border border-gray-300">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold my-3 sm:my-4 text-gray-800 font-['Nunito_Sans']">
                  {agent.name}
                </h3>
                <span className="text-gray-500 text-xs sm:text-sm block mt-1 font-['Nunito_Sans']">
                  {agent.role}
                </span>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base font-normal mt-2 sm:mt-3 max-w-xs mx-auto px-4 font-['Nunito_Sans']">
                  {agent.description}
                </p>
                <div className="flex justify-center sm:justify-start gap-3 sm:gap-4 mt-3 sm:mt-4 px-4 sm:px-6 md:px-8">
                  <Link
                    to={agent.social.facebook}
                    className="text-black hover:text-[#7CBD1E] transition"
                  >
                    <FaFacebook className="text-xs sm:text-sm" />
                  </Link>
                  <Link
                    to={agent.social.twitter}
                    className="text-black hover:text-[#7CBD1E] transition"
                  >
                    <FaTwitter className="text-xs sm:text-sm" />
                  </Link>
                  <Link
                    to={agent.social.linkedin}
                    className="text-black hover:text-[#7CBD1E] transition"
                  >
                    <FaLinkedinIn className="text-xs sm:text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-['Nunito_Sans']">
              Frequently Ask Questions
            </h3>
            <p className="text-gray-500 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-['Nunito_Sans']">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              maiores quisquam saepe architecto error corporis aliquam. Cum
              ipsam a consectetur aut sunt sint animi, pariatur corporis, eaque,
              deleniti cupiditate officia.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className=" overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-4 md:p-5 lg:p-6 text-left transition"
                >
                  <span className="flex items-center gap-2 sm:gap-3">
                    <span className="text-gray-500 text-sm sm:text-base border-1 p-1">
                      {activeFAQ === faq.id ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 font-['Nunito_Sans']">
                      {faq.question}
                    </span>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFAQ === faq.id
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 md:p-5 lg:p-6 pt-0">
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed font-['Nunito_Sans']">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
