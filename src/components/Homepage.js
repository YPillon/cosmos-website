import React from "react";

import { useMediaQuery } from "@mui/material";

import Header from "./Header";
import Main from "./Main";
import Button from "./Button";
import Article from "./Article";
import Review from "./Review";

import designImage from "../assets/images/design.png";
import happyImage from "../assets/images/happy-woman.png";

import background3 from "../assets/images/bacground-images/background2.jpg";
import background2 from "../assets/images/bacground-images/background7.jpg";
import background1 from "../assets/images/bacground-images/background8.jpg";

import lEngelmann from "../assets/images/louise-engelmann.jpg";

function Homepage() {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");

  const firstImage = isTablet || isPhone ? "" : designImage;
  const secondImage = isTablet || isPhone ? "" : happyImage;

  return (
    <>
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
          title="Un service 100% sur-mesure"
          text="Besoin d’un site pour présenter votre entreprise et votre offre ? Proposer la réservation en ligne à vos clients ? Besoin d’une application pour vendre vos produits ?
          Avec Cosmos, faites passer votre business au niveau supérieur !

          Chez Cosmos, nous avons fait le choix d’un service totalement personnalisé pour répondre avec précision à vos besoins, c’est pourquoi nous faisons du 100% sur-mesure. Sans fioritures. Juste l’essentiel.
          Il nous tient à cœur de vous offrir la meilleure expérience possible."
          img={firstImage}
          imgStyle={{ height: "100%", transform: "translateX(-4.5rem)" }}
        />
        <Article
          backgroundColor="purple"
          backgroundImg={background2}
          title="Un service 100% sur-mesure"
          text="Besoin d’un site pour présenter votre entreprise et votre offre ? Proposer la réservation en ligne à vos clients ? Besoin d’une application pour vendre vos produits ?
          Avec Cosmos, faites passer votre business au niveau supérieur !

          Chez Cosmos, nous avons fait le choix d’un service totalement personnalisé pour répondre avec précision à vos besoins, c’est pourquoi nous faisons du 100% sur-mesure. Sans fioritures. Juste l’essentiel.
          Il nous tient à cœur de vous offrir la meilleure expérience possible. Nous nous adaptons entièrement à votre budget et à vos besoins !"
        />
        <Button text="Voir nos packs" link="/packs" internLink="true"></Button>
        <Article
          backgroundColor="orange"
          backgroundImg={background3}
          title="Un service 100% sur-mesure"
          text="Besoin d’un site pour présenter votre entreprise et votre offre ? Proposer la réservation en ligne à vos clients ? Besoin d’une application pour vendre vos produits ?
          Avec Cosmos, faites passer votre business au niveau supérieur !

          Chez Cosmos, nous avons fait le choix d’un service totalement personnalisé pour répondre avec précision à vos besoins, c’est pourquoi nous faisons du 100% sur-mesure. Sans fioritures. Juste l’essentiel.
          Il nous tient à cœur de vous offrir la meilleure expérience possible. Nous nous adaptons entièrement à votre budget et à vos besoins !"
          img={secondImage}
          imgStyle={{ width: "auto", height: "100%" }}
        />
        <Review
          text="« Nous avons fait appel à Cosmos pour ajouter des fonctionnalités sur notre boutique en ligne et nous avons été entièrement satisfaits par le rendu. Ils ont parfaitement compris ce que nous voulions et l'ont réalisé avec professionnalisme. »"
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
