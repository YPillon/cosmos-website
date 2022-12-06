import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.webp";

import useMediaQuery from "@mui/material/useMediaQuery";

const NavSpan = styled.span`
  font-size: 2.4rem;
  color: #2b66e9;
  -webkit-text-stroke: 0.05rem #2c2e4b;
  font-weight: bold;
  &::before {
    content: "";
    transition: ease-out 0.2s;
    position: absolute;
    top: 3rem;
    left: -2.5%;
    width: 105%;
    height: 0.25rem;
    background: white;
    border: solid #2b66e9 0.1rem;
    border-radius: 1rem;
    transform: scaleX(0);
    transform-origin: left;
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;

const NavLi = styled.li`
  position: relative;
  margin-left: 4.5rem;
  text-align: center;
`;

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width:769px) and (max-width:1024px)");
  const isTabletOrPhone = useMediaQuery("(max-width:1024px)");

  const navStyle = {
    position: "fixed",
    zIndex: "2",
    top: "0",
    right: "0",
    left: "0",
    width: "100vw",
    height: "9rem",
    padding: "0 5%",

    backgroundColor: "rgba(255, 255, 255, 0.9)",
    boxShadow: "#2b66e9 0px 0.1rem 0.8rem",
    display: "flex",
    justifyContent: "space-between",

    transition: "ease-in-out 0.75s",
  };

  let navPhoneStyle;

  if (isTabletOrPhone && !isMenuOpen) {
    navPhoneStyle = { flexDirection: "column", alignItems: "center" };
  } else if (isTabletOrPhone && isMenuOpen) {
    navPhoneStyle = {
      flexDirection: "column",
      height: "100vh",
      justifyContent: "flex-start",
      alignItems: "center",
    };
  } else {
    navPhoneStyle = {
      alignItems: "center",
    };
  }

  let ulStyle;

  if (isTabletOrPhone && !isMenuOpen) {
    ulStyle = {
      transform: "translateY(-40rem)",
      flexDirection: "column",
      justifyContent: "center",
      transition: "0.5s 0.25s linear",
      height: "100vh",
    };
  } else if (isTabletOrPhone && isMenuOpen) {
    ulStyle = {
      transform: "translateY(130px)",
      flexDirection: "column",
      justifyContent: "center",
      transition: "0.75s ease-in-out",
      height: "100vh",
      paddingBottom: "25rem",
    };
  } else {
    ulStyle = {
      transform: "translateY(0px)",
      minWidth: "fit-content",
    };
  }

  const HamburgerSpanStyle = {
    position: "absolute",
    height: "0.6rem",
    width: "4rem",
    right: "3%",
    backgroundColor: "white",
    border: "0.2rem solid #2b66e9",
    borderRadius: "0.5rem",
    transition: "0.75s ease-in-out",
  };

  const HamburgerSpan1 = isMenuOpen
    ? {
        top: "50%",
        transform: "rotate(315deg)",
      }
    : {
        top: "38%",
      };

  const HamburgerSpan2 = isMenuOpen
    ? {
        top: "50%",
        transform: "translateX(10rem)",
        right: "0.5rem",
        opacity: 0,
      }
    : {
        top: "50%",
        right: "0.5rem",
        transform: "translateX(0)",
        opacity: "1",
      };

  const HamburgerSpan3 = isMenuOpen
    ? {
        top: "50%",
        transform: "rotate(-315deg)",
      }
    : {
        top: "62%",
      };

  let logoTranslation;

  if (!isTabletOrPhone || (isTablet && !isMenuOpen)) {
    logoTranslation = { transform: "translateX(0)" };
  } else if (isTabletOrPhone && isMenuOpen) {
    logoTranslation = { transform: "translate(0%, 175%) scale(1.1)" };
  } else if (isPhone && !isMenuOpen) {
    logoTranslation = { transform: "translateX(-15%)" };
  }

  const logoStyle = {
    width: "fit-content",
    marginTop: isTabletOrPhone ? "1.3rem" : "0",
    transition: "all 0.75s 0.15s ease-in-out",
  };

  return (
    <nav style={{ ...navStyle, ...navPhoneStyle }}>
      <Link
        to="/"
        style={{ ...logoStyle, ...logoTranslation }}
        onClick={() => setIsMenuOpen(false)}
      >
        <img
          width="262"
          height="70"
          src={logo}
          alt="Logo de Cosmos, agence spécialisée dans le développement de boutiques et d'apps e-commerce sur Shopify."
          style={{
            height: "6rem",
            width: "auto",
            display: "block",
            position: isTabletOrPhone ? "inherit" : "inherit",
            top: "0%",
          }}
        />
      </Link>
      <ul
        style={{
          ...ulStyle,
          listStyleType: "none",
          display: "flex",
          transition: "ease 1s",
        }}
      >
        <NavLi
          style={{ margin: isTabletOrPhone ? "0 0 4rem" : "0 0 0 4.5rem" }}
        >
          <Link to="/realisations" onClick={() => setIsMenuOpen(false)}>
            <NavSpan>Réalisations</NavSpan>
          </Link>
        </NavLi>

        <NavLi
          style={{ margin: isTabletOrPhone ? "0 0 4rem" : "0 0 0 4.5rem" }}
        >
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <NavSpan href="#">Contact</NavSpan>
          </Link>
        </NavLi>
      </ul>
      {isTabletOrPhone && (
        <div
          className="hamburgerMenu"
          style={{
            cursor: "pointer",
            position: "absolute",
            height: "9rem",
            right: "3%",
            top: "0%",
          }}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <span style={{ ...HamburgerSpanStyle, ...HamburgerSpan1 }}></span>
          <span style={{ ...HamburgerSpanStyle, ...HamburgerSpan2 }}></span>
          <span style={{ ...HamburgerSpanStyle, ...HamburgerSpan3 }}></span>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
