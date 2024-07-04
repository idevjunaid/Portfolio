import "./App.scss";
import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";
import Experience from "./Components/Experiance/Experiance";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const updateMainHeight = () => {
      const navbar = document.querySelector('.navbar');
      const main = document.querySelector('.main');
      const isSmallScreen = window.innerWidth <= 991.98;

      if (navbar && main && isSmallScreen) {
        const navbarHeight = navbar.offsetHeight;
        main.style.height = `calc(100vh - ${navbarHeight}px)`;
      } else if (main) {
        main.style.height = '100vh'; // Reset height for larger screens
      }
    };

    // Set initial height
    updateMainHeight();

    // Update height on resize
    window.addEventListener('resize', updateMainHeight);

    // Clean up event listener
    return () => window.removeEventListener('resize', updateMainHeight);
  }, []);
  return (
    <>
      <div className="container-fluid"> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />

        </Routes>
      </div>
    </>
  );
}

export default App;
