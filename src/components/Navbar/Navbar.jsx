import logo from "../../assets/Lugar-Prime.png";
import React, { useEffect } from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsOpen]);

  return (
    <>
      <ScrollToTop />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="w-full fixed top-0 left-0 right-0 px-7 z-50 shadow-lg bg-white">
          <div className="container mx-auto flex justify-between items-center py-4 px-4">
            {/* Logo section */}
            <div className="text-2xl flex items-center gap-3 font-bold">
              <a href="/">
                <img src={logo} className="w-[150px] px-2" alt="Lugar Prime Logo" />
              </a>
            </div>

            {/* Menu section for large screens */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-3">
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="relative group">
                    {item.dropdown ? (
                      <>
                        {/* Dropdown-triggering item */}
                        <span className="inline-block text-gray-600 text-xs xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold cursor-default">
                          {item.title}
                        </span>
                        {/* Dropdown */}
                        <ul className="absolute top-full left-0 mt-4 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-w-max max-h-64 overflow-y-auto">
                          {item.dropdown.map((subItem, index) => (
                            <li key={index} className="hover:bg-gray-100">
                              <Link
                                to={subItem.link}
                                className="block px-4 py-2 text-xs xl:text-base text-gray-700"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      // Direct navigation item for Home, About Us, and Contact Us
                      <Link
                        to={item.link}
                        className="inline-block text-gray-600 text-xs xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button section */}
            {/* <div className="hidden lg:block space-x-6">
              <a href="https://wa.me/918825827613" target="_blank" rel="noopener noreferrer">
                <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2">
                  Connect Now
                </button>
              </a>
            </div> */}

            {/* Mobile Hamburger Menu */}
            <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <MdMenu className="text-4xl" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
