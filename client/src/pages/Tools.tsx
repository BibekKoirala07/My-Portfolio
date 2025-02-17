import ComponentBox from "../components/ComponentBox";
import { techStack, typeTechStack } from "../utils/aboutme";

const Tools = () => {
  return (
    <ComponentBox>
      <div className="grid grid-cols-1 sm:grid-cols-3 p-3  lg:grid-cols-4 gap-7">
        {techStack.map((each: typeTechStack, index) => {
          return (
            <div
              key={index}
              className="relative group 
                         bg-white/5 dark:bg-[#272729] 
                         text-center p-5 
                         pb-8
                         rounded-2xl 
                         border border-white/10 dark:border-white/5
                         transition-all duration-500 ease-out
                         hover:border-white/30 
                         shadow-lg hover:shadow-2xl
                         overflow-hidden"
            >
              <div
                className="absolute inset-0 
                           bg-gradient-to-br 
                           from-white/10 via-white/5 to-transparent 
                           opacity-0 group-hover:opacity-100 
                           transition-opacity duration-500 
                           blur-sm group-hover:blur-0"
              />
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className="p-4 flex justify-center 
                                transition-transform duration-500 
                                group-hover:scale-100 
                                group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  <img
                    src={each.img}
                    alt=""
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p
                  className="font-medium mt-2 
                              text-gray-700 dark:text-gray-300
                              group-hover:text-black dark:group-hover:text-white 
                              transition-colors duration-500"
                >
                  {each.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </ComponentBox>
  );
};

export default Tools;
