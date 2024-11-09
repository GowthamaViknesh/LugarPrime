// import webDev from "../../assets/Web.mp4";
// import DeveloperCarousel from "./DeveloperCarousel";

// function WebDevelopment() {
//   // const videoRef = useRef(null);

//   // useEffect(() => {
//   //   if (videoRef.current) {
//   //     videoRef.current.playbackRate = 0.9; // Slow down the video (0.5x speed)
//   //   }
//   // }, []);

//   return (
//     <>
//       <div className="relative w-full h-screen overflow-hidden">
//         {/* Video Background */}
//         <video
//           // ref={videoRef}
//           src={webDev}
//           autoPlay
//           loop
//           muted
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Text Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center space-y-6 px-4">
//           <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
//             Empowering Web Development
//           </h1>
//           <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
//             Team of exceptional web developers offering end-to-end Web Development
//             Solutions for diverse industries.
//           </p>

//           <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
//           Start Your Journey
//           </button>
//         </div>
//       </div>
//       <DeveloperCarousel />
//     </>
//   );
// }

// export default WebDevelopment;

import React, { useState } from "react";
import { Code, Layout, Smartphone, Globe, ChevronRight } from "lucide-react";
import whychooseus from "../../assets/banner1.png";

const services = [
  {
    icon: <Code className="w-12 h-12 text-secondary" />,
    title: "Custom Web Development",
    description: "Tailored solutions to meet your unique business needs",
  },
  {
    icon: <Layout className="w-12 h-12 text-secondary" />,
    title: "Responsive Design",
    description: "Websites that look great on any device",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-secondary" />,
    title: "Mobile-First Approach",
    description: "Optimized for the growing mobile user base",
  },
  {
    icon: <Globe className="w-12 h-12 text-secondary" />,
    title: "E-commerce Solutions",
    description: "Powerful online stores to boost your sales",
  },
];

const features = [
  {
    title: "Experienced team of developers",
    description:
      "Our team consists of seasoned professionals with over a decade of experience in web development. We've successfully delivered hundreds of projects across various industries, bringing depth of knowledge and practical expertise to every project we undertake.",
  },
  {
    title: "Cutting-edge technologies",
    description:
      "We stay ahead of the curve by utilizing the latest technologies and frameworks. From React and Node.js to cloud computing and AI integration, we implement modern solutions that ensure your project is future-proof and performs at its best.",
  },
  {
    title: "Customized solutions for your business",
    description:
      "We don't believe in one-size-fits-all solutions. Our team works closely with you to understand your unique business needs and creates tailored solutions that align perfectly with your goals and objectives. Every line of code is written with your specific requirements in mind.",
  },
  {
    title: "Ongoing support and maintenance",
    description:
      "Our commitment doesn't end with deployment. We provide comprehensive support and maintenance services to ensure your website continues to perform optimally. Regular updates, security patches, and performance optimization are all part of our ongoing service package.",
  },
];

export default function WebDevelopment() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section className="py-40 bg-gradient-to-r from-red-500 to-blue-900 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Expert` Web Development Solutions
                </h1>
                {/* <p className="text-xl mb-8">
                  We create stunning, high-performance websites that drive results for your business.
                </p> */}
                {/* <button className="bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                  Get Started
                </button> */}
              </div>
              <div className="md:w-1/2">
                <img src="../src/assets/Banner.gif" alt="Web Development" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card text-card-foreground rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PART-03 START */}
        <section>
          {/* Container */}
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            {/* Title */}
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-3xl mb-8 md:mb-12 lg:mb-16 text-red-500">
              Industry-Specific Software Solutions
            </h2>
            {/* Content */}
            <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Healthcare Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Healthcare App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Fitness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Wellness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Mental Health App
                      </span>
                    </li>
                  </ul>
                </div>
              </a>

              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Restaurant Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Healthcare App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Fitness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Wellness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Mental Health App
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Manufacturing Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Healthcare App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Fitness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Wellness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Mental Health App
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Travel Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Healthcare App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Fitness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Wellness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Mental Health App
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Agriculture Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Healthcare App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Fitness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Wellness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Mental Health App
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
              {/* Item */}
              <a
                href="#"
                className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-red hover:text-blue-500 transition group"
              >
                <div className="flex w-full items-center justify-between">
                  <h5 className="text-xl font-bold">
                    Retail Solution Development
                  </h5>
                  {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.25 6H18V15.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg> */}
                </div>

                <div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Healthcare App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Fitness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Wellness App Development
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3  transition"></span>
                      <span className="text-gray-700 group-hover:text-red-500 transition">
                        Mental Health App
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl font-bold mb-6 pl-20">Why Choose Us?</h2>
                <ul className="space-y-4 pl-10 pb-20 pt-10">
                  {features.map((feature, index) => (
                    <li key={index} className="flex flex-col">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex items-center text-left w-full focus:outline-none"
                      >
                        <ChevronRight
                          className={`w-10 h-10 text-primary mr-2 transition-transform ${
                            openIndex === index ? "rotate-90" : ""
                          }`}
                        />
                        <span className="text-xl font-bold">
                          {feature.title}
                        </span>
                      </button>
                      {openIndex === index && (
                        <p className="pl-7 mt-2 text-black pr-10">
                          {feature.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <img
                  src={whychooseus}
                  alt="Our Team"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you achieve your goals.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
              Contact Us
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
