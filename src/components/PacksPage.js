import React from "react";

import styled from "styled-components";

import Header from "./Header";
import Main from "./Main";
import Pack from "./Pack";
import Loader from "./Loader";

import {
  includedInOnepageArray,
  optionsInOnepageArray,
  includedInVitrineArray,
  optionsInVitrineArray,
  includedInReservationArray,
  optionsInReservationArray,
} from "../assets/js/functions";

const H2Link = styled.a`
  transition: all 0.25s ease-out;
  text-decoration: underline;
  &:hover {
    color: #fa8128;
  }
`;

function PacksPage(props) {
  return (
    <>
      <Loader />
      <Header
        title="Nos packs"
        subtitle="Optez pour la simplicité avec un de nos packs clé en main."
        buttonText="Voir les packs"
        buttonLink="#main"
      />
      <Main>
        <h2
          style={{
            fontSize: "4rem",
            fontWeight: "normal",
            textAlign: "center",
            marginTop: "7rem",
          }}
        >
          Nous proposons des packs clé en main correspondant aux demandes les
          plus fréquentes que nous avons rencontrées: Le pack{" "}
          <H2Link href="#onePage">One-page</H2Link>, le pack{" "}
          <H2Link href="#siteVitrine">Site Vitrine</H2Link> et le pack{" "}
          <H2Link href="#reservation">Réservation en ligne</H2Link>.
        </h2>

        <Pack
          title="Pack «&nbsp;One-page&nbsp;»"
          anchor="onePage"
          description="Le pack « One-page » vous permet de vous lancer rapidement et d’être
            présent en ligne à moindre coût ! C’est l’idéal pour une petite
            entreprise qui vient d’être créée."
          included={includedInOnepageArray}
          options={optionsInOnepageArray}
          price="600"
          delay="1 à 2 semaines"
        />

        <Pack
          title="Pack «&nbsp;Site Vitrine&nbsp;»"
          anchor="siteVitrine"
          description="Le pack « Vitrine » vous donne tout ce dont vous avez besoin pour
          présenter votre entreprise et votre offre sur internet. Un site
          accessible sur mobile, tablette et ordinateur qui vous met en
          valeur. Vous avez même une page dédiée à vos actualités que vous
          pouvez alimenter vous-mêmes au fil du temps en toute simplicité&nbsp;!"
          included={includedInVitrineArray}
          options={optionsInVitrineArray}
          price="1300"
          delay="2 semaines à 1 mois"
        />

        <Pack
          title="Pack «&nbsp;Réservation en ligne&nbsp;»"
          anchor="reservation"
          description="Idéal si vous voulez gagner du temps en proposant un service de réservation 100% en ligne. 
          Plus besoin de gérer les réservations par téléphone et d’être coupés au milieu de votre travail. 
          Vous êtes donc plus disponibles pour les clients présents dans votre salon et vous pouvez leur offrir une expérience encore plus privilégiée !
          Vos clients peuvent réserver 24h/24 sur mobile, tablette et ordinateur et choisir en un clin d’œil un créneau disponible et le membre de votre équipe qui s’occupera d’eux !
          
          Petit plus : Vous avez également la possibilité de voir quelles prestations sont le plus souvent réservées par vos clients et ainsi d’adapter votre offre en fonction !"
          included={includedInReservationArray}
          options={optionsInReservationArray}
          price="2600"
          delay="2 à 6 semaines"
        />
      </Main>
    </>
  );
}

export default PacksPage;
