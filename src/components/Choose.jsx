import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHome, FaHandshake, FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

function Choose() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      id: 1,
      icon: <FaHome className="text-5xl text-blue-500 " />,

      title: "Research Subburbs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.",
      link: "#",
    },

    {
      id: 2,
      icon: <FaHandshake className="text-5xl text-blue-500 " />,

      title: "Sold Houses",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.",
      link: "#",
    },

    {
      id: 3,
      icon: <FaCamera className="text-5xl text-blue-500 " />,

      title: "Security Priority",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure qui natus perspiciatis ex odio molestia.",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/*heading*/}
        <div
          className="text-center max-w-2xl mx-auto mb-12  md:mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            maiores quisquam saepe architecto error corporis aliquam. Cum ipsam
            a consectetur aut sunt sint animi, pariatur corporis, eaque,
            deleniti cupiditate officia.
          </p>
        </div>
        {/*srevices card*/}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={service.id}
              className=" block text-center p-6 md:p-8 rounded-lg bg-white shadow-lg "
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              {/*icon*/}
              <div className="flex justify-center mb-4 ">{service.icon}</div>
              {/*title*/}
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 ">
                {service.title}
              </h3>
              {/*description*/}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mt-2 ">
                {service.description}
              </p>

              {/*read more*/}
              <span className="inline-block mt-4 text-gray-500 hover:text-gray-800 text-sm sm:text-base font-extralight tracking-widest  ">
                READ MORE
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Choose;
