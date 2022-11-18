import React from "react";

import Loader from "../components/Loader";
import Header from "../components/Header";
import NoRobots from "../components/NoRobots";

function ErrorPage() {
  return (
    <>
      <Loader />
      <NoRobots />
      <Header
        title="Oops..."
        subtitle="Vous vous êtes perdu dans le Cosmos. 🪐"
        buttonText="Retour à la page d'accueil"
        buttonLink="/"
        buttonInternLink="true"
        noArrow
      />
    </>
  );
}

export default ErrorPage;
