import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/css/index.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Achievements from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import CGVPage from "./pages/CGVPage";
import RGPDPage from "./pages/RGPDPage";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/realisations" element={<Achievements />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/cgv" element={<CGVPage />} />
        <Route path="/rgpd" element={<RGPDPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
