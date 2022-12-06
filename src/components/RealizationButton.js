import React from "react";

import { RealizationButton } from "../assets/js/StyledComponents";

function Button(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      {!props.glow && (
        <RealizationButton
          margin={props.customMargin}
          textColor={props.textColor}
          backgroundColor={props.backgroundColor}
          shadow={props.shadow}
        >
          {props.text}
        </RealizationButton>
      )}
    </a>
  );
}

export default Button;
