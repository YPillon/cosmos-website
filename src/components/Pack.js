import React from "react";

import styled from "styled-components";
import Button from "./Button";

import ServicesList from "./ServicesList";

const Name = styled.h3`
  font-size: 4rem;
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
    border: solid #2b66e9 0.2rem;
    border-radius: 1rem;
  }
`;

function Pack(props) {
  /*
        props are:
        -title
        -anchor
        -description
        -included
        -options
        -price
        -delay
    */

  return (
    <article
      id={props.anchor}
      style={{ textAlign: "left", fontSize: "2.5rem" }}
    >
      <div style={{ height: "14rem" }}></div>
      <Name>{props.title}</Name>

      <p style={{ margin: "6rem 0 5rem" }}>{props.description}</p>
      <p
        style={{
          textDecoration: "underline",
          fontWeight: "bold",
          margin: "2rem 0",
        }}
      >
        Ce qui est compris dans le pack:
      </p>
      <ServicesList array={props.included} />
      <p style={{ margin: "5rem 0" }}>
        <b>Budget</b>: {props.price}€ ht
        <br />
        <b>Délai de réalisation</b>: {props.delay}
      </p>
      <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
        Les options disponibles:
      </p>
      <ServicesList array={props.options} />

      <div style={{ textAlign: "center", margin: "7rem 0 0" }}>
        <Button
          text="Je choisis ce pack"
          link="/contact"
          internLink="true"
          triggerTransition={props.triggerTransition}
        />
      </div>
    </article>
  );
}

export default Pack;
