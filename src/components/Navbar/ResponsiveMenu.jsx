// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { ChevronDown, X } from "lucide-react";
// import LP from "../../assets/LP.png";

// // eslint-disable-next-line react/prop-types
// const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
//   const [openSection, setOpenSection] = useState(null);

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setOpenSection(null);
//   };

//   const toggleSection = (sectionKey) => {
//     setOpenSection(openSection === sectionKey ? null : sectionKey);
//   };

//   const menuSections = {
//     software: {
//       title: "Software Development",
//       items: [
//         { title: "Web Development", path: "/services/web-development" },
//         { title: "Mobile Development", path: "/services/mobile-development" },
//         { title: "UI & UX Development", path: "/services/ui-ux-development" }
//       ]
//     },
//     business: {
//       title: "Business Consulting",
//       items: [
//         { title: "Strategy Consulting", path: "/services/strategy-consulting" },
//         { title: "Operations Consulting", path: "/services/operations-consulting" },
//         { title: "Financial Advisory", path: "/services/financial-advisory" }
//       ]
//     },
//     marketing: {
//       title: "Digital Marketing",
//       items: [
//         { title: "Social Media Marketing", path: "/services/social-media-marketing" },
//         { title: "Content Marketing", path: "/services/content-marketing" },
//         { title: "SEO Services", path: "/services/seo-services" }
//       ]
//     }
//   };

//   const renderMenuItem = (sectionKey, section) => (
//     <li key={sectionKey} className="relative">
//       <div className="py-4">
//         <button
//           onClick={() => toggleSection(sectionKey)}
//           className="w-full flex items-center justify-between text-lg font-semibold hover:text-blue-600 transition-colors"
//         >
//           <span>{section.title}</span>
//           <ChevronDown
//             className={`w-4 h-4 transition-transform duration-300 ${openSection === sectionKey ? "rotate-180" : ""
//               }`}
//           />
//         </button>
//         <AnimatePresence>
//           {openSection === sectionKey && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               <motion.ul
//                 initial={{ x: -20 }}
//                 animate={{ x: 0 }}
//                 exit={{ x: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="py-2 space-y-2"
//               >
//                 {section.items.map((item) => (
//                   <li key={item.path}>
//                     <Link
//                       to={item.path}
//                       className="text-gray-600 hover:text-blue-600 transition-colors block pl-4 py-2"
//                       onClick={handleLinkClick}
//                     >
//                       {item.title}
//                     </Link>
//                   </li>
//                 ))}
//               </motion.ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//       <motion.hr
//         className="border-gray-400"
//         animate={{
//           width: openSection === sectionKey ? "100%" : "100%",
//           marginLeft: openSection === sectionKey ? "0" : "0"
//         }}
//         transition={{ duration: 0.3 }}
//       />
//     </li>
//   );

//   return (
//     <AnimatePresence mode="wait">
//       {isOpen && (
//         <>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.5 }}
//             exit={{ opacity: 0 }}
//             onClick={() => {
//               setIsOpen(false);
//               setOpenSection(null);
//             }}
//             className="fixed inset-0 bg-black z-30"
//           />

//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-xl"
//           >
//             <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-gray-200">
//               <div className="flex items-center gap-2">
//                 <a href="/">
//                   <img
//                     src={LP}
//                     alt="Logo"
//                     className="w-12 h-12 object-contain rounded"
//                   />
//                 </a>
//                 <p className="text-xl font-bold">Lugar Prime</p>
//               </div>
//               <button
//                 onClick={() => {
//                   setIsOpen(false);
//                   setOpenSection(null);
//                 }}
//                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="h-full pt-[90px] px-6 overflow-y-auto">
//               <ul className="flex flex-col">
//                 <li className="py-3">
//                   <Link
//                     to="/"
//                     className="text-lg font-semibold hover:text-blue-600 transition-colors block"
//                     onClick={handleLinkClick}
//                   >
//                     Home
//                   </Link>
//                   <motion.hr
//                     className="mt-3 border-gray-400"
//                     animate={{ width: "100%", marginLeft: "0" }}
//                   />
//                 </li>

//                 {Object.entries(menuSections).map(([key, section]) =>
//                   renderMenuItem(key, section)
//                 )}

