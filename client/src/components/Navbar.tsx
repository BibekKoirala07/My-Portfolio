import { Moon, Sun, Menu } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { navLinks } from "../utils/utils";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = ({
  theme,
  drawer,
  setDrawer,
  handleTheme,
}: {
  drawer: boolean;
  theme: string;
  setDrawer: Dispatch<SetStateAction<boolean>>;

  handleTheme: () => void;
}) => {
  console.log("drawer", drawer);
  return (
    <nav className="top-0 z-50">
      <div
        className={`max-w-7xl mx-auto p-5 md:px-9 flex justify-between items-center relative transition-all duration-500`}
      >
        <Link
          to={"/"}
          className="text-2xl font-medium text-primary-light dark:text-primaryText-dark"
        >
          Bibek Koirala
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm md:text-base">
            {navLinks.map((link) => (
              <HashLink
                smooth
                key={link.href}
                to={link.href}
                className="relative text-gray-700 dark:text-gray-200 hover:text-primary-light dark:hover:text-primary-dark transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-light dark:bg-primary-dark group-hover:w-full transition-all duration-300"></span>
              </HashLink>
            ))}
          </div>

          <button
            title="Disabled for now"
            // onClick={handleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button
            title="Disabled for now"
            // onClick={handleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme == "light" ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          <button
            className="relative z-20"
            onClick={() => setDrawer(true)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
          </button>
        </div>

        {drawer && (
          <div
            className="fixed md:hidden inset-0 transition-opacity duration-300"
            style={{ zIndex: 5 }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
