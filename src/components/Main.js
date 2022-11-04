import React from "react";

import { useMediaQuery } from "@mui/material";

function Main(props) {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");
  const isSmallDesktop = useMediaQuery(
    "(min-width: 1025px) and (max-width:1300px)"
  );

  let mainWidth;

  if (isPhone) {
    mainWidth = { width: "100%" };
  } else if (isTablet) {
    mainWidth = { width: "70rem" };
  } else if (isSmallDesktop) {
    mainWidth = { width: "90rem" };
  } else {
    mainWidth = { width: /*"120rem"*/ "90%" };
  }

  return (
    <main
      style={{
        ...mainWidth,
        margin: "0 5%",
        textAlign: "center",
        fontSize: "1.8rem",
      }}
      id="main"
    >
      <div style={{ height: "8rem" }}></div>
      {props.children}
    </main>
  );
}

export default Main;
