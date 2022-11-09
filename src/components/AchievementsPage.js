import React, { useEffect } from "react";

import { useMediaQuery } from "@mui/material";
import ReactGA from "react-ga";

import Header from "./Header";
import Article from "./RealizationArticle";
import Loader from "./Loader";
import ContactBox from "./ContactBox";

import woodifullBackground from "../assets/images/background-images/woodifull-background.webp";
import woodifullIncrustation from "../assets/images/woodifull-incrustation.webp";
import { MainWrapper, Separator } from "../assets/js/StyledComponents";

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
        title="Ils nous ont fait confiance"
        subtitle="Découvrez les entreprises que nous avons accompagnées"
        buttonText="Découvrir"
        buttonLink="#main"
      />
      <Separator id="main" />
      <MainWrapper>
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
        <ContactBox />
      </MainWrapper>
    </>
  );
}

export default Achievements;
