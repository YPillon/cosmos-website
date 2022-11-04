import React from "react";

import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

const ArrowBranch = styled.span`
  position: absolute;
  height: 3rem;
  width: 0.6rem;
  /*border: 0.2rem #3f008d solid;*/
  border-radius: 5rem;
  background-color: #fa8128;
  left: 50%;
  bottom: 5%;
  box-shadow: #fa8128 -3px 3px 7px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  left: 0%;
  bottom: 5%;
  cursor: pointer;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;

  &:hover {
    background: linear-gradient(to bottom right, #2b66e9, #2b66e9);
  }
`;

function AnimatedArrow(props) {
  const isPhone = useMediaQuery("(max-width:768px)");

  return (
    <a href={props.link}>
      <ArrowContainer style={{ bottom: isPhone ? "8%" : "" }}>
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
