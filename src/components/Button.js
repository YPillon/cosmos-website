import React from "react";

import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const StyledButton = styled.button`
      font-size: 3rem;
      padding: 0.2rem 1.2rem;
      margin: 5rem 0;
      font-weight: bolder;
      cursor: pointer;
      color: #3f008d;
      -webkit-text-stroke: 0.1rem #3f008d;
      border: solid 0.36rem #fa8128;
      border-radius: 0.8rem;
      box-shadow: #3f008d -1px 3px 7px;
      background: linear-gradient(to right, #fa8128 50%, transparent 50%) right;
      background-size: 200% 150%;
      transition: background 0.25s ease-out, transform 0.25s 0.05s ease-out;

      &:hover{
        background-position: left;
        transform: translateY(-0.15rem);
        }
      }
    `;

function Button(props) {
  let smallStyle = {};

  if (props.size === "small") {
    smallStyle = {
      fontSize: "1.5rem",
      margin: "0",
      padding: "0.1rem 0.8rem",
    };
  }

  const blankOrNotBlank = props.blank ? "_blank" : "_self";

  const link = props.link ? props.link : "/";

  return (
    <>
      {props.internLink === "true" && (
        <HashLink to={props.link}>
          <StyledButton style={smallStyle}>{props.text}</StyledButton>
        </HashLink>
      )}
      {props.internLink !== "true" && (
        <a href={link} target={blankOrNotBlank}>
          <StyledButton style={smallStyle}>{props.text}</StyledButton>
        </a>
      )}
    </>
  );
}

export default Button;
