import React from "react";
import { HashLink } from "react-router-hash-link";

import {
  StyledButton,
  StyledButtonWithGlow,
} from "../assets/js/StyledComponents";

function Button(props) {
  const blankOrNotBlank = props.blank ? "_blank" : "_self";

  const link = props.link ? props.link : "/";

  return (
    <>
      {props.internLink === "true" && (
        <HashLink to={link}>
          {!props.glow && (
            <StyledButton
              margin={props.customMargin}
              textColor={props.textColor}
              backgroundColor={props.backgroundColor}
            >
              {props.text}
            </StyledButton>
          )}
          {props.glow && (
            <StyledButtonWithGlow
              margin={props.customMargin}
              textColor={props.textColor}
              backgroundColor={props.backgroundColor}
            >
              {props.text}
            </StyledButtonWithGlow>
          )}
        </HashLink>
      )}
      {props.internLink !== "true" && (
        <a href={link} target={blankOrNotBlank}>
          {!props.glow && (
            <StyledButton
              margin={props.customMargin}
              textColor={props.textColor}
              backgroundColor={props.backgroundColor}
            >
              {props.text}
            </StyledButton>
          )}
          {props.glow && (
            <StyledButtonWithGlow
              margin={props.customMargin}
              textColor={props.textColor}
              backgroundColor={props.backgroundColor}
            >
              {props.text}
            </StyledButtonWithGlow>
          )}
        </a>
      )}
    </>
  );
}

export default Button;
