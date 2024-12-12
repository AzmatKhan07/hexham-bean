import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import OpeningHours from "./pages/OpeningHours";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import MenuPricing from "./pages/MenuPricing";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/opening-hours" element={<OpeningHours />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu-pricing" element={<MenuPricing />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
