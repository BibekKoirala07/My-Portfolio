import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../App.css";
import { motion } from "motion/react";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

// https://www.facebook.com/bibek.koirala.35728

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-colors"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  console.log(`  fixed top-[20px] right-0
          lg:hidden
          h-screen

          w-[calc(100%-40px)]
          mx-5
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
          lg:w-auto
          z-30
          transition-transform duration-300 ease-in-out
          rounded-lg`);
  return (
    <div className=" w-full lg:grid grid-cols-4 gap-4 p-3 sm:p-5">
      {/* For Mobile  */}

      {/* <div
        className={`
         fixed top-[20px] right-0
          lg:hidden
          h-screen
          w-[calc(100%-40px)]
          mx-5
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          ${isSidebarOpen ? "backdrop-blur-md bg-white/30 shadow-md" : ""}
          lg:static lg:translate-x-0
          lg:w-auto
          z-30
          transition-transform duration-300 ease-in-out
          rounded-xl
        `}
      >
        <Navbar
          isMobile
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div> */}

      <div
        className={`
    fixed inset-0
    lg:hidden
    h-screen
    w-full
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    ${isSidebarOpen ? "backdrop-blur-md bg-white/10 shadow-lg" : ""}
    z-30
    transition-transform duration-300 ease-in-out
  `}
      >
        <div className="p-5 h-full">
          <Navbar
            isMobile
            isSidebarOpen={isSidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
      </div>

      {/* For Laptop */}
      <div
        className={`
          hidden lg:block
        `}
      >
        <Navbar
          isMobile={false}
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      <div className="col-span-3">
        <div className=" py-5 px-7 dark:bg-dark-mainComponentBackground mb-4 rounded-lg flex justify-between items-center bg-red-500">
          <div
            className="flex  lg:hidden flex-col gap-1 cursor-pointer w-9"
            onClick={() => setSidebarOpen((prevState) => !prevState)}
          >
            <span className="bg-white h-[3px] w-full rounded-full"></span>
            <span className="bg-white h-[3px] w-full rounded-full"></span>
            <span className="bg-white h-[3px] w-full rounded-full"></span>
          </div>
          <div className=" hidden lg:block gap-1 cursor-pointer text-white">
            <motion.p
              className="text-2xl font-medium"
              style={{
                color: "white",
                textShadow:
                  "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000",
              }}
              animate={{
                textShadow: [
                  "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000",
                  "0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000",
                  "0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Bibek Koirala
            </motion.p>
          </div>
          <div className="flex gap-7">
            <SocialLink
              href="https://github.com/BibekKoirala07"
              icon={Github}
              label="GitHub Profile"
            />
            <SocialLink
              href="https://www.linkedin.com/in/bibek-koirala-513957205/"
              icon={Linkedin}
              label="LinkedIn Profile"
            />
            {/* <SocialLink
              href="https://twitter.com/yourusername"
              icon={Twitter}
              label="Twitter Profile"
            /> */}
            <SocialLink
              href="www.koiralabibek2058@gmail.com"
              icon={Mail}
              label="Email Contact"
            />
          </div>
        </div>
        <motion.div
          className={`text-white rounded-xl dark:bg-dark-mainComponentBackground`}
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 4,
          }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};

export default MainLayout;
