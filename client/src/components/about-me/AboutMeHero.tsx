import EachAboutMeComponent from "./EachAboutMeComponent";
import { motion } from "motion/react";

const AboutMeHero = () => {
  return (
    <EachAboutMeComponent headerText="About Me">
      <div className="grid gap-3 sm:grid-cols-2 ">
        <motion.div
          className="sm:col-span-1 flex flex-col justify-center  h-[300px] sm:h-auto space-y-6 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <p className="text-lg text-[#d7d6db] leading-relaxed max-w-2xl">
            I’m mainly focused on backend development, building scalable and
            secure systems to keep applications running smoothly. I enjoy
            designing architectures, optimizing databases, and crafting solid
            APIs.
          </p>

          <p className="text-lg text-[#d7d6db] leading-relaxed max-w-2xl">
            I can handle frontend development just fine, but backend is where
            I’m at my best. I like creating well-structured, high-performance
            solutions that make everything work seamlessly behind the scenes.
          </p>
        </motion.div>

        <div className="p-10 sm:p-0 relative   flex justify-center">
          <div
            className="b-[#242424] sm:w-[280px] flex items-center justify-center p-12 sm:p-0 sm:h-[280px] bg-[#363636]"
            style={{ borderRadius: "3rem" }}
          >
            <img
              src="my_photo_main.jpg"
              alt=""
              className="sm:w-[200px] sm:h-[200px] object-cover"
              style={{ borderRadius: "4em" }}
            />
          </div>
        </div>
      </div>
    </EachAboutMeComponent>
  );
};

export default AboutMeHero;
// import React from "react";

// const AboutMeHero = () => {
//   return (
//     <main className="p-8 bg-black text-gray-300">
//       <h1 className="font-bold text-3xl mb-8 text-white">About me</h1>

//       <div className="grid gap-8 sm:grid-cols-3">
//         {/* Text Content */}
//         <div className="sm:col-span-2 space-y-6">
//           <p className="text-lg leading-relaxed opacity-90">
//             An experienced programmer with more than 10 years of experience
//             specializing in web development and creating adaptive interfaces. He
//             is proficient in modern technologies and strives for excellence in
//             every project.
//           </p>

//           <p className="text-lg leading-relaxed opacity-90">
//             My job is to build your website so that it is functional and user-
//             friendly but at the same time attractive.
//           </p>

//           <h2 className="font-bold text-2xl text-white pt-4">My stack</h2>
//         </div>

//         {/* Profile Image */}
//         <div className="relative">
//           <div className="aspect-square w-full max-w-[300px] mx-auto">
//             <div className="absolute inset-0 bg-[#242424] rounded-[3rem]">
//               <div className="absolute inset-4 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-[2.5rem]">
//                 <img
//                   src="/my_photo_main.jpg"
//                   alt="Profile"
//                   className="w-full h-full object-cover rounded-[2.5rem]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default AboutMeHero;
