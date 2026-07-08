import React from "react";
import { Link } from "react-router-dom";

const BlogPosts = [
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
  {
    id: 4,
    image: "/Images/property_3.jpg",
    date: "Feb 15th, 2019",
    title: "Modern Architecture Trends",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.",
    link: "#",
  },
  {
    id: 5,
    image: "/Images/property_4.jpg",
    date: "Mar 10th, 2019",
    title: "Interior Design Ideas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.",
    link: "#",
  },
  {
    id: 6,
    image: "/Images/property_5.jpg",
    date: "Apr 5th, 2019",
    title: "Sustainable Living",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt.",
    link: "#",
  },
];

function BlogPage() {
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
              OUR BLOG
            </h1>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {BlogPosts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                {/* Image */}
                <Link to={post.link} className="block overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </Link>

                {/* Content */}
                <div className="p-4 md:p-6">
                  {/* Date */}
                  <span className="text-gray-400 text-xs sm:text-sm font-['Nunito_Sans']">
                    {post.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mt-2 font-['Nunito_Sans']">
                    <Link
                      to={post.link}
                      className="hover:text-[#7CBD1E] transition-colors duration-300"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-['Nunito_Sans']">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-1 sm:gap-2 mt-10 sm:mt-12">
            {[1, 2, 3, 4, 5, "...", 10].map((page, index) => (
              <button
                key={index}
                className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full text-xs sm:text-sm font-medium transition ${
                  page === 1
                    ? "bg-[#7CBD1E] text-white"
                    : "text-gray-500 hover:bg-gray-200"
                } ${page === "..." ? "cursor-default" : ""}`}
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
