import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import "./App.css";
import PdfViewer from "./pages/PdfViewer";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [drawer, setDrawer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(false);

  // This effect sets the initial theme on component mount
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Add dark class initially
  }, []);

  const handleTheme = () => {
    setTheme((prevState: string) => {
      const newTheme = prevState === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  useEffect(() => {
    if (drawer) {
      setVisible(true);
      setBackdropVisible(true);
    } else {
      const timer = setTimeout(() => {
        setVisible(false);
        setBackdropVisible(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [drawer]);

  return (
    <Router>
      <div
        className={
          theme === "dark" ? "bg-background-dark" : "bg-background-light"
        }
      >
        {backdropVisible && (
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
              drawer ? "backdrop-enter" : "backdrop-exit"
            }`}
            onClick={() => setDrawer(false)}
          />
        )}
        {visible && <Drawer drawer={drawer} setDrawer={setDrawer} />}

        <Navbar
          drawer={drawer}
          setDrawer={setDrawer}
          theme={theme}
          handleTheme={handleTheme}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>

        <Routes>
          <Route path="/my_resume.pdf" element={<PdfViewer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
