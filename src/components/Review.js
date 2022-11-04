import React from "react";

import styled from "styled-components";

const Article = styled.article`
  border-radius: 1rem;
  margin: 7rem 0 15rem;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 5rem 0;
  line-height: 3.7rem;
`;

function Review(props) {
  return (
    <Article>
      <MainText>{props.text}</MainText>
      <figure
        style={{
          height: "10rem",
          width: "10rem",
          overflow: "hidden",
          borderRadius: "100%",
          margin: "1rem 0 1.5rem",
        }}
      >
        <img
          width="100"
          height="100"
          src={props.img}
          alt={props.altTxt}
          style={{
            width: "100%",
            display: "block",
            transform: "scale(1.5) translate(0.2rem, 1.3rem)",
          }}
        />
      </figure>
      <p style={{ fontSize: "1.8rem", margin: "2rem 0 0.5rem 0" }}>{props.name}</p>
      <p style={{ fontSize: "1.8rem", margin: "0.5rem 0", color: "#384450" }}>
        {props.job}
      </p>
    </Article>
  );
}

export default Review;
