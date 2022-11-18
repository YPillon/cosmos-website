import React from "react";
import { Helmet } from "react-helmet";

function NoRobots() {
  return (
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
  );
}

export default NoRobots;
