import React from "react";

import "./assets/css/index.css";
import { useMediaQuery } from "@mui/material";

import "./components/Header";
import Header from "./components/Header";
import Button from "./components/Button";
import Article from "./components/Article";
import Footer from "./components/Footer";

import designImage from "./assets/images/design.png";
import happyImage from "./assets/images/happy-woman.png";

import background3 from "./assets/images/bacground-images/background2.jpg";
import background2 from "./assets/images/bacground-images/background7.jpg";
import background1 from "./assets/images/bacground-images/background8.jpg";

function App() {
  const isPhone = useMediaQuery("(max-width:768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width:1024px)");

  let mainWidth;

  if (isPhone) {
    mainWidth = { width: "100%" };
  } else if (isTablet) {
    mainWidth = { width: "70rem" };
  } else {
    mainWidth = { width: "120rem" };
  }

  const firstImage = isTablet || isPhone ? "" : designImage;
  const secondImage = isTablet || isPhone ? "" : happyImage;

  return (
    <div className="App">
      <Header title="Passez au niveau supérieur." />
      <main
        style={{ ...mainWidth, margin: "0 auto", textAlign: "center" }}
        id="main"
      >
        <div style={{ height: "8rem" }}></div>
        <Article
          backgroundColor="blue"
          backgroundImg={background1}
          title="Un service 100% sur-mesure"
          text="Besoin d’un site pour présenter votre entreprise et votre offre ? Proposer la réservation en ligne à vos clients ? Besoin d’une application pour vendre vos produits ?
          Avec Cosmos, faites passer votre business au niveau supérieur !

          Chez Cosmos, nous avons fait le choix d’un service totalement personnalisé pour répondre avec précision à vos besoins, c’est pourquoi nous faisons du 100% sur-mesure. Sans fioritures. Juste l’essentiel.
          Il nous tient à cœur de vous offrir la meilleure expérience possible. Nous nous adaptons entièrement à votre budget et à vos besoins !"
          img={firstImage}
          imgStyle={{ width: "100%" }}
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
        <Button text="Voir nos packs"></Button>
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
        <Button text="Contacter l'agence"></Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
