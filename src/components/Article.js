import React from "react";

import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

import Button from "./Button";

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
    */

  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");

  let backgroundColor;

  if (props.backgroundColor === "blue") {
    backgroundColor = "#2b67e899";
  } else if (props.backgroundColor === "purple") {
    backgroundColor = "#3f008d99";
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

  const articleHeight = isPhone ? "fit-content" : "30rem";

  let backgroundImg = props.backgroundImg ? props.backgroundImg : "";

  const Article = styled.article`
    border-radius: 1rem;
    margin: 7rem 0;
    width: auto;
    height: ${articleHeight};
    background-image: linear-gradient(${backgroundColor}, ${backgroundColor}), url(${backgroundImg});
    background-position: center;
    background-size: cover;
    display: flex;
    text-align: left;
  `;

  const Title = styled.h3`
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
      border: solid ${titleUnderlineColor} 0.2rem;
      border-radius: 1rem;
    }
  `;

  const Aside = styled.aside`
    width: 400px;
  `;

  return (
    <Article>
      <div
        style={{
          padding: "3rem",
          width: props.img ? "61.5%" : "100%",
          height: "fit-content",
        }}
      >
        <Title
          style={{
            color: props.backgroundColor === "purple" ? "white" : "#252525",
          }}
        >
          {props.title}
        </Title>

        <p
          style={{
            fontSize: "1.8rem",
            margin: "1rem 0",
            color: props.backgroundColor === "purple" ? "white" : "#252525",
            textAlign: "justify",
          }}
        >
          {props.text}
        </p>

        {props.buttonText && (
          <Button text={props.buttonText} link={props.buttonLink} />
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
          <img src={props.img} alt="" style={props.imgStyle} />
        </Aside>
      )}
    </Article>
  );
}

export default Article;
