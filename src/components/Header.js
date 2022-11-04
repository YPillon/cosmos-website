import React from "react";

import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

import Button from "./Button";
import AnimatedArrow from "./Arrow";

const Title = styled.h1`
  font-size: ${(props) => props.fontSize};
  color: #fa8128;
  width: fit-content;
  -webkit-text-stroke: #3f008d 0.18rem;
  padding-top: ${(props) => props.paddingTop};
  margin-bottom: 1rem;
  text-shadow: -2px 4px 1px #3f008d;
`;

const Subtitle = styled.h2`
  font-size: 5rem;
  color: #2b66e9;
  width: fit-content;
  -webkit-text-stroke: #3f008d 0.18rem;
  text-shadow: -2px 4px 1px #fa8128;
`;

function Header(props) {
  const isPhone = useMediaQuery("(max-width:768px)");

  const subtitle = props.subtitle ? (
    <>
      <Subtitle style={{ fontSize: isPhone ? "4rem" : "" }}>
        {props.subtitle}
      </Subtitle>
    </>
  ) : (
    ""
  );

  return (
    <header style={{ height: "100vh", position: "relative" }}>
      <Title
        fontSize={isPhone ? "6rem" : "8rem"}
        paddingTop={isPhone ? "28vh" : "35vh"}
      >
        {props.title}
      </Title>
      {subtitle}
      {props.buttonLink && (
        <Button
          text={props.buttonText}
          link={props.buttonLink}
          internLink={props.buttonInternLink}
          glow="1"
        />
      )}

      {!props.noArrow && <AnimatedArrow link="#main" />}
    </header>
  );
}

export default Header;
