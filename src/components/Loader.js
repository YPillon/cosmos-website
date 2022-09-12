import React from "react";

import styled, { keyframes } from "styled-components";

/*
Color 1 : #3f008d
Color 2 : #2b66e9
Color 3 : #fa8128
*/

const pageTransition = keyframes`
      30% {
        transform: translateX(0)
      }
      100% {
        transform: translateX(-100%)

      }
  `;

const StyledLoaderStripe = styled.div`
  position: fixed;
  top: calc(0vh + 10 * ${(props) => props.startPos}vh);
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 20vh;
  background: linear-gradient(to right, #fa8128 20%, #2b66e9 40%, #3f008d 65%);

  transform: translateX(0%);
  animation: ${pageTransition} 0.5s
    calc(0.2s + 0.15 * ${(props) => props.startPos}s) ease-in-out forwards;
`;

const LoaderStripe = (props) => {
  return <StyledLoaderStripe startPos={props.startPos}></StyledLoaderStripe>;
};

const Loader = () => {
  return (
    <>
      <LoaderStripe startPos="0" />
      <LoaderStripe startPos="1" />
      <LoaderStripe startPos="2" />
      <LoaderStripe startPos="3" />
      <LoaderStripe startPos="4" />
      <LoaderStripe startPos="5" />
      <LoaderStripe startPos="6" />
      <LoaderStripe startPos="7" />
      <LoaderStripe startPos="8" />
      <LoaderStripe startPos="9" />
    </>
  );
};

export default Loader;
