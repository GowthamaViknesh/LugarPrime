import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const Banner = ({ image, title, subtitle, link, tag, reverse }) => {
  return (
    <div className="bg-[#f9f9f9] pb-14 pt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0">
          {/* Banner Image Section */}
          <div
            className={`flex justify-start items-center ${reverse && "md:order-last md:justify-end"
              }`}
          >
            <motion.img
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              src={image}
              alt=""
              className="w-[300px] md:w-[400px] h-full object-cover" // Updated width for smaller screens
            />
          </div>
          {/* Banner Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] px-4 md:px-0"> {/* Added padding for small screens */}
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm text-orange-600 font-semibold capitalize"
            >
              {tag}
            </motion.p>
            <motion.p
              variants={SlideUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              className="text-lg md:text-2xl lg:text-4xl font-semibold capitalize text-blue-500" // Updated font size for smaller screens
            >
              {title}
            </motion.p>
            <motion.p
              variants={SlideUp(0.9)}
              initial="hidden"
              whileInView={"visible"}
              className="text-sm md:text-base" // Adjusted font size
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