//                 <li className="py-4">
//                   <Link
//                     to="/about-us"
//                     className="text-lg font-semibold hover:text-blue-600 transition-colors block"
//                     onClick={handleLinkClick}
//                   >
//                     About Us
//                   </Link>
//                   <motion.hr
//                     className="mt-4 border-gray-400"
//                     animate={{ width: "100%", marginLeft: "0%" }}
//                   />
//                 </li>

//                 <li className="py-4">
//                   <Link
//                     to="/contact-us"
//                     className="text-lg font-semibold hover:text-blue-600 transition-colors block"
//                     onClick={handleLinkClick}
//                   >
//                     Contact Us
//                   </Link>
//                   <motion.hr
//                     className="mt-4 border-gray-400"
//                     animate={{ width: "100%", marginLeft: "0%" }}
//                   />
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




import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import LP from "../../assets/LP.png";

// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  const [openSection, setOpenSection] = useState(null);

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  const toggleSection = (sectionKey) => {
    setOpenSection(openSection === sectionKey ? null : sectionKey);
  };

  const menuSections = {
    software: {
      title: "Software Development",
      items: [
        { title: "Web Development", path: "/services/web-development" },
        { title: "Mobile Development", path: "/services/mobile-development" },
        { title: "UI & UX Development", path: "/services/ui-ux-development" }
      ]
    },
    business: {
      title: "Business Consulting",
      items: [
        { title: "Strategy Consulting", path: "/services/strategy-consulting" },
        { title: "Operations Consulting", path: "/services/operations-consulting" },
        { title: "Financial Advisory", path: "/services/financial-advisory" }
      ]
    },
    marketing: {
      title: "Digital Marketing",
      items: [
        { title: "Social Media Marketing", path: "/services/social-media-marketing" },
        { title: "Content Marketing", path: "/services/content-marketing" },
        { title: "SEO Services", path: "/services/seo-services" }
      ]
    }
  };

  const renderMenuItem = (sectionKey, section) => (
    <li key={sectionKey} className="relative">
      <div className="py-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between text-lg font-semibold hover:text-blue-600 transition-colors"
        >
          <span>{section.title}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${openSection === sectionKey ? "rotate-180" : ""
              }`}
          />
        </button>
        <AnimatePresence>
          {openSection === sectionKey && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.ul
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                exit={{ x: -20 }}
                transition={{ duration: 0.3 }}
                className="py-2 space-y-2"
              >
                {section.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-900 font-bolder hover:text-blue-600 transition-colors block pl-4 py-2"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.hr
        className="border-gray-400"
        animate={{
          width: openSection === sectionKey ? "100%" : "100%",
          marginLeft: openSection === sectionKey ? "0" : "0"
        }}
        transition={{ duration: 0.3 }}
      />
    </li>
  );

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
              setOpenSection(null);
            }}
            className="fixed inset-0 bg-black z-30"
          />

          <motion.div
            initial={{ x: "-100%" }}  // Changed from 100% to -100%
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}     // Changed from 100% to -100%
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-80 h-full bg-white z-50 shadow-xl" // Changed right-0 to left-0
          >
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-gray-200">
              <div className="flex items-center gap-2">
                <a href="/">
                  <img
                    src={LP}
                    alt="Logo"
                    className="w-12 h-12 object-contain rounded"
                  />
                </a>
                <p className="text-xl font-bold">Lugar Prime</p>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setOpenSection(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="h-full pt-[90px] px-6 overflow-y-auto">
              <ul className="flex flex-col">
                <li className="py-3">
                  <Link
                    to="/"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors block"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <motion.hr
                    className="mt-3 border-gray-400"
                    animate={{ width: "100%", marginLeft: "0" }}
                  />
                </li>

                {Object.entries(menuSections).map(([key, section]) =>
                  renderMenuItem(key, section)
                )}

                <li className="py-4">
                  <Link
                    to="/about-us"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors block"
                    onClick={handleLinkClick}
                  >
                    About Us
                  </Link>
                  <motion.hr
                    className="mt-4 border-gray-400"
                    animate={{ width: "100%", marginLeft: "0%" }}
                  />
                </li>

                <li className="py-2">
                  <Link
                    to="/contact-us"
                    className="text-lg font-semibold hover:text-blue-600 transition-colors block"
                    onClick={handleLinkClick}
                  >
                    Contact Us
                  </Link>
                  <motion.hr
                    className="mt-4 border-gray-400"
                    animate={{ width: "100%", marginLeft: "0%" }}
                  />
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