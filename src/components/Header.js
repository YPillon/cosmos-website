import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

import Button from "./Button";
import AnimatedArrow from "./Arrow";

import {
  HeaderTitle,
  HeaderSubtitle,
  StarCloudContainer,
  UpDownStar,
  RotateStar,
} from "../assets/js/StyledComponents";

import lilStar1 from "../assets/images/animation-elements/lil-star1.webp";
import lilStar2 from "../assets/images/animation-elements/lil-star2.webp";
import lilStar4 from "../assets/images/animation-elements/lil-star4.webp";

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
      <StarCloudContainer href="#main">
        <UpDownStar delay="1s" marginBottom="-10rem">
          <RotateStar src={lilStar1} />
        </UpDownStar>
        <UpDownStar delay=".5s" marginBottom="-20rem">
          <RotateStar src={lilStar4} />
        </UpDownStar>
        <UpDownStar delay="1s">
          <RotateStar src={lilStar4} />
        </UpDownStar>
        <UpDownStar>
          <RotateStar src={lilStar1} />
        </UpDownStar>
        <UpDownStar delay="1.5s" marginBottom="-17rem">
          <RotateStar src={lilStar4} />
        </UpDownStar>
        <UpDownStar marginBottom="-25rem">
          <RotateStar src={lilStar2} />
        </UpDownStar>
        <UpDownStar delay=".7s" marginBottom="-5rem">
          <RotateStar src={lilStar1} />
        </UpDownStar>
      </StarCloudContainer>
    </header>
  );
}

export default Header;
