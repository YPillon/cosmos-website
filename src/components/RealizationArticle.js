import React from "react";

import styled from "styled-components";

import Button from "./RealizationButton";
import {
  RealizationArticle,
  AchievementsTitle,
} from "../assets/js/StyledComponents";

const Aside = styled.aside`
  width: 400px;
`;

function Article(props) {
  /*
    props are:
    -backgroundColor
    -backgroundImg
    -title
    -text

    options:
    -img
    -imgStyle
    -buttonText
    -buttonLink
    -text2
    -text3
    */

  let backgroundImg = props.backgroundImg ? props.backgroundImg : "";

  return (
    <RealizationArticle
      backgroundColor={props.backgroundColor}
      backgroundImg={backgroundImg}
    >
      <div
        style={{
          padding: "3rem",
          width: props.img ? "61.5%" : "100%",
          height: "100%",
        }}
      >
        <AchievementsTitle
          titleUnderlineColor={props.titleUnderlineColor}
          style={{
            color: props.backgroundColor === "purple" ? "white" : "#252525",
          }}
        >
          {props.title}
        </AchievementsTitle>

        <p
          style={{
            fontSize: "1.8rem",
            margin: props.text2 ? "4rem 0 2rem" : "4rem 0 3rem",
            color: props.backgroundColor === "purple" ? "white" : "#252525",
            textAlign: "justify",
          }}
        >
          {props.text}
        </p>
        {props.text2 && (
          <p
            style={{
              fontSize: "1.8rem",
              margin: props.text3 ? "0 0 2rem" : "0 0 3rem",
              color: props.backgroundColor === "purple" ? "white" : "#252525",
              textAlign: "justify",
            }}
          >
            {props.text2}
          </p>
        )}

        {props.text3 && (
          <p
            style={{
              fontSize: "1.8rem",
              margin: "0 0 3rem",
              color: props.backgroundColor === "purple" ? "white" : "#252525",
              textAlign: "justify",
            }}
          >
            {props.text3}
          </p>
        )}

        {props.buttonText && (
          <Button
            text={props.buttonText}
            link={props.buttonLink}
            blank="true"
            customMargin="0"
            shadow
          />
        )}
      </div>

      {props.img && (
        <Aside
          style={{
            width: "38.5%",
            height: "100%",
            overflow: "hidden",
            borderTopRightRadius: "1rem",
            borderBottomRightRadius: "1rem",
            textAlign: "center",
          }}
        >
          <img src={props.img} alt={props.altTxt} style={props.imgStyle} />
        </Aside>
      )}
    </RealizationArticle>
  );
}

export default Article;
