import { XIcon } from "lucide-react";
import { navLinks } from "../utils/utils";

const Drawer = ({ drawer, setDrawer }: { drawer: boolean; setDrawer: any }) => {
  return (
    <div
      className={`fixed md:hidden top-0 right-0 h-screen w-72 bg-white dark:bg-background-dark shadow-lg ${
        drawer ? "drawer-enter" : "drawer-exit"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex flex-col gap-6 pt-4">
        <div className="flex justify-end pr-3">
          <button
            className=" hover:bg-black transition-all dark:hover:bg-  rounded-lg"
            onClick={() => setDrawer(false)}
          >
            <XIcon className=" text-black transition-all hover:text-white w-full h-full p-2 dark:text-white dark:hover:text-black" />
          </button>
        </div>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-lg px-6 text-gray-700 dark:text-gray-200 hover:font-semibold transition-all "
            onClick={() => setDrawer(false)} // Close the drawer when a link is clicked
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Drawer;
