import React from "react";

import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

import Button from "./Button";

const StyledArticle = styled.article`
  border-radius: 1rem;
  margin: 5rem 0 15rem;
  width: auto;
  height: ${(props) => props.articleHeight};
  min-height: 35rem;
  background-image: linear-gradient(
      ${(props) => props.backgroundColor},
      ${(props) => props.backgroundColor}
    ),
    url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: cover;
  display: flex;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3rem;
  position: relative;
  width: fit-content;
  margin: 1rem 0 3rem;
  &::before {
    content: "";
    position: absolute;
    bottom: -1.2rem;
    left: 0%;
    width: 10rem;
    height: 0.3rem;
    background: white;
    border: solid ${(props) => props.titleUnderlineColor} 0.2rem;
    border-radius: 1rem;
  }
`;

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

  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");
  const isSmallDesktop = useMediaQuery(
    "(min-width: 1025px) and (max-width:1300px)"
  );

  let backgroundColor;

  if (props.backgroundColor === "blue") {
    backgroundColor = "#2b67e8b3";
  } else if (props.backgroundColor === "purple") {
    backgroundColor = "#3f008dcc";
  } else if (props.backgroundColor === "orange") {
    backgroundColor = "#fa8029cc";
  } else {
    backgroundColor = "white";
  }

  let titleUnderlineColor;

  if (props.backgroundColor === "blue") {
    titleUnderlineColor = "#fa8128";
  } else if (props.backgroundColor === "purple") {
    titleUnderlineColor = "#2b66e9";
  } else if (props.backgroundColor === "orange") {
    titleUnderlineColor = "#3f008d";
  } else {
    titleUnderlineColor = "#252525";
  }

  const articleHeight = isPhone || isTablet || isSmallDesktop ? "fit-content" : "36rem";

  let backgroundImg = props.backgroundImg ? props.backgroundImg : "";

  return (
    <StyledArticle
      articleHeight={articleHeight}
      backgroundColor={backgroundColor}
      backgroundImg={backgroundImg}
    >
      <div
        style={{
          padding: "3rem",
          width: props.img ? "61.5%" : "100%",
          height: "100%",
        }}
      >
        <Title
          titleUnderlineColor={titleUnderlineColor}
          style={{
            color: props.backgroundColor === "purple" ? "white" : "#252525",
          }}
        >
          {props.title}
        </Title>

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
    </StyledArticle>
  );
}

export default Article;
