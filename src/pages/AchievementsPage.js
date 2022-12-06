import React, { useEffect } from "react";

import { useMediaQuery } from "@mui/material";
import ReactGA from "react-ga";

import Header from "../components/Header";
import Article from "../components/RealizationArticle";
import Loader from "../components/Loader";
import ContactBox from "../components/ContactBox";

import woodifullBackground from "../assets/images/background-images/woodifull-background.webp";
import woodifullIncrustation from "../assets/images/woodifull-incrustation.webp";
import exploreBackground from "../assets/images/background-images/explore-background.webp";
import exploreIncrustation from "../assets/images/explore-incrustation.webp";
import { MainWrapper, Separator } from "../assets/js/StyledComponents";



function Achievements() {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");
  const isSmallDesktop = useMediaQuery(
    "(min-width: 1025px) and (max-width:1300px)"
  );

  useEffect(() => {
    document.title = "Réalisations - Cosmos";
  }, []);

  ReactGA.pageview("/realisations");

  const woodifullImage =
    isTablet || isPhone || isSmallDesktop ? "" : woodifullIncrustation;

  const exploreImage =
    isTablet || isPhone || isSmallDesktop ? "" : exploreIncrustation;

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
          img={exploreImage}
          altTxt="Capture d'écran de la boutique de démonstration de Cosmos"
          imgStyle={{ height: "87%", transform: "translateY(51px)" }}
          backgroundColor="#8d9ccde6"
          titleUnderlineColor="#fa8029"
          backgroundImg={exploreBackground}
          title="Explore™ : boutique de démo"
          text="Notre boutique de démonstration reprend les codes d'une marque de vêtements de montagnes et vous donne un exemple de ce qu'il est possible de faire en matière de boutique Shopify."
          text2="Nous avons créé les visuels, importé les différents produits, mis en page les différentes sections de la boutique et configuré le processeur de paiements (Shopify Payments) et le service tiers de gestion des livraisons (Sendcloud)."
          text3="Allez y faire un tour ! Comme la boutique est configurée en mode 'test', vous devrez entrer le mot de passe 'cosmos' en arrivant sur la page d'accueil."
          buttonText="Voir la boutique"
          buttonLink="https://petit-explorateur.myshopify.com/"
        />
        <Article
          img={woodifullImage}
          altTxt="Capture d'écran du site de Woodifull, client de l'agence Cosmos."
          imgStyle={{ height: "87%", transform: "translateY(51px)" }}
          backgroundColor="#e6ddc5e6"
          titleUnderlineColor="#3f008d"
          backgroundImg={woodifullBackground}
          title="Woodifull"
          text="Woodifull est une entreprise alsacienne d'impression sur bois personnalisable et Made in France, proposant un large choix de caisses à vin et d'estampes imprimées pour décorer sa maison."
          text2="Ils ont fait appel à Cosmos dans le cadre de l'amélioration de leur boutique e-commerce."
          buttonText="Voir la boutique"
          buttonLink="https://woodifull.com/"
        />
        <ContactBox />
      </MainWrapper>
    </>
  );
}

export default Achievements;
