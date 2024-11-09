// import { motion, AnimatePresence } from "framer-motion";

// const ResponsiveMenu = ({ isOpen }) => {
//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
//         >
//           <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
//             <ul className="flex flex-col justify-center items-center gap-10">
//               <li>Home</li>
//               <li>About</li>
//               <li>Service</li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const ResponsiveMenu = ({ isOpen }) => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
//         >
//           <div className="text-xl font-semibold uppercase bg-primary text-black py-10 m-6 rounded-3xl">
//             <ul className="flex flex-col justify-center items-center gap-7">
//               <li>Home</li>
//               <li>About</li>
//               <li onClick={() => setIsServicesOpen(!isServicesOpen)} className="text-center">
//                 Service
//                 {/* Dropdown for Services */}
//                 {isServicesOpen && (
//                   <motion.ul
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex flex-col items-center gap-4 mt-4"
//                   >
//                     <li className="text-sm">Web Development</li>
//                     <li className="text-sm">Mobile Development</li>
//                     <li className="text-sm">UI/UX Design</li>
//                   </motion.ul>
//                 )}
//               </li>
//               <li>Contact</li>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
//   const [isSoftwareDevHovered, setIsSoftwareDevHovered] = useState(false); // Hover state for Software Development

//   const handleLinkClick = () => {
//     setIsOpen(false); // Close the menu when a link is clicked
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -100 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -100 }}
//           transition={{ duration: 0.3 }}
//           className="absolute top-20 left-0 w-full h-screen z-20 lg:hidden"
//         >
//           <div className="text-xl font-semibold uppercase bg-white text-black py-10 m-6 rounded-3xl">
//             <ul className="flex flex-col justify-center items-center gap-7">
//               {/* Home Button */}
//               <Link to="/" className="text-center cursor-pointer" onClick={handleLinkClick}>
//                 Home
//               </Link>

//               {/* Software Development with Hover Dropdown */}
//               <li
//                 onMouseEnter={() => setIsSoftwareDevHovered(true)}
//                 onMouseLeave={() => setIsSoftwareDevHovered(false)}
//                 className="text-center cursor-pointer"
//               >
//                 Software Development
//                 {isSoftwareDevHovered && (
//                   <motion.ul
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex flex-col items-center gap-4 mt-4"
//                   >
//                     <Link
//                       to="/services/web-development"
//                       className="text-sm cursor-pointer"
//                       onClick={handleLinkClick}
//                     >
//                       Web Development
//                     </Link>
//                     <Link
//                       to="/services/mobile-development"
//                       className="text-sm cursor-pointer"
//                       onClick={handleLinkClick}
//                     >
//                       Mobile Development
//                     </Link>
//                     <Link
//                       to="/services/ui-ux-development"
//                       className="text-sm cursor-pointer"
//                       onClick={handleLinkClick}
//                     >
//                       UI & UX Development
//                     </Link>
//                   </motion.ul>
//                 )}
//               </li>

//               {/* Business Consulting Button */}
//               <Link to="/services/business-consulting" className="text-center cursor-pointer" onClick={handleLinkClick}>
//                 Business Consulting
//               </Link>

//               {/* Digital Marketing Button */}
//               <Link to="/services/digital-marketing" className="text-center cursor-pointer" onClick={handleLinkClick}>
//                 Digital Marketing
//               </Link>

//               {/* About Us Button */}
//               <Link to="/about-us" className="text-center cursor-pointer" onClick={handleLinkClick}>
//                 About Us
//               </Link>

//               {/* Contact Us Button */}
//               <Link to="/contact-us" className="text-center cursor-pointer" onClick={handleLinkClick}>
//                 Contact Us
//               </Link>
//             </ul>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import LP from "../../assets/LP.png";

// // eslint-disable-next-line react/prop-types
// const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
//   const [isSoftwareDevHovered, setIsSoftwareDevHovered] = useState(false);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//   };

//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <>
//           {/* Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.5 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 bg-black z-30"
//           />

//           {/* Side Navigation */}
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "tween", duration: 0.3 }}
//             className="fixed top-0 right-0 w-80 h-full bg-gray-50 z-50 shadow-xl"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
//             >
//               <div className="flex items-center gap-2 mb-6">
//                 <img
//                   src={LP}
//                   alt="Lugar Prime Logo"
//                   className="w-12 h-12 object-contain"
//                 />
//                 <p className="text-xl font-bold">Lugar Prime</p>
//               </div>
//               <X className="w-6 h-6" />
//             </button>

//             {/* Navigation Content */}
//             <div className="h-full py-16 px-6">
//               <ul className="flex flex-col gap-6">
//                 {/* Home */}
//                 <li>
//                   <Link
//                     to="/"
//                     className="text-lg font-semibold hover:text-blue-600 transition-colors"
//                     onClick={handleLinkClick}
//                   >
//                     Home
//                   </Link>
//                 </li>

