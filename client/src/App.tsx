import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Blogs from "./pages/Blogs";
import Tools from "./pages/Tools";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  console.log("set", setIsDarkMode);

  document.documentElement.classList.add("dark");

  useEffect(() => {
    console.log("document", document.documentElement.classList);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <div className="dark:bg-dark-fullBackground min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="tools" element={<Tools />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
