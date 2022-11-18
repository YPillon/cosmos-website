import React from "react";

import styled from "styled-components";

import Loader from "../components/Loader";
import NoRobots from "../components/NoRobots";

const MainWrapper = styled.main`
  background: white;
  margin-top: 20rem;
  padding: 2rem 5rem;
  min-height: 40rem;
  border-radius: 1rem;
`;

const Title = styled.h1`
  margin: 5rem 0;
  text-decoration: underline;
`;

const Subtitle = styled.h2`
  margin: 1rem 0;
`;

const ParagraphTitle = styled.h3`
  margin: 3rem 0;
  font-size: 2rem;
`;

const ParagraphSubtitle = styled.p`
  margin: 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

const List = styled.ul`
  font-size: 1.5rem;
  margin: 2rem 0;
  width: 100%;
  list-style-type: circle;
  list-style-position: inside;
`;

function RGPDPage() {
  return (
    <>
      <Loader />
      <NoRobots />
      <MainWrapper>
        <Title>POLITIQUE DE CONFIDENTIALITÉ</Title>
        <Subtitle>www.cosmosagency.fr</Subtitle>
        <Subtitle>Younes Pillon</Subtitle>
        <Subtitle>Type de site : vitrine</Subtitle>
        <ParagraphTitle>
          Le but de cette politique de confidentialité
        </ParagraphTitle>
        <Paragraph>
          Le but de cette politique de confidentialité est d'informer les
          utilisateurs de notre site des données personnelles que nous
          recueillerons ainsi que les informations suivantes, le cas
          échéant&nbsp;:
        </Paragraph>
        <List>
          <li>a. Les données personnelles que nous recueillerons</li>
          <li>b. L’utilisation des données recueillies</li>
          <li>c. Qui a accès aux données recueillies</li>
          <li>d. Les droits des utilisateurs du site</li>
          <li>e. La politique de cookies du site</li>
        </List>
        <Paragraph>
          Cette politique de confidentialité fonctionne parallèlement aux
          conditions générales d’utilisation de notre site.
        </Paragraph>
        <ParagraphTitle>Lois applicables</ParagraphTitle>
        <Paragraph>
          Conformément au Règlement général sur la protection des données
          (RGPD), cette politique de confidentialité est conforme aux règlements
          suivants.
        </Paragraph>
        <Paragraph>
          Les données à caractère personnel doivent être&nbsp;:
        </Paragraph>
        <List>
          <li>
            a. traitées de manière licite, loyale et transparente au regard de
            la personne concernée (licéité, loyauté, transparence) ;
          </li>
          <li>
            b. collectées pour des finalités déterminées, explicites et
            légitimes, et ne pas être traitées ultérieurement d'une manière
            incompatible avec ces finalités; le traitement ultérieur à des fins
            archivistiques dans l'intérêt public, à des fins de recherche
            scientifique ou historique ou à des fins statistiques n'est pas
            considéré, conformément à l'article 89, paragraphe 1, comme
            incompatible avec les finalités initiales (limitation des finalités)
            ;
          </li>
          <li>
            c. adéquates, pertinentes et limitées à ce qui est nécessaire au
            regard des finalités pour lesquelles elles sont traitées
            (minimisation des données) ;
          </li>
          <li>
            d. exactes et, si nécessaire, tenues à jour; toutes les mesures
            raisonnables doivent être prises pour que les données à caractère
            personnel qui sont inexactes, eu égard aux finalités pour lesquelles
            elles sont traitées, soient effacées ou rectifiées sans tarder
            (exactitude) ;
          </li>
          <li>
            e. conservées sous une forme permettant l'identification des
            personnes concernées pendant une durée n'excédant pas celle
            nécessaire au regard des finalités pour lesquelles elles sont
            traitées; les données à caractère personnel peuvent être conservées
            pour des durées plus longues dans la mesure où elles seront traitées
            exclusivement à des fins archivistiques dans l'intérêt public, à des
            fins de recherche scientifique ou historique ou à des fins
            statistiques conformément à l'article 89, paragraphe 1, pour autant
            que soient mises en œuvre les mesures techniques et
            organisationnelles appropriées requises par le règlement afin de
            garantir les droits et libertés de la personne concernée (limitation
            de la conservation) ;
          </li>
          <li>
            f. traitées de façon à garantir une sécurité appropriée des données
            à caractère personnel, y compris la protection contre le traitement
            non autorisé ou illicite et contre la perte, la destruction ou les
            dégâts d'origine accidentelle, à l'aide de mesures techniques ou
            organisationnelles appropriées (intégrité et confidentialité).
          </li>
        </List>
        <Paragraph>
          Le traitement n'est licite que si, et dans la mesure où, au moins une
          des conditions suivantes est remplie&nbsp;:
        </Paragraph>
        <List>
          <li>
            a. la personne concernée a consenti au traitement de ses données à
            caractère personnel pour une ou plusieurs finalités spécifiques ;
          </li>
          <li>
            b. le traitement est nécessaire à l'exécution d'un contrat auquel la
            personne concernée est partie ou à l'exécution de mesures
            précontractuelles prises à la demande de celle-ci ;
          </li>
          <li>
            c. le traitement est nécessaire au respect d'une obligation légale à
            laquelle le responsable du traitement est soumis ;
          </li>
          <li>
            d. le traitement est nécessaire à la sauvegarde des intérêts vitaux
            de la personne concernée ou d'une autre personne physique ;
          </li>
          <li>
            e. le traitement est nécessaire à l'exécution d'une mission
            d'intérêt public ou relevant de l'exercice de l'autorité publique
            dont est investi le responsable du traitement ;
          </li>
          <li>
            f. le traitement est nécessaire aux fins des intérêts légitimes
            poursuivis par le responsable du traitement ou par un tiers, à moins
            que ne prévalent les intérêts ou les libertés et droits fondamentaux
            de la personne concernée qui exigent une protection des données à
            caractère personnel, notamment lorsque la personne concernée est un
            enfant.
          </li>
        </List>
        <Paragraph>
          Pour les résidents de l’État de Californie, cette politique de
          confidentialité vise à se conformer à la California Consumer Privacy
          Act (CCPA). S’il y a des incohérences entre ce document et la CCPA, la
          législation de l’État s’appliquera. Si nous constatons des
          incohérences, nous modifierons notre politique pour nous conformer à
          la loi pertinente.
        </Paragraph>
        <ParagraphTitle>Consentement</ParagraphTitle>
        <Paragraph>
          Les utilisateurs conviennent qu’en utilisant notre site, ils
          consentent à&nbsp;:
        </Paragraph>
        <List>
          <li>
            a. les conditions énoncées dans la présente politique de
            confidentialité et
          </li>
          <li>
            b. la collecte, l’utilisation et la conservation des données
            énumérées dans la présente politique.
          </li>
        </List>
        <ParagraphSubtitle>
          Données personnelles que nous collectons
        </ParagraphSubtitle>
        <ParagraphSubtitle>
          Données collectées automatiquement
        </ParagraphSubtitle>
        <Paragraph>
          Nous ne collectons aucune donnée automatiquement sur notre site.
        </Paragraph>
        <ParagraphSubtitle>
          Données recueillies de façon non automatique
        </ParagraphSubtitle>
        <Paragraph>
          Nous pouvons également collecter les données suivantes lorsque vous
          effectuez certaines fonctions sur notre site&nbsp;:
        </Paragraph>
        <List>
          <li>a. Prénom et nom</li>
          <li>b. Email</li>
          <li>c. Numéro de téléphone</li>
        </List>
        <Paragraph>
          Ces données peuvent être recueillies au moyen des méthodes
          suivantes&nbsp;:
        </Paragraph>
        <List>
          <li>Envoi d'un formulaire de contact</li>
        </List>
        <Paragraph>
          Veuillez noter que nous ne collectons que les données qui nous aident
          à atteindre l’objectif énoncé dans cette politique de confidentialité.
          Nous ne recueillerons pas de données supplémentaires sans vous en
          informer au préalable.
        </Paragraph>
        <ParagraphTitle>
          Comment nous utilisons les données personnelles
        </ParagraphTitle>
        <Paragraph>
          Les données personnelles recueillies sur notre site seront utilisées
          uniquement aux fins précisées dans la présente politique ou indiquées
          sur les pages pertinentes de notre site. Nous n’utiliserons pas vos
          données au-delà de ce que nous divulguerons.
        </Paragraph>
        <Paragraph>
          Les données que nous recueillons lorsque l’utilisateur exécute
          certaines fonctions peuvent être utilisées aux fins suivantes&nbsp;:
        </Paragraph>
        <List>
          <li>
            a. Nous utilisons ces données pour vous recontacter dans le cadre
            d'une prise de rendez-vous
          </li>
        </List>
        <ParagraphTitle>
          Avec qui nous partageons les données personnelles
        </ParagraphTitle>
        <ParagraphSubtitle>Employés</ParagraphSubtitle>
        <Paragraph>
          Nous pouvons divulguer à tout membre de notre organisation les données
          utilisateur dont il a raisonnablement besoin pour réaliser les
          objectifs énoncés dans la présente politique.
        </Paragraph>
        <ParagraphSubtitle>Tierces parties</ParagraphSubtitle>
        <Paragraph>
          Nous pouvons partager les données utilisateur avec les tiers
          suivants&nbsp;:
        </Paragraph>
        <List>
          <li>a. __________</li>
        </List>
        <Paragraph>
          Nous pouvons partager les données utilisateur avec des tiers aux fins
          suivantes&nbsp;:
        </Paragraph>
        <List>
          <li>a. __________</li>
        </List>
        <Paragraph>
          Les tiers ne seront pas en mesure d’accéder aux données des
          utilisateurs au-delà de ce qui est raisonnablement nécessaire pour
          atteindre l’objectif donné.
        </Paragraph>
        <ParagraphSubtitle>Autres divulgations</ParagraphSubtitle>
        <Paragraph>
          Nous nous engageons à ne pas vendre ou partager vos données avec des
          tiers, sauf dans les cas suivants&nbsp;:
        </Paragraph>
        <List>
          <li>a. si la loi l'exige</li>
          <li>b. si elle est requise pour toute procédure judiciaire</li>
          <li>c. pour prouver ou protéger nos droits légaux</li>
          <li>
            d. à des acheteurs ou des acheteurs potentiels de cette société dans
            le cas où nous cherchons à la vendre la société
          </li>
        </List>
        <Paragraph>
          Si vous suivez des hyperliens de notre site vers un autre site,
          veuillez noter que nous ne sommes pas responsables et n’avons pas de
          contrôle sur leurs politiques et pratiques de confidentialité.
        </Paragraph>
        <ParagraphTitle>
          Combien de temps nous stockons les données personnelles
        </ParagraphTitle>
        <Paragraph>
          Les données des utilisateurs seront conservées pour une durée de :10
          ans
        </Paragraph>
        <Paragraph>
          Nous veillerons à ce que les utilisateurs soient avisés si leurs
          données sont conservées plus longtemps que cette durée.
        </Paragraph>
        <ParagraphTitle>
          Comment nous protégeons vos données personnelles
        </ParagraphTitle>
        <Paragraph>Afin d’assurer la protection de votre sécurité,</Paragraph>
        <Paragraph>
          Alors que nous prenons toutes les précautions raisonnables pour nous
          assurer que nos données d’utilisateur sont sécurisées et que les
          utilisateurs sont protégés, il reste toujours du risque de préjudice.
          L’Internet en sa totalité peut être, parfois, peu sûr et donc nous
          sommes incapables de garantir la sécurité des données des utilisateurs
          au-delà de ce qui est raisonnablement pratique.
        </Paragraph>
        <ParagraphTitle>Mineurs</ParagraphTitle>
        <Paragraph>
          Le RGPD précise que les personnes de moins de 15 ans sont considérées
          comme des mineurs aux fins de la collecte de données. Les mineurs
          doivent avoir le consentement d’un représentant légal pour que leurs
          données soient recueillies, traitées et utilisées.
        </Paragraph>
        <ParagraphTitle>Vos droits en tant qu’utilisateur</ParagraphTitle>
        <Paragraph>
          En vertu du RGPD, les utilisateurs ont les droits suivants en tant que
          personnes concernées&nbsp;:
        </Paragraph>
        <List>
          <li>a. droit d’accès</li>
          <li>b. droit de rectification</li>
          <li>c. droit à l’effacement</li>
          <li>d. droit de restreindre le traitement</li>
          <li>e. droit à la portabilité des données</li>
          <li>f. droit d'objection</li>
        </List>
        <Paragraph>
          Vous trouverez de plus amples informations sur ces droits au chapitre
          3 (art 12-23) du RGPD.
        </Paragraph>
        <ParagraphSubtitle>
          Comment modifier, supprimer ou contester les données recueillies
        </ParagraphSubtitle>
        <Paragraph>
          Si vous souhaitez que vos renseignements soient supprimés ou modifiés
          d’une façon ou d’une autre, veuillez communiquer avec notre agent de
          protection de la vie privée ici&nbsp;:
        </Paragraph>
        <List style={{ listStyleType: "none" }}>
          <li>Younes Pillon</li>
          <li>16 impasse Quinta Florentina 67200 Strasbourg</li>
          <li>contact@cosmosagency.fr</li>
        </List>
        <ParagraphTitle>Modifications</ParagraphTitle>
        <Paragraph>
          Cette politique de confidentialité peut être modifiée à l’occasion
          afin de maintenir la conformité avec la loi et de tenir compte de tout
          changement à notre processus de collecte de données. Nous recommandons
          à nos utilisateurs de vérifier notre politique de temps à autre pour
          s’assurer qu’ils soient informés de toute mise à jour. Au besoin, nous
          pouvons informer les utilisateurs par courriel des changements
          apportés à cette politique.
        </Paragraph>
        <ParagraphTitle>Contact</ParagraphTitle>
        <Paragraph>
          Si vous avez des questions à nous poser, n’hésitez pas à communiquer
          avec nous en utilisant ce qui suit&nbsp;:
        </Paragraph>
        <List style={{ listStyleType: "none" }}>
          <li>06 11 44 14 71</li>
          <li>contact@cosmosagency.fr</li>
          <li>16 impasse Quinta Florentina 67200 Strasbourg</li>
        </List>
        <Paragraph style={{ marginTop: "10rem" }}>
          Date d’entrée en vigueur : le 18 octobre 2022
        </Paragraph>
      </MainWrapper>
    </>
  );
}

export default RGPDPage;