//                 {/* Software Development Dropdown */}
//                 <li>
//                   <div
//                     onMouseEnter={() => setIsSoftwareDevHovered(true)}
//                     onMouseLeave={() => setIsSoftwareDevHovered(false)}
//                     className="relative"
//                   >
//                     <span className="text-lg font-semibold hover:text-blue-600 transition-colors cursor-pointer">
//                       Software Development
//                     </span>
//                     <AnimatePresence>
//                       {isSoftwareDevHovered && (
//                         <motion.ul
//                           initial={{ opacity: 0, y: -10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           className="pl-4 mt-2 lg:border-l-2 lg:border-gray-200"
//                         >
//                           <li className="py-2">
//                             <Link
//                               to="/services/web-development"
//                               className="text-gray-900 hover:text-blue-600 transition-colors"
//                               onClick={handleLinkClick}
//                             >
//                               Web Development
//                             </Link>
//                           </li>
//                           <li className="py-2">
//                             <Link
//                               to="/services/mobile-development"
//                               className="text-gray-900 hover:text-blue-600 transition-colors"
//                               onClick={handleLinkClick}
//                             >
//                               Mobile Development
//                             </Link>
//                           </li>
//                           <li className="py-2">
//                             <Link
//                               to="/services/ui-ux-development"
//                               className="text-gray-900 hover:text-blue-600 transition-colors"
//                               onClick={handleLinkClick}
//                             >
//                               UI & UX Development
//                             </Link>
//                           </li>
//                         </motion.ul>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </li>

//                 {/* Business Consulting */}
//                 <li>
//                   <Link
//                     to="/services/business-consulting"
//                     className="text-lg font-semibold hover:text-blue-600 transition-colors"
//                     onClick={handleLinkClick}
//                   >
//                     Business Consulting
//                   </Link>
//                 </li>

//                 {/* Digital Marketing */}
//                 <li>
//                   <Link
//                     to="/services/digital-marketing"
//                     className="text-lg font-semibold hover:text-blue-600 transition-colors"
//                     onClick={handleLinkClick}
//                   >
//                     Digital Marketing
//                   </Link>
//                 </li>

//                 {/* About Us */}
//                 <li>
//                   <Link
//                     to="/about-us"
//                     className="text-lg font-semibold hover:text-blue-600 transition-colors"
//                     onClick={handleLinkClick}
//                   >
//                     About Us
//                   </Link>
//                 </li>

//                 {/* Contact Us */}
//                 <li>
//                   <Link
//                     to="/contact-us"
//                     className="text-lg font-semibold hover:text-blue-600 transition-colors"
//                     onClick={handleLinkClick}
//                   >
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ResponsiveMenu;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { X } from 'lucide-react';
// import { AnimatePresence, motion } from 'framer-motion';

const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  const [isSoftwareDevHovered, setIsSoftwareDevHovered] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-30"
          />

          {/* Side Navigation */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-80 h-full bg-gray-50 z-50 shadow-xl"
          >
            {/* Header with Logo and Close Button */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-gray-200">
              <div className="flex items-center gap-2">
                <img
                  src={LP}
                  alt="Lugar Prime Logo"
                  className="w-12 h-12 object-contain"
                />
                <p className="text-xl font-bold">Lugar Prime</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Content */}
            <div className="h-full pt-24 px-6">
              <ul className="flex flex-col gap-6">
                {/* Home */}
                <li>
                  <Link
                    to="/"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                </li>

                {/* Software Development Dropdown */}
                <li>
                  <div
                    onMouseEnter={() => setIsSoftwareDevHovered(true)}
                    onMouseLeave={() => setIsSoftwareDevHovered(false)}
                    className="relative"
                  >
                    <span className="text-lg font-semibold hover:text-blue-600 transition-colors cursor-pointer">
                      Software Development
                    </span>
                    <AnimatePresence>
                      {isSoftwareDevHovered && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="pl-4 mt-2 lg:border-l-2 lg:border-gray-200"
                        >
                          <li className="py-2">
                            <Link
                              to="/services/web-development"
                              className="text-gray-900 hover:text-blue-600 transition-colors"
                              onClick={handleLinkClick}
                            >
                              Web Development
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link
                              to="/services/mobile-development"
                              className="text-gray-900 hover:text-blue-600 transition-colors"
                              onClick={handleLinkClick}
                            >
                              Mobile Development
                            </Link>
                          </li>
                          <li className="py-2">
                            <Link
                              to="/services/ui-ux-development"
                              className="text-gray-900 hover:text-blue-600 transition-colors"
                              onClick={handleLinkClick}
                            >
                              UI & UX Development
                            </Link>
                          </li>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </li>

                {/* Business Consulting */}
                <li>
                  <Link
                    to="/services/business-consulting"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Business Consulting
                  </Link>
                </li>

                {/* Digital Marketing */}
                <li>
                  <Link
                    to="/services/digital-marketing"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Digital Marketing
                  </Link>
                </li>

                {/* About Us */}
                <li>
                  <Link
                    to="/about-us"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>
                </li>

                {/* Contact Us */}
                <li>
                  <Link
                    to="/contact-us"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors"
                    onClick={handleLinkClick}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
