import React from "react";

import Header from "./Header";
import Main from "./Main";
import Article from "./Article";
import Loader from "./Loader";

import woodifullBackground from "../assets/images/background-images/woodifull-background.jpg"

function Achievements(props) {
  return (
    <>
      <Loader />
      <Header
        title="Nos réalisations"
        subtitle="Découvrez un échantillon de ce que nous avons réalisé."
      />
      <Main>
        <Article
          img="/"
          backgroundColor="orange"
          backgroundImg={woodifullBackground}
          title="Woodifull"
          text="Woodifull est une entreprise alsacienne d'impression sur bois personnalisable et Made in France. Ils ont fait appel à Cosmos dans le cadre de l'amélioration de leur boutique e-commerce."
          buttonText="Voir le site"
          buttonLink="https://woodifull.com/"
        />
      </Main>
    </>
  );
}

export default Achievements;
