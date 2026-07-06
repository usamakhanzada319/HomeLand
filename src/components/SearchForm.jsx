import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SearchForm() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 md:-mt-24">
      <div
        className="bg-[#364E68] backdrop-blur-sm rounded shadow-lg p-4 sm:p-6 md:p-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <form className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-4 gap-4 items-end">
          {/*listing types*/}
          <div>
            <label className="block text-gray-300 text-sm font-normal mb-3 ">
              Listing Types
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  bg-white text-gray-700 font-[Nunito-Sans]">
              <option value="">Condo</option>
              <option value="">Commercial Building</option>
              <option value="">Land Property</option>
            </select>
          </div>
          {/*offer types*/}
          <div>
            <label className="block text-gray-300 text-sm font-normal mb-3">
              Offer Types
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  bg-white text-gray-700 font-[Nunito-Sans]">
              <option value="">For sale</option>
              <option value="">For Rent</option>
              <option value="">For Lease</option>
            </select>
          </div>
          {/*select city*/}

          <div>
            <label className="block text-gray-300 text-sm font-normal mb-3">
              Select City
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  bg-white text-gray-700 font-[Nunito-Sans]">
              <option value="">New York</option>
              <option value="">Brooklyn</option>
              <option value="">London</option>
              <option value="">Japan</option>
              <option value="">Philippines</option>
            </select>
          </div>
          {/*search button*/}
          <div>
            <button
              type="submit"
              className="w-full bg-[#7CBD1E] hover:bg-[#6AAC1A] mt-3 text-white font-normal py-3 px-6 rounded-lg transition-colors
                      duration-300  text-base shadow-md hover:shadow-lg
                      "
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
