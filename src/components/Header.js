import React from "react";

import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

import Button from "./Button";
import AnimatedArrow from "./AnimatedArrow";

const Title = styled.h1`
  font-size: 8rem;
  background: linear-gradient(to right, #3f008d, #2b66e9, #fa8128);
  -webkit-background-clip: text;
  color: transparent;
  width: fit-content;
  -webkit-text-stroke: #3f008d 0.18rem;
  padding-top: ${(props) => props.paddingTop};
`;

const Subtitle = styled.h2`
  font-size: 5rem;
  background: #2b66e9;
  -webkit-background-clip: text;
  color: transparent;
  width: fit-content;
  -webkit-text-stroke: #3f008d 0.18rem;
`;

function Header(props) {
  const isPhone = useMediaQuery("(max-width:768px)");

  let paddingTop;

  if (!props.subtitle && !isPhone) {
    paddingTop = "35.8vh";
  } else if (props.subtitle && !isPhone) {
    paddingTop = "28.8vh";
  } else if (props.subtitle && isPhone) {
    paddingTop = "25vh";
  } else if (!props.subtitle && isPhone) {
    paddingTop = "27vh";
  }

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
    <header style={{ height: "100vh" }}>
      <Title
        style={{ fontSize: isPhone ? "6rem" : "" }}
        paddingTop={paddingTop}
      >
        {props.title}
      </Title>
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
