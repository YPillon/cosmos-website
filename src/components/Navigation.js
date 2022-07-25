import React, { useState } from "react";
import styled from "styled-components";

import logo from "../assets/images/logo.png";

import useMediaQuery from "@mui/material/useMediaQuery";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isPhone = useMediaQuery("(max-width:768px)");

  const NavLink = styled.a`
    font-size: 3rem;
    color: white;
    -webkit-text-stroke: 0.15rem #2b66e9;
    &::before {
      content: "";
      transition: ease-out 0.2s;
      position: absolute;
      top: 3.7rem;
      left: -2.5%;
      width: 105%;
      height: 0.3rem;
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

  const navStyle = {
    position: "fixed",
    zIndex: "2",
    top: "0",
    right: "0",
    left: "0",
    width: "100vw",
    height: "10rem",
    padding: "0 3%",

    backgroundColor: "rgba(255, 255, 255, 0.85)",
    border: "solid 0.1rem #2b66e9",
    boxShadow: "#2b66e9 0px 0.1rem 0.4rem",
    display: "flex",
    justifyContent: "space-between",

    transition: "ease-in-out 0.75s",
  };

  let navPhoneStyle;

  if (isPhone && !isMenuOpen) {
    navPhoneStyle = { flexDirection: "column", alignItems: "center" };
  } else if (isPhone && isMenuOpen) {
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

  if (isPhone && !isMenuOpen) {
    ulStyle = {
      transform: "translateY(-40rem)",
      flexDirection: "column",
      justifyContent: "center",
      transition: "0.5s 0.25s linear",
      height: "100vh",
    };
  } else if (isPhone && isMenuOpen) {
    ulStyle = {
      transform: "translateY(130px)",
      flexDirection: "column",
      justifyContent: "center",
      transition: "0.75s ease-in-out",
      height: "100vh",
      paddingBottom: "20rem",
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

  return (
    <nav style={{ ...navStyle, ...navPhoneStyle }}>
      <a
        href="#"
        style={{
          width: isPhone ? "100%" : "fit-content",
          marginTop: isPhone ? "1.4rem" : "0",
          position: "relative",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            height: "7rem",
            width: "auto",
            display: "block",
            position: isPhone ? "absolute" : "inherit",
            top: "0%",
            left: isPhone && isMenuOpen ? "50%" : "0",
            transform:
              isPhone && isMenuOpen
                ? "translate(-50%, 200%) scale(1.1)"
                : "translateX(0)",
            transition: "all 0.75s 0.15s ease-in-out",
          }}
        />
      </a>
      <ul style={ulStyle}>
        <NavLi style={{ margin: isPhone ? "0 0 4rem" : "0 0 0 4.5rem" }}>
          <NavLink href="#">Réalisations</NavLink>
        </NavLi>
        <NavLi style={{ margin: isPhone ? "0 0 4rem" : "0 0 0 4.5rem" }}>
          <NavLink href="#">Nos Packs</NavLink>
        </NavLi>
        <NavLi style={{ margin: isPhone ? "0 0 4rem" : "0 0 0 4.5rem" }}>
          <NavLink href="#">Contact</NavLink>
        </NavLi>
      </ul>
      {isPhone && (
        <div
          className="hamburgerMenu"
          style={{
            cursor: "pointer",
            position: "absolute",
            height: "10rem",
            right: "3%",
            top: "0%",
          }}
          onClick={(e) => {
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
