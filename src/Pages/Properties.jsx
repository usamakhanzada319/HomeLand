import React from "react";
import { Hero, SearchForm, Choose, PropertyGrid } from "../components/index.js";
import { allProperties } from "../../Data/properties.js";

const SelectedProperties = allProperties.slice(0, 6);
const propertiesSlides = [
  {
    id: 1,
    bg_image: "/Images/hero_bg_1.jpg",
    type: "All Properties",
    type_color: "bg-[#7CBD1E] text-white border border-green-400/30",
    title: "625 S. Berendo St",
    price: "$2,250,500",
  },
  {
    id: 2,
    bg_image: "/Images/hero_bg_2.jpg",
    type: "All Properties",
    type_color: "bg-[#7CBD1E] text-white border border-green-400/30",
    title: "871 Crenshaw Blvd",
    price: "$1,000,500",
  },
];

function Properties() {
  return (
    <>
      <Hero slides={propertiesSlides} />
      <SearchForm />
      <PropertyGrid
        properties={SelectedProperties}
        title="All Properties"
        subtitle="Browse our complete collection of properties"
        showFilter={true}
        showSort={true}
      />
      <Choose />
    </>
  );
}

export default Properties;
