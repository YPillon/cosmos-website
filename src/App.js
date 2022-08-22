import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./assets/css/index.css";
import styled, { keyframes } from "styled-components";

import Homepage from "./components/Homepage";
import Achievements from "./components/AchievementsPage";
import PacksPage from "./components/PacksPage";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";

function App() {
  const [shouldTransitionRun, setshouldTransitionRun] = useState(false);

  let location = useLocation();

  useEffect(() => {
    setshouldTransitionRun(true);
    setTimeout(() => setshouldTransitionRun(false), 5000);
  }, [location]);

  const PageTransition = keyframes`

  `;

  const Loader = styled.div`
    background: #fa8128;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
  `;

  return (
    <div className="App">
      {shouldTransitionRun && <Loader></Loader>}
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
