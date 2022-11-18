import React from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import "./assets/css/index.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Achievements from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import CGVPage from "./pages/CGVPage";
import RGPDPage from "./pages/RGPDPage";

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
