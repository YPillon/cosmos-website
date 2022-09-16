import React from "react";

import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "@mui/material";

const BounceAnimation = keyframes`
    /*0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
      40% {transform: translateY(-30px);}
      60% {transform: translateY(-15px);}*/
  
    0%, 75%, 80%, 87.5%, 95%, 100% {transform: translateY(0);}
      85% {transform: translateY(-30px);}
      90% {transform: translateY(-15px);}
    `;

const ArrowBranch = styled.span`
  position: absolute;
  height: 5rem;
  width: 1rem;
  border: 0.2rem #3f008d solid;
  border-radius: 5rem;
  background-color: #fa8128;
  left: 50%;
  bottom: 5%;
  box-shadow: #fa8128 -3px 3px 7px;
`;

const ArrowContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;
  animation: ${BounceAnimation} 3.5s linear infinite;
  cursor: pointer;
`;

function AnimatedArrow(props) {
  const isPhone = useMediaQuery("(max-width:768px)");

  return (
    <ArrowContainer style={{ bottom: isPhone ? "8%" : "" }}>
      <a href={props.link}>
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
            height: isPhone ? "6rem" : "10rem",
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
      </a>
    </ArrowContainer>
  );
}

export default AnimatedArrow;
