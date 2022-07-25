import React, { useState } from "react";

import Navigation from "./Navigation";

function Header() {
  return (
    <header>
      <Navigation />
      <h1>Passez au niveau supérieur.</h1>
      <button>C'est parti !</button>
      <div className="arrow">
        <a href="#">
          <span
            style={{ transform: "rotate(45deg)", transformOrigin: "bottom" }}
          ></span>
          <span
            style={{ transform: "rotate(-45deg)", transformOrigin: "bottom" }}
          ></span>
          <span></span>
        </a>
      </div>
    </header>
  );
}

export default Header;
