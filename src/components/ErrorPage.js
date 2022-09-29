import React from "react";

import Loader from "./Loader";
import Header from "./Header";

function ErrorPage() {
  return (
    <>
      <Loader />
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
