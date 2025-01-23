import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "About Me" },
  { path: "/projects", label: "Projects" },
  { path: "/tools", label: "Tools" },
  { path: "/contact", label: "Contact" },
  { path: "/resume", label: "Resume" },
  { path: "/blogs", label: "Blogs" },
];

const Navbar = ({
  isMobile = false,
  // isSidebarOpen,
  setSidebarOpen,
}: {
  isMobile: boolean;
  isSidebarOpen: any;
  setSidebarOpen: any;
}) => {
  const handleSidebar = () => {
    setSidebarOpen((prevState: boolean) => !prevState);
  };
  const location = useLocation();
  console.log("dark:bg-dark-mainComponentBackground ");
  console.log(`    dark:bg-dark-mainComponentBackground/80
        backdrop-blur-sm
        h-fit pb-10 text-center rounded-xl p-5 text-white w-full
        ${isMobile ? "shadow-xl" : ""}
        transition-all duration-300`);
  return (
    <div
      className={`
       
        dark:bg-dark-mainComponentBackground
    h-fit pb-10 text-center rounded-xl p-5 text-white w-full`}
    >
      {isMobile && (
        <div className="flex justify-end mb-7">
          <button
            onClick={() => setSidebarOpen(false)}
            className="
           w-10 h-10 
           relative 
           focus:outline-none 
           rounded-lg
           bg-white/10
           hover:bg-white/20
           transition-all 
           duration-300
           group
         "
          >
            <span
              className={`
           absolute top-1/2 left-1/2 
           w-6 h-0.5 
           bg-white 
           rounded-full
           -translate-x-1/2 -translate-y-1/2
           transform rotate-45 
           transition-all duration-300
           group-hover:w-5
           group-hover:bg-white/90
         `}
            ></span>
            <span
              className={`
           absolute top-1/2 left-1/2
           w-6 h-0.5 
           bg-white 
           rounded-full
           -translate-x-1/2 -translate-y-1/2
           transform -rotate-45 
           transition-all duration-300
           group-hover:w-5
           group-hover:bg-white/90
         `}
            ></span>
          </button>
        </div>
      )}
      <div className="bg-[#242424] mx-8 mt-4 flex justify-center rounded-xl py-8  ">
        <img
          src="/my_photo_main.jpg"
          alt="Profile"
          className="w-[90px] object-cover rounded-full h-[90px]"
        />
      </div>
      <h1 className="text-2xl mt-3 font-medium">Bibek Koirala</h1>
      <p className="italic">Full-Stack Developer</p>

      <nav className="flex flex-col space-y-2 mt-4">
        {navLinks.map((link, index) => {
          if (link.path === "/resume") {
            return (
              <a
                key={index}
                href="/BibekKoirala_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 p-2 rounded text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            );
          }
          return (
            <Link
              key={index}
              to={link.path}
              onClick={() => handleSidebar()}
              className={`hover:text-gray-400  p-2 rounded text-black font-medium ${
                location.pathname == link.path ? "bg-white" : " text-white"
              } transition-colors`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
