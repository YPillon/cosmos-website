import React from "react";

function ServicesList(props) {
  const ListItems = props.array.map((item) => <li>{item}</li>);
  return (
    <ul style={{ fontSize: "2.5rem", margin: "2rem 0", paddingLeft: "3rem" }}>
      {ListItems}
    </ul>
  );
}

export default ServicesList;
