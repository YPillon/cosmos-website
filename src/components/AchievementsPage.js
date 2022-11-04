import React, { useEffect } from "react";

import { useMediaQuery } from "@mui/material";
import ReactGA from "react-ga";

import Header from "./Header";
import Main from "./Main";
import Article from "./RealizationArticle";
import Button from "./Button";
import Loader from "./Loader";

import woodifullBackground from "../assets/images/background-images/woodifull-background.webp";
import woodifullIncrustation from "../assets/images/woodifull-incrustation.webp";

/* Google Analytics */
ReactGA.pageview("/achievements");

function Achievements() {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");
  const isSmallDesktop = useMediaQuery(
    "(min-width: 1025px) and (max-width:1300px)"
  );

  useEffect(() => {
    document.title = "Nos Réalisations | Cosmos";
  }, []);

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
          altTxt="Capture d'écran du site de Woodifull, client de l'agence Cosmos."
          imgStyle={{ height: "87%", transform: "translateY(51px)" }}
          backgroundColor="orange"
          backgroundImg={woodifullBackground}
          title="Woodifull"
          text="Woodifull est une entreprise alsacienne d'impression sur bois personnalisable et Made in France, proposant un large choix de caisses à vin et d'estampes imprimées pour décorer sa maison."
          text2="Ils ont fait appel à Cosmos dans le cadre de l'amélioration de leur boutique e-commerce."
          buttonText="Voir le site"
          buttonLink="https://woodifull.com/"
        />
        <Button link="/contact#main" text="Contactez-nous" internLink="true" />
      </Main>
    </>
  );
}

export default Achievements;
