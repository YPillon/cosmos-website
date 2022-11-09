import React from "react";

import { useMediaQuery } from "@mui/material";

import { ArrowBranch, ArrowContainer } from "../assets/js/StyledComponents";

function AnimatedArrow(props) {
  const isPhone = useMediaQuery("(max-width:768px)");

  return (
    <a href={props.link}>
      <ArrowContainer>
        <ArrowBranch
          style={{
            transform: "rotate(-45deg) ",
            transformOrigin: "50% 96%",
            height: isPhone ? "3rem" : "",
            width: isPhone ? "0.8rem" : "",
          }}
        ></ArrowBranch>
        <ArrowBranch
          style={{
            height: isPhone ? "6rem" : "6rem",
            width: isPhone ? "0.8rem" : "",
          }}
        ></ArrowBranch>
        <ArrowBranch
          style={{
            transform: "rotate(45deg)",
            transformOrigin: "50% 96%",
            height: isPhone ? "3rem" : "",
            width: isPhone ? "0.8rem" : "",
            boxShadow: "#fa8128 2px 2px 7px",
          }}
        ></ArrowBranch>
      </ArrowContainer>
    </a>
  );
}

export default AnimatedArrow;
