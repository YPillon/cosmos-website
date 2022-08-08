import React from "react";

import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

import Navigation from "./Navigation";
import Button from "./Button";
import AnimatedArrow from "./AnimatedArrow";

function Header(props) {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");

  const Title = styled.h1`
    font-size: 8rem;
    background: linear-gradient(to right, #3f008d, #2b66e9, #fa8128);
    -webkit-background-clip: text;
    color: transparent;
    width: fit-content;
    -webkit-text-stroke: #3f008d 0.18rem;
    padding-top: 35.8vh;
  `;

  const subtitle = props.subtitle ? (
    <React.Fragment>
      <h2>{props.subtitle}</h2>
    </React.Fragment>
  ) : (
    ""
  );

  let titleResponsive;

  if (isTablet) {
    titleResponsive = {
      paddingTop: "30vh",
    };
  } else if (isPhone) {
    titleResponsive = { fontSize: "6rem", paddingTop: "30vh" };
  } else {
    titleResponsive = {};
  }

  return (
    <header style={{ height: "100vh" }}>
      <Navigation />
      <Title style={titleResponsive}>{props.title}</Title>
      {subtitle}
      <Button text="C'est parti !" />
      <AnimatedArrow link="#main" />
    </header>
  );
}

export default Header;
