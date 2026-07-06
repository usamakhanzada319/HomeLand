import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 py-12 md:py-16">
      <div className="max-w-[1440] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 place-items-center">
          {/*first column*/}
          <div className="w-full text-center sm:text-left">
            <h3 className="text-white text-lg font-bold mb-4 ">
              About Homeland
            </h3>
            <span className="py-[1px] px-6 flex bg-white inline-block mb-4"></span>

            <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              pariatur reprehenderit vero atque, consequatur id ratione, et non
              dignissimos culpa? Ut veritatis, quos illum totam quis blanditiis,
              minima minus odio!
            </p>
          </div>

          {/*2nd column*/}

          <div className="w-full text-center sm:text-left">
            <h3 className="text-white text-lg font-bold mb-4">Navigations</h3>
            <span className="py-[1px] px-6 flex bg-white inline-block mb-4"></span>

            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto sm:mx-0">
              <ul className="space-y-2 text-sm ">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Buy
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Rent
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Properties
                  </Link>
                </li>
              </ul>

              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*3rd column*/}

          <div className="w-full text-center sm:text-left">
            <h3 className="text-white text-lg font-bold mb-4 ">Follow Us</h3>
            <span className="py-[1px] px-6 flex bg-white inline-block mb-4"></span>

            <div className="flex justify-center sm:justify-start gap-4">
              <Link to="#" className="text-gray-400 text-xl">
                <FaFacebook />
              </Link>

              <Link to="#" className="text-gray-400 text-xl">
                <FaTwitter />
              </Link>

              <Link to="#" className="text-gray-400 text-xl">
                <FaInstagram />
              </Link>

              <Link to="#" className="text-gray-400 text-xl">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/*copy right*/}

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>
            Copyright &copy;{new Date().getFullYear()} All rights reserved |
            Made with <span className="text-red-500">❤</span> by{" "}
            <Link to="#" className="text-white">
              Usama Jameel
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
