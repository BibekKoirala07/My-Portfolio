import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [drawer, setDrawer] = useState(false);
  const [visible, setVisible] = useState(false);
  const [backdropVisible, setBackdropVisible] = useState(false);

  const handleTheme = () => {
    setTheme((prevState: string) => (prevState === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
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
      <div className={theme === "dark" ? "bg-theme-dark" : "bg-theme-light"}>
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
