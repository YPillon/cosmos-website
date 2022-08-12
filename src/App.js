import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/css/index.css";

import Homepage from "./components/Homepage";
import Achievements from "./components/AchievementsPage";
import PacksPage from "./components/PacksPage";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/packs" element={<PacksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
