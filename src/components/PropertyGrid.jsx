import { useState } from "react";
import PropertyCard from "./UI/PropertyCard.jsx";
import ViewOptions from "./UI/ViewOptions.jsx";
import Pagination from "./UI/Pagination.jsx";

const PropertiesData = [
  {
    id: 1,
    image: "/Images/hero_bg_2.jpg",
    title: "625 S. Berendo St",
    location: "625 S. Berendo St Unit 607 Los Angeles, CA 90005",
    price: "$2,265,500",
    type: "Sale",
    beds: 2,
    baths: 2,
    sqft: 7000,
    isFavorite: false,
  },

  {
    id: 2,
    image: "/Images/hero_bg_1.jpg",
    title: "871 Crenshaw Blvd",
    location: "1 New York Ave, Warners Bay, NSW 2282",
    price: "$2,265,500",
    type: "Rent",
    beds: 2,
    baths: 2,
    sqft: 1620,
    isFavorite: true,
  },

  {
    id: 3,
    image: "/Images/property_3.jpg",
    title: "853 S Lucerne Blvd",
    location: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
    price: "$2,265,500",
    type: "Lease",
    beds: 2,
    baths: 2,
    sqft: 5500,
    isFavorite: false,
  },

  {
    id: 4,
    image: "/Images/property_4.jpg",
    title: "625 S. Berendo St",
    location: "625 S. Berendo St Unit 607 Los Angeles, CA 90005",
    price: "$2,265,500",
    type: "Sale",
    beds: 2,
    baths: 2,
    sqft: 7000,
    isFavorite: false,
  },

  {
    id: 5,
    image: "/Images/property_5.jpg",
    title: "871 Crenshaw Blvd",
    location: "1 New York Ave, Warners Bay, NSW 2282",
    price: "$2,265,500",
    type: "Rent",
    beds: 2,
    baths: 2,
    sqft: 1620,
    isFavorite: false,
  },

  {
    id: 6,
    image: "/Images/hero_bg_2.jpg",
    title: "853 S Lucerne Blvd",
    location: "853 S Lucerne Blvd Unit 101 Los Angeles, CA 90005",
    price: "$2,265,500",
    type: "Lease",
    beds: 2,
    baths: 2,
    sqft: 5500,
    isFavorite: false,
  },
];

function PropertyGrid({
  properties = [],
  title = "Properties",
  subtitle = "",
  showFilter = true,
  showSort = true,
}) {
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("");

  //filter logic

  const filteredData = properties.filter((property) => {
    if (filter === "all") return true;
    return property.type.toLowerCase() === filter;
  });

  // sort Logic

  const sortedData = [...filteredData].sort((a, b) => {
    if (sort === "asc") {
      return (
        parseInt(a.price.replace(/[$,]/g, "")) -
        parseInt(b.price.replace(/[$,]/g, ""))
      );
    } else if (sort === "desc") {
      return (
        parseInt(b.price.replace(/[$,]/g, "")) -
        parseInt(a.price.replace(/[$,]/g, ""))
      );
    }
    return 0;
  });

  return (
    <section className="w-full bg-light py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
        {/* View Options */}

        <ViewOptions
          view={view}
          setView={setView}
          sort={sort}
          setSort={setSort}
          filter={filter}
          setFilter={setFilter}
        />
        {/* Property Grid */}

        <div
          className={`grid gap-6 md:gap-8 mt-6 ${view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
        >
          {sortedData.map((property) => (
            <PropertyCard key={property.id} property={property} view={view} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
}

export default PropertyGrid;
