import React from "react";

import { useMediaQuery } from "@mui/material";

import Header from "./Header";
import Main from "./Main";
import Button from "./Button";
import Article from "./Article";
import Review from "./Review";
import Loader from "./Loader";

import designImage from "../assets/images/design.png";
import happyImage from "../assets/images/happy-woman.png";

import background3 from "../assets/images/background-images/background2.jpg";
import background2 from "../assets/images/background-images/background3.jpg";
import background1 from "../assets/images/background-images/background1.jpg";

import lEngelmann from "../assets/images/louise-engelmann.jpg";

function Homepage() {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");
  const isSmallDesktop = useMediaQuery(
    "(min-width: 1025px) and (max-width:1300px)"
  );

  const firstImage = isTablet || isPhone || isSmallDesktop ? "" : designImage;
  const secondImage = isTablet || isPhone || isSmallDesktop ? "" : happyImage;

  return (
    <>
      <Loader />
      <Header
        title="Passez au niveau supérieur."
        buttonText="C'est parti !"
        buttonLink="/contact"
        buttonInternLink="true"
      />
      <Main>
        <Article
          backgroundColor="blue"
          backgroundImg={background1}
          title="Une équipe de passionnés."
          text="Besoin d’un site pour présenter votre entreprise et votre offre ? Proposer la réservation en ligne à vos clients ? Une application pour vendre vos produits ?
          Avec Cosmos, faites passer votre business au niveau supérieur !"
          text2="Cosmos, c’est une agence où 3 amis designer, développeur et photographe originaires de Strasbourg se sont retrouvés avec une seule et même motivation : permettre à tous les professionnels, institutions et associations de réaliser leur transformation digitale en fonction de leurs besoins et en utilisant les technologies les plus innovantes du marché."
          img={firstImage}
          imgStyle={{ height: "100%", transform: "translateX(-4.5rem)" }}
        />
        <Article
          backgroundColor="purple"
          backgroundImg={background2}
          title="Un service 100% sur-mesure."
          text="Chez Cosmos, nous avons fait le choix d’un service totalement personnalisé pour répondre avec précision à vos besoins, c’est pourquoi nous faisons du 100% sur-mesure. Sans fioritures. Juste l’essentiel.
          Que vous souhaitiez créer un site vitrine, un site e-commerce, une application mobile ou une simple landing page, nous sommes là pour vous conseiller et vous accompagner de A à Z.          
          "
          text2="Il nous tient à cœur de vous offrir la meilleure expérience possible. Nous nous adaptons entièrement à votre budget et à vos besoins ! Architecture, design,  UI/UX, développement, hébergement, image de marque,  nous nous chargeons de tous les aspects de votre projet digital pour vous permettre d’avoir une présence en ligne adéquate et de qualité."
          text3="En plus de notre offre sur-mesure, nous proposons des packs clé en main, correspondant aux demandes les plus fréquentes que nous avons rencontrées. C’est parfait pour les professionnels qui ont besoin de réaliser leur projet digital rapidement tout en réduisant les frais !"
        />
        <Button text="Voir nos packs" link="/packs" internLink="true"></Button>
        <Article
          backgroundColor="orange"
          backgroundImg={background3}
          title="Il est temps de passer au niveau supérieur."
          text="Vous êtes prêt à faire le grand saut ? Vous avez encore besoin de renseignements ? Contactez-nous ! Nous nous ferons un plaisir de répondre à toutes vos questions et interrogations."
          text2="C’est totalement gratuit et au moins  cela vous permettra d’avoir une idée plus claire des possibilités qui s’offrent à vous !"
          text3="À très vite !"
          img={secondImage}
          imgStyle={{ width: "auto", height: "100%" }}
        />
        <Review
          text="«&nbsp;Nous avons fait appel à Cosmos pour ajouter des fonctionnalités sur notre boutique en ligne et nous avons été entièrement satisfaits par le rendu. Ils ont parfaitement compris ce que nous voulions et l'ont réalisé avec professionnalisme.&nbsp;»"
          img={lEngelmann}
          name="Louise Engelmann"
          job="Directeur général chez Woodifull"
        />
        <Button
          text="Contacter l'agence"
          link="/contact"
          internLink="true"
        ></Button>
      </Main>
    </>
  );
}

export default Homepage;
