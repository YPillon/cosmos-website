import logo from "../assets/images/logo.png";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

/*  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}*/

function Navigation() {
  const isPhone = useMediaQuery("(max-width:768px)");

  return (
    <nav>
      <img src={logo} alt="logo" style={{ height: "2.5rem" }} />
      <ul>
        <li>
          <a href="#">Réalisations</a>
        </li>
        <li>
          <a href="#">Nos Packs</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      {isPhone && (
        <div className="hamburgerMenu">
          <span>a</span>
          <span>b</span>
          <span>c</span>
        </div>
      )}
    </nav>
  );
}

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
