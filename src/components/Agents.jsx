import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Agents() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const Agents_Data = [
    {
      id: 1,
      image: "/Images/person_1.jpg",
      name: "Megan Smith",
      role: "Real Estate Agent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo",
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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores illo iusto, inventore, iure dolorum officiis modi repellat nobis, praesentium perspiciatis, explicabo. Atque cupiditate, voluptates pariatur odit officia libero veniam quo",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/*heading*/}

        <div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 ">
            Our Agents{" "}
          </h2>

          <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
            magnam officiis ipsa eum pariatur labore fugit amet eaque iure
            vitae, repellendus laborum in modi reiciendis quis! Optio minima
            quibusdam, laboriosam.
          </p>
        </div>

        {/*Agents Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Agents_Data.map((agent, index) => (
            <div
              key={agent.id}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              {/*images*/}
              <div className="overflow-hidden rounded-lg border-1 border-black ">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/*name*/}

              <h3 className="text-xl md:text-2xl font-bold my-4 text-gray-800">
                {agent.name}
              </h3>
              {/* role */}
              <span className="text-gray-500 text-sm block mt-1">
                {agent.role}
              </span>
              {/* description */}

              <p className="text-gray-400 text-sm md:text-base font-normal mt-3 max-w-xs mx-auto ">
                {agent.description}
              </p>
              {/* Social Icons - Black Color */}

              <div className="flex justify-start gap-4 mt-4 px-4  sm:px-8 md:px-12 lg:px-16    ">
                <Link to={agent.social.facebook} className="text-black">
                  {" "}
                  <FaFacebook className="text-sm" />
                </Link>

                <Link to={agent.social.twitter} className="text-black">
                  {" "}
                  <FaTwitter className="text-sm" />
                </Link>

                <Link to={agent.social.linkedin} className="text-black">
                  {" "}
                  <FaLinkedinIn className="text-sm" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Agents;
