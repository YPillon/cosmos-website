import React from "react";

import Header from "./Header";
import Main from "./Main";
import Article from "./Article";

function Achievements() {
  return (
    <>
      <Header
        title="Nos réalisations"
        subtitle="Découvrez un échantillon de ce que nous avons réalisé."
      />
      <Main>
        <Article
          img="/"
          backgroundColor="orange"
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
