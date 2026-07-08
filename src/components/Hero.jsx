// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/effect-fade";

// function Hero() {
//   console.log("Home render ho raha hai!");
//   const Slides = [
//     {
//       id: 1,
//       bg_image: "/Images/hero_bg_1.jpg",
//       type: "For Rent",
//       type_color: "bg-[#7CBD1E] text-white border border-green-400/30",
//       title: "871 Crenshaw Blvd",
//       price: "$2,250,500",
//     },
//     {
//       id: 2,
//       bg_image: "/Images/hero_bg_2.jpg",
//       type: "For Sale",
//       type_color: "bg-[#F23A2E] text-white border border-red-400/30",
//       title: "625 S. Berendo St",
//       price: "$1,000,500",
//     },
//   ];

//   return (
//     <section className="relative w-full h-screen overflow-hidden -mt-20">
//       <Swiper
//         modules={[EffectFade, Autoplay]}
//         effect="fade"
//         autoplay={{ delay: 5000 }}
//         loop
//         className="w-full h-full"
//       >
//         {Slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
//               style={{ backgroundImage: `url(${slide.bg_image})` }}
//             >
//               {/*dark overlay*/}
//               <div className="absolute inset-0 bg-black/10"></div>

//               {/*content*/}

//               <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-[1440px] mx-auto">
//                 {/*badge*/}
//                 <span
//                   className={`inline-block ${slide.type_color} px-6 py-1 rounded mb-4 text-sm font-semibold backdrop-blur-sm`}
//                 >
//                   {slide.type}
//                 </span>
//                 {/*title*/}

//                 <h1 className="font-[Nunito_Sans] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-2 leading-tight">
//                   {slide.title}
//                 </h1>

//                 {/*price*/}

//                 <p className="font-[Roboto_Mono] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-400 font-extralight  mb-6">
//                   {slide.price}
//                 </p>

//                 {/*button*/}
//                 <Link
//                   to="#"
//                   className="inline-block bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 hover:bg-white hover:text-black transition  font-[Nunito_Sans] font-medium"
//                 >
//                   See Details
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }

// export default Hero;

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";

// ✅ Props: slides array pass kar sakte ho
function Hero({ slides = [] }) {
  console.log("Hero render ho raha hai!");

  // ✅ Default slides (agar props na aaye toh)
  const defaultSlides = [
    {
      id: 1,
      bg_image: "/Images/hero_bg_1.jpg",
      type: "For Rent",
      type_color: "bg-[#7CBD1E] text-white border border-green-400/30",
      title: "871 Crenshaw Blvd",
      price: "$2,250,500",
    },
    {
      id: 2,
      bg_image: "/Images/hero_bg_2.jpg",
      type: "For Sale",
      type_color: "bg-[#F23A2E] text-white border border-red-400/30",
      title: "625 S. Berendo St",
      price: "$1,000,500",
    },
  ];

  // ✅ Agar slides props mein aaye toh wo use karo, warna default
  const Slides = slides.length > 0 ? slides : defaultSlides;

  return (
    <section className="relative w-full h-screen overflow-hidden -mt-20">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop
        className="w-full h-full"
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.bg_image})` }}
            >
              {/*dark overlay*/}
              <div className="absolute inset-0 bg-black/10"></div>

              {/*content*/}
              <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-[1440px] mx-auto">
                {/*badge*/}
                <span
                  className={`inline-block ${slide.type_color} px-6 py-1 rounded mb-4 text-sm font-semibold backdrop-blur-sm`}
                >
                  {slide.type}
                </span>
                {/*title*/}
                <h1 className="font-[Nunito_Sans] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight mb-2 leading-tight">
                  {slide.title}
                </h1>

                {/*price*/}
                <p className="font-[Roboto_Mono] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-400 font-extralight mb-6">
                  {slide.price}
                </p>

                {/*button*/}
                <Link
                  to="#"
                  className="inline-block bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 hover:bg-white hover:text-black transition font-[Nunito_Sans] font-medium"
                >
                  See Details
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
