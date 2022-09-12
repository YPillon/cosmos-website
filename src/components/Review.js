import React from "react";

import styled from "styled-components";

const Article = styled.article`
  border-radius: 1rem;
  margin: 7rem 0;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 3rem 0;
`;

function Review(props) {
  const altText = `Photo de ${props.name}`;

  return (
    <Article>
      <MainText>{props.text}</MainText>
      <figure
        style={{
          height: "8rem",
          width: "8rem",
          overflow: "hidden",
          borderRadius: "100%",
          margin: "1rem 0 1.5rem",
        }}
      >
        <img
          src={props.img}
          alt={altText}
          style={{
            width: "100%",
            display: "block",
            transform: "scale(1.5) translate(0.2rem, 2rem)",
          }}
        />
      </figure>
      <p style={{ fontSize: "1.8rem", margin: "0.5rem 0" }}>{props.name}</p>
      <p style={{ fontSize: "1.8rem", margin: "0.5rem 0", color: "#384450" }}>
        {props.job}
      </p>
    </Article>
  );
}

export default Review;
