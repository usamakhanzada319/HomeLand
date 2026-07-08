import React from "react";
import { Hero, SearchForm, Choose, PropertyGrid } from "../components/index.js";
import { saleProperties } from "../../Data/properties.js";

const buySlides = [
  {
    id: 1,
    bg_image: "/Images/hero_bg_2.jpg",
    type: "For Sale",
    type_color: "bg-[#F23A2E] text-white border border-red-400/30",
      title: "625 S. Berendo St",
    price: "$2,265,500",
  },
  {
    id: 2,
    bg_image: "/Images/hero_bg_1.jpg",
    type: "For Sale",
    type_color: "bg-[#F23A2E] text-white border border-red-400/30",
      title: "871 Crenshaw Blvd",
    price: "$1,000,500",
  },
];
function Buy() {
  return (
    <>
      <Hero slides={buySlides} />
      <SearchForm />
      <PropertyGrid
        properties={saleProperties}
        title="Properties for Sale"
        subtitle="Browse our exclusive listings of homes for sale"
        showFilter={false}
        showSort={true}
      />
      <Choose />
    </>
  );
}

export default Buy;
