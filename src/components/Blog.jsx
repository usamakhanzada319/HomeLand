import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  const BlogPost = [
    {
      id: 1,
      image: "/Images/property_3.jpg",
      date: "Jan 20th, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.",
      link: "#",
    },

    {
      id: 2,
      image: "/Images/property_4.jpg",
      date: "Jan 20th, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.",
      link: "#",
    },

    {
      id: 3,
      image: "/Images/property_5.jpg",
      date: "Jan 20th, 2019",
      title: "Art Gossip by Mike Charles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.",
      link: "#",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4  sm:px-6 lg:px-8">
        {/*heading*/}
        <div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 ">
            {" "}
            Recent Blog
          </h2>

          <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            maiores quisquam saepe architecto error corporis aliquam. Cum ipsam
            a consectetur aut sunt sint animi, pariatur corporis, eaque,
            deleniti cupiditate officia.
          </p>
        </div>
        {/*blog card*/}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BlogPost.map((post, index) => (
            <div
              id={post.id}
              className="bg-white rounded-lg  overflow-hidden shadow-sm lg:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <Link to={post.link} className="block overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto aspext-[16/9] object-cover"
                  loading="lazy"
                />
              </Link>

              {/*content*/}

              <div className="p-4 md:p-6">
                {/*date*/}

                <span className="text-gray-400 text-sm">{post.date}</span>

                {/*title*/}

                <h3 className="text-lg md:text-xl font-normal text-blue-800 mt-2 ">
                  <Link to={post.link}>{post.title}</Link>
                </h3>
                {/*Description*/}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-2 ">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
