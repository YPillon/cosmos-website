import React from "react";

import { useMediaQuery } from "@mui/material";

import Header from "./Header";
import Main from "./Main";
import Article from "./Article";
import Loader from "./Loader";

import woodifullBackground from "../assets/images/background-images/woodifull-background.webp";
import woodifullIncrustation from "../assets/images/woodifull-incrustation.webp";

function Achievements(props) {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");
  const isSmallDesktop = useMediaQuery(
    "(min-width: 1025px) and (max-width:1300px)"
  );

  const woodifullImage =
    isTablet || isPhone || isSmallDesktop ? "" : woodifullIncrustation;

  return (
    <>
      <Loader />
      <Header
        title="Nos réalisations"
        subtitle="Découvrez un échantillon de ce que nous avons réalisé."
      />
      <Main>
        <Article
          img={woodifullImage}
          imgStyle={{ height: "87%", transform: "translateY(51px)" }}
          backgroundColor="orange"
          backgroundImg={woodifullBackground}
          title="Woodifull"
          text="Woodifull est une entreprise alsacienne d'impression sur bois personnalisable et Made in France, proposant un large choix de caisses à vin et d'estampes imprimées pour décorer sa maison."
          text2="Ils ont fait appel à Cosmos dans le cadre de l'amélioration de leur boutique e-commerce."
          buttonText="Voir le site"
          buttonLink="https://woodifull.com/"
        />
      </Main>
    </>
  );
}

export default Achievements;
