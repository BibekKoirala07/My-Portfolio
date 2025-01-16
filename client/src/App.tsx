import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Blogs from "./pages/Blogs";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  console.log("set", setIsDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="dark:bg-dark-fullBackground min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
