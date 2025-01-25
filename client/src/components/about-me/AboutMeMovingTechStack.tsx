import { motion } from "motion/react";
import { techStack } from "../../utils/aboutme";
import EachAboutMeComponent from "./EachAboutMeComponent";

const TechStackCarousel = () => {
  return (
    <EachAboutMeComponent headerText="My Stack">
      <div className=" my-3 relative w-full p-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-90"></div>

        <div className="relative">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 80,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...techStack, ...techStack, ...techStack, ...techStack].map(
              (tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[120px]  rounded-lg p-4"
                >
                  <div className="w-16 h-16 bg-transparent flex items-center justify-center  rounded-lg p-2">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-full h-full object-contain bg-transparent"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-white">
                    {tech.name}
                  </p>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </EachAboutMeComponent>
  );
};

export default TechStackCarousel;
