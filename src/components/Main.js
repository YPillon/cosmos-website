import React from "react";

import { useMediaQuery } from "@mui/material";

function Main(props) {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");

  let mainWidth;

  if (isPhone) {
    mainWidth = { width: "100%" };
  } else if (isTablet) {
    mainWidth = { width: "70rem" };
  } else {
    mainWidth = { width: "120rem" };
  }

  return (
    <main
      style={{ ...mainWidth, margin: "0 auto", textAlign: "center" }}
      id="main"
    >
      <div style={{ height: "8rem" }}></div>
      {props.children}
    </main>
  );
}

export default Main;
