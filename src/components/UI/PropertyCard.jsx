import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

const badgeColors = {
  rent: "bg-[#7CBD1E]",
  sale: "bg-[#F23A2E]",
  lease: "bg-[#53CDE2]",
};

function PropertyCard({ view, property }) {
  const [isFavorite, setIsFavorite] = useState(property.isFavorite);

  return (
    <div
      className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${view === "list" ? "flex flex-col sm:flex-row" : ""}`}
    >
      {/*card image*/}
      <div className={`relative ${view === "list" ? "sm:w-2/5" : "w-full"}`}>
        <img
          src={property.image}
          alt={property.title}
          className={`w-full h-auto aspect-[370/280] object-cover`}
          loading="lazy"
        />

        {/*badge*/}
        <span
          className={`absolute top-3 left-3 ${badgeColors[property.type.toLowerCase()]}  text-white text-xs font-normal px-3 py-1 rounded `}
        >
          {property.type}
        </span>
        {/*heart icon */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white transition"
        >
          <FaHeart className={isFavorite ? "text-red-500" : "text-gray-500"} />
        </button>
      </div>
      <div className={`p-4 flex flex-col ${view === "list" ? "sm:w-3/5" : ""}`}>
        <h3 className="text-lg font-bold text-gray-800 font-[Nunito-Sans]">
          <Link to="#" className="hover:text-[#7CBD1E] transition">
            {property.title}
          </Link>
        </h3>
        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
          <span className="text-gray-400">📍</span>
          {property.location}
        </p>
        <p className="text-[#7CBD1E] text-xl font-bold font-[Nunito-Sans] mt-2">
          {property.price}
        </p>

        {/*yaha ye text h or esy yaha h add krna h 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem tenetur magni.
               Aspernatur odit rem repudiandae cumque tenetur enim consequuntur esse.
              */}

        <p
          className={`text-gray-500 text-sm leading-relaxed mt-2 ${view === "list" ? "block" : " hidden"} `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolorem
          tenetur magni. Aspernatur odit rem repudiandae cumque tenetur enim
          consequuntur esse.
        </p>
        {/*specs*/}

        <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 text-gray-600 text-sm">
          <span className=" flex items-center gap-1">
            <FaBed />
            {property.beds}
            {property.beds > 1 ? "Beds" : "Bed"}
          </span>

          <span className=" flex items-center gap-1">
            <FaBath />
            {property.baths}
            {property.baths > 1 ? "Baths" : "Bath"}
          </span>

          <span className=" flex items-center gap-1">
            <FaRulerCombined />
            {property.sqft.toLocaleString()} SQ FT
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
