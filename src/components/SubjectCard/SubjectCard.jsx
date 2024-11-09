import React from "react";
import { motion } from "framer-motion";
import { FaComputer, FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link from React Router

const subjectList = [
  {
    id: 1,
    name: "Web Application",
    icon: <FaComputer />,
    color: "#0063ff",
    delay: 0.2,
    link: "/services/web-development", // Adding the link path here
  },
  {
    id: 2,
    name: "Mobile Application",
    icon: <FaBook />,
    color: "#00c986",
    delay: 0.3,
    link: "/services/web-development", // Adding the link path here
  },
  {
    id: 3,
    name: "UI & UX",
    icon: <FaComputer />,
    color: "#922aee",
    delay: 0.4,
    link: "/services/web-development", // Adding the link path here
  },
  {
    id: 4,
    name: "Cloud Service",
    icon: <FaBook />,
    color: "#ea7516",
    delay: 0.5,
    link: "/services/web-development", // Adding the link path here
  },
  {
    id: 5,
    name: "Web Hosting",
    icon: <FaBook />,
    color: "#075267",
    delay: 0.6,
    link: "/services/web-development", // Adding the link path here
  },
  {
    id: 6,
    name: "Custom Software",
    icon: <FaBook />,
    color: "#986d1d",
    delay: 0.7,
    link: "/services/web-development", // Adding the link path here
  },
  {
    id: 7,
    name: "Open Source Software",
    icon: <FaBook />,
    color: "#b93838",
    delay: 0.8,
    link: "/services/web-development", // Adding the link path here
  },
  {
    id: 8,
    name: "See all",
    icon: <FaBook />,
    color: "#464646",
    delay: 0.9,
    link: "/services/web-development", // Adding the link path here
  },
];

const SubjectCard = () => {
  return (
    <div className="container py-14 md:py-24">
      {/* header section */}
      <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
        <h1 className="uppercase font-semibold text-orange-500">
          Our Software Services
        </h1>
        <p className="font-semibold text-3xl">***</p>
      </div>
      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {subjectList.map((subject) => {
          const CardContent = (
            <motion.div
              key={subject.id}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: subject.delay,
              }}
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:!scale-105 hover:!shadow-xl duration-200 cursor-pointer"
            >
              <div
                style={{
                  color: subject.color,
                  backgroundColor: subject.color + "20",
                }}
                className="w-10 h-10 rounded-md flex justify-center items-center"
              >
                {subject.icon}
              </div>
              <p>{subject.name}</p>
            </motion.div>
          );

          return subject.link ? (
            <Link to={subject.link} key={subject.id}>
              {CardContent}
            </Link>
          ) : (
            CardContent
          );
        })}
      </div>
    </div>
  );
};

export default SubjectCard;
