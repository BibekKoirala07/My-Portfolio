import { motion } from "motion/react";
import { education, experiences, techStack } from "../utils/utils";

const AboutMe = () => {
  // const TechStackRow = ({ techStack }: { techStack: any }) => {
  //   return (
  //     <motion.div
  //       animate={{
  //         x: [0, -1920],
  //       }}
  //       transition={{
  //         duration: 50,
  //         repeat: Infinity,
  //         ease: "linear",
  //       }}
  //       className="flex gap-16"
  //     >
  //       {techStack.map((tech: any, index: number) => (
  //         <div
  //           key={index}
  //           className="flex flex-col gap-5 items-center justify-center min-w-[100px]"
  //         >
  //           <img
  //             src={tech.path}
  //             alt={tech.name}
  //             className="w-12 h-12 object-contain"
  //           />
  //           <p className="mt-2 text-sm text-gray-300">{tech.name}</p>
  //         </div>
  //       ))}
  //     </motion.div>
  //   );
  // };

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="p-6  text-white rounded-xl space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h1 className="text-2xl font-semibold mb-4">About Me</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            perferendis, dicta itaque laboriosam voluptas optio? Totam
            asperiores accusantium perferendis quae repudiandae, sit nesciunt
            voluptates pariatur voluptatum praesentium, similique odio?
            Expedita!.
          </p>
          <p className="mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi,
            vero!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-12 bg-gray-800 rounded-lg shadow-md">
            <img
              src="/my_photo_main.jpg"
              alt="Random"
              className="rounded-full w-32 h-32 border-2 border-gray-500"
            />
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-xl font-semibold mb-4">My Tech Stack</h2>
        <div className="flex overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 100,
              repeat: Infinity,
              ease: "linear",
            }}
            className=" flex gap-4  p-3"
          >
            {duplicatedStack.map((tech, index) => (
              <div
                key={index}
                className="py-7 px-6 bg-[#272729] rounded-lg text-center w-[180px] shadow-md flex flex-col items-center"
              >
                <img
                  src={tech.path}
                  alt={tech.name}
                  className="w-12 h-12 mb-2 object-contain"
                />
                <p>{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* </div> */}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4 bg-[#272729] ">
          {experiences.map((exp, index) => (
            <div key={index} className="p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">{exp.title}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
              <p className="mt-2 text-gray-300 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-4 bg-[#272729]">
          {education.map((edu, index) => (
            <div key={index} className="p-4  rounded-lg shadow-md">
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-gray-400">{edu.degree}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
