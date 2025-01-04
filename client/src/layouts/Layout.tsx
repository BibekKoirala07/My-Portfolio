import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className=" flex flex-col lg:grid grid-cols-7 gap-5 lg:max-h-screen max-w-full p-3 lg:p-5">
      <Navbar />
      <div className="bg-[#161616] lg:overflow-y-auto scrollbar-hide rounded-xl text-white col-span-5 p-4 lg:p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
