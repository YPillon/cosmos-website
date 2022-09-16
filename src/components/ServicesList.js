import React, { Children } from "react";

import { useMediaQuery } from "@mui/material";

function ServicesList(props) {
  const isPhone = useMediaQuery("(max-width:768px)");

  const ListItems = Children.toArray(
    props.array.map((item) => (
      <li style={{ marginBottom: isPhone ? "0.8rem" : "" }}>{item}</li>
    ))
  );
  return (
    <ul
      style={{
        fontSize: "2.5rem",
        margin: "2rem 0",
        width: "100%",
        listStyleType: "circle",
        listStylePosition: isPhone ? "inside" : "outside",
      }}
    >
      {ListItems}
    </ul>
  );
}

export default ServicesList;
