import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

import Button from "./Button";
import AnimatedArrow from "./Arrow";

import { HeaderTitle, HeaderSubtitle } from "../assets/js/StyledComponents";

function Header(props) {
  const isPhone = useMediaQuery("(max-width:768px)");

  const subtitle = props.subtitle ? (
    <>
      <HeaderSubtitle style={{ fontSize: isPhone ? "4rem" : "" }}>
        {props.subtitle}
      </HeaderSubtitle>
    </>
  ) : (
    ""
  );

  return (
    <header style={{ height: "100vh", position: "relative", margin: "0 5%" }}>
      <HeaderTitle
        fontSize={isPhone ? "6rem" : "8rem"}
        paddingTop={isPhone ? "28vh" : "35vh"}
      >
        {props.title}
      </HeaderTitle>
      {subtitle}
      {props.buttonLink && (
        <Button
          text={props.buttonText}
          link={props.buttonLink}
          internLink={props.buttonInternLink}
          glow
        />
      )}

      {!props.noArrow && <AnimatedArrow link="#main" />}
    </header>
  );
}

export default Header;
