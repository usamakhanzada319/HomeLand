import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  {
    /*for mobile manu*/
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  {
    /*for properties manu*/
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="relative w-full bg-transparent py-4  z-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
        <div className="flex items-center justify-between">
          {/*left logo*/}

          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-2xl sm:text-3xl font-bold no-underline"
            >
              Homeland <span className="text-red-500">.</span>
            </Link>
          </div>
          {/*desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white/40 hover:text-white transition-colors duration-200 text-sm font-medium ${isActive ? "text-white" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="buy"
              className={({ isActive }) =>
                `text-white/40 hover:text-white transition-colors duration-200 text-sm font-medium ${isActive ? "text-white" : ""}`
              }
            >
              Buy
            </NavLink>

            <NavLink
              to="rent"
              className={({ isActive }) =>
                `text-white/40 hover:text-white transition-colors duration-200 text-sm font-medium ${isActive ? "text-white" : ""}`
              }
            >
              Rent
            </NavLink>

            {/*properties dropdown*/}
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavLink
                to="Properties"
                className={({ isActive }) =>
                  `text-white/40 hover:text-white transition-colors duration-200 text-sm font-medium ${isActive ? "text-white" : ""}`
                }
              >
                Properties
              </NavLink>
              {/*dropdown menu*/}

              <div className=" absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2  hidden group-hover:block ">
                <Link
                  to="#"
                  className="block py-2 px-4 text-sm  text-gray-700 hover:text-blue-300 transition"
                >
                  Condo
                </Link>

                <Link
                  to="#"
                  className="block py-2 px-4 text-sm  text-gray-700 hover:text-blue-300 transition"
                >
                  Property Land
                </Link>

                <Link
                  to="#"
                  className="block py-2 px-4 text-sm  text-gray-700 hover:text-blue-300 transition"
                >
                  Commercial building
                </Link>
              </div>
            </div>
            <NavLink
              to="blogpage"
              className={({ isActive }) =>
                `text-white/40 hover:text-white transition-colors duration-200 text-sm font-medium ${isActive ? "text-white" : ""}`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="about"
              className={({ isActive }) =>
                `text-white/40 hover:text-white transition-colors duration-200 text-sm font-medium ${isActive ? "text-white" : ""}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="contact"
              className={({ isActive }) =>
                `text-white/40 hover:text-white transition-colors duration-200 text-sm font-medium ${isActive ? "text-white" : ""}`
              }
            >
              Contact
            </NavLink>
          </nav>
          {/*mobile menu toggle*/}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMenuOpen(false)}
        >
          {/*side menu panel*/}

          <div
            className={`fixed top-0 right-0  h-full w-64  bg-white shadow-lg transform transition-transform duration-300  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/*close button*/}

            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 text-2xl"
            >
              {" "}
              <FaTimes />
            </button>
            {/*mobil navLink*/}

            <nav className="flex flex-col p-6  pt-16 space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-300 transition ${isActive ? "text-blue-300 font-semibold" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="buy"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-300 transition ${isActive ? "text-blue-300 font-semibold" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Buy
              </NavLink>

              <NavLink
                to="rent"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-300 transition ${isActive ? "text-blue-300 font-semibold" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Rent
              </NavLink>
              {/*mobile dropdown properties*/}
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-700 hover:text-blue-300 transition  font-semibold w-full text-left"
                >
                  Properties
                </button>
                {isDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="properties"
                      className="block text-gray-600 hover:text-blue-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Condo
                    </Link>

                    <Link
                      to="#"
                      className="block text-gray-600 hover:text-blue-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Property Land
                    </Link>
                    <Link
                      to="#"
                      className="block text-gray-600 hover:text-blue-300 transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commercial Building
                    </Link>
                  </div>
                )}
              </div>
              <NavLink
                to="blogpage"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-300 transition ${isActive ? "text-blue-300 font-semibold" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NavLink>

              <NavLink
                to="about"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-300 transition ${isActive ? "text-blue-300 font-semibold" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>

              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-300 transition ${isActive ? "text-blue-300 font-semibold" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
