import React from "react";

import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

import Navigation from "./Navigation";
import Button from "./Button";
import AnimatedArrow from "./AnimatedArrow";

function Header(props) {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");

  const paddingTop = !props.subtitle ? "35.8vh" : "28.8vh";

  const Title = styled.h1`
    font-size: 8rem;
    background: linear-gradient(to right, #3f008d, #2b66e9, #fa8128);
    -webkit-background-clip: text;
    color: transparent;
    width: fit-content;
    -webkit-text-stroke: #3f008d 0.18rem;
    padding-top: ${paddingTop};
  `;

  const Subtitle = styled.h2`
    font-size: 5rem;
    background: #2b66e9;
    -webkit-background-clip: text;
    color: transparent;
    width: fit-content;
    -webkit-text-stroke: #3f008d 0.18rem;
  `;

  const subtitle = props.subtitle ? (
    <>
      <Subtitle>{props.subtitle}</Subtitle>
    </>
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
      {props.buttonLink && (
        <Button
          text={props.buttonText}
          link={props.buttonLink}
          internLink={props.buttonInternLink}
        />
      )}
      <AnimatedArrow link="#main" />
    </header>
  );
}

export default Header;
