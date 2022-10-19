import React from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import "./assets/css/index.css";

import Navigation from "./components/Navigation";
import Homepage from "./components/Homepage";
import Achievements from "./components/AchievementsPage";
import PacksPage from "./components/PacksPage";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import ErrorPage from "./components/ErrorPage";
import CGVPage from "./components/CGVPage";
import RGPDPage from "./components/RGPDPage";

/* Google Analytics */
const TRACKING_ID = "UA-219956829-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/packs" element={<PacksPage />} />
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
