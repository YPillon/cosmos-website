import React from "react";

import styled from "styled-components";

import Loader from "./Loader";

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

function CGVPage() {
  return (
    <>
      <Loader />
      <MainWrapper>
        {" "}
        <Title>Conditions générales de ventes</Title>
        <Subtitle>Applicables à compter du 10 octobre 2022</Subtitle>
        <ParagraphTitle>
          Clause n° 1 : Objet et champ d'application
        </ParagraphTitle>
        <Paragraph>
          Les présentes conditions générales de vente (CGV) constituent le socle
          de la négociation commerciale et sont systématiquement adressées ou
          remises à chaque acheteur pour lui permettre de passer commande.
        </Paragraph>
        <Paragraph>
          Les conditions générales de vente décrites ci-après détaillent les
          droits et obligations de l'entreprise individuelle Younes Pillon et de
          son client dans le cadre de la vente des marchandises et prestations
          suivantes&nbsp;:{" "}
        </Paragraph>
        <List>
          <li>
            Création, modification, hébergement et maintenance de sites web
          </li>
          <li>
            Création, modification, hébergement et maintenance d'applications
            mobiles
          </li>
          <li>
            Création visuelle (logo, charte graphique, maquette de site web ou
            d'application mobile)
          </li>
          <li>Prestations de photographie</li>
          <li>Prestations de rédaction (Copywriting)</li>
        </List>
        <Paragraph>
          Toute acceptation du devis/bon de commande en ce compris la clause «
          Je reconnais avoir pris connaissance et j'accepte les conditions
          générales de vente ci-annexées » implique l'adhésion sans réserve de
          l'acheteur aux présentes conditions générales de vente.
        </Paragraph>
        <ParagraphTitle>Clause n° 2 : Prix</ParagraphTitle>
        <Paragraph>
          Les prix des marchandises et prestations vendues sont ceux en vigueur
          au jour de la prise de commande. Ils sont libellés en euros et
          calculés hors taxes. La TVA est non applicable selon l'article 293 B
          du CGI.
        </Paragraph>
        <Paragraph>
          L'entreprise individuelle Younes Pillon s'accorde le droit de modifier
          ses tarifs à tout moment. Toutefois, elle s'engage à facturer les
          marchandises et prestations commandées aux prix indiqués lors de
          l'enregistrement de la commande.
        </Paragraph>
        <ParagraphTitle>Clause n° 3 : Rabais et ristournes</ParagraphTitle>
        <Paragraph>
          Les tarifs proposés comprennent les rabais et ristournes que
          l'entreprise individuelle Younes Pillon serait amenée à octroyer
          compte tenu de ses résultats ou de la prise en charge par l'acheteur
          de certaines prestations.
        </Paragraph>
        <ParagraphTitle>Clause n° 4 : Escompte</ParagraphTitle>
        <Paragraph>
          Aucun escompte ne sera consenti en cas de paiement anticipé.
        </Paragraph>
        <ParagraphTitle>Clause n° 5 : Modalités de paiement</ParagraphTitle>
        <Paragraph>Le règlement des commandes s'effectue&nbsp;:</Paragraph>
        <List>
          <li>soit par virement bancaire;</li>
          <li>soit par chèque ;</li>
        </List>
        <Paragraph>
          Les règlements seront effectués aux conditions suivantes&nbsp;:
        </Paragraph>
        <List>
          <li>
            paiement à 30 jours suivant la réception des marchandises ou
            l'éxecution de la prestation.
          </li>
        </List>
        <ParagraphTitle>Clause n° 6 : Retard de paiement</ParagraphTitle>
        <Paragraph>
          En cas de défaut de paiement total ou partiel des marchandises livrées
          à l'échéance, l'acheteur doit verser à l'entreprise individuelle
          Younes Pillon une pénalité de retard égale à trois fois le taux de
          l'intérêt légal.
        </Paragraph>
        <Paragraph>
          Le taux de l'intérêt légal retenu est celui en vigueur au jour de la
          livraison des marchandises.
        </Paragraph>
        <Paragraph>
          Cette pénalité est calculée sur le montant TTC de la somme restant
          due, et court à compter de la date d'échéance du prix sans qu'aucune
          mise en demeure préalable ne soit nécessaire.
        </Paragraph>
        <Paragraph>
          En sus des indemnités de retard, toute somme, y compris l’acompte, non
          payée à sa date d’exigibilité produira de plein droit le paiement
          d’une indemnité forfaitaire de 40 euros due au titre des frais de
          recouvrement.
        </Paragraph>
        <Paragraph>Articles 441-10 et D. 441-5 du code de commerce.</Paragraph>
        <ParagraphTitle>Clause n° 7 : Clause résolutoire</ParagraphTitle>
        <Paragraph>
          Si dans les quinze jours qui suivent la mise en oeuvre de la clause
          "Retard de paiement", l'acheteur ne s'est pas acquitté des sommes
          restant dues, la vente sera résolue de plein droit et pourra ouvrir
          droit à l'allocation de dommages et intérêts au profit de l'entreprise
          individuelle Younes Pillon.
        </Paragraph>
        <ParagraphTitle>
          Clause n° 8 : Clause de réserve de propriété
        </ParagraphTitle>
        <Paragraph>
          L'entreprise individuelle Younes Pillon conserve la propriété des
          biens vendus jusqu'au paiement intégral du prix, en principal et en
          accessoires. À ce titre, si l'acheteur fait l'objet d'un redressement
          ou d'une liquidation judiciaire, l'entreprise individuelle Younes
          Pillon se réserve le droit de revendiquer, dans le cadre de la
          procédure collective, les marchandises vendues et restées impayées.
        </Paragraph>
        <ParagraphTitle>Clause n° 9 : Livraison</ParagraphTitle>
        <Paragraph>La livraison est effectuée&nbsp;:</Paragraph>
        <List>
          <li>soit par la remise directe de la marchandise à l'acheteur;</li>
          <li>
            soit par l'exécution de la prestation de service au profit de
            l'acheteur;
          </li>
        </List>
        <Paragraph>
          Le délai de livraison indiqué lors de l'enregistrement de la commande
          n'est donné qu'à titre indicatif et n'est aucunement garanti.
        </Paragraph>
        <Paragraph>
          Par voie de conséquence, tout retard raisonnable dans la livraison des
          produits ne pourra pas donner lieu au profit de l'acheteur à&nbsp;:
        </Paragraph>
        <List>
          <li>l'allocation de dommages et intérêts;</li>
          <li>l'annulation de la commande.</li>
        </List>
        <Paragraph>
          En cas de marchandises manquantes ou défectueuses, l'acheteur devra
          formuler toutes les réserves nécessaires sur le contrat de vente à
          réception desdites marchandises. Ces réserves devront être, en outre,
          confirmées par écrit dans les cinq jours suivant la livraison, par
          courrier recommandé AR adressé à l'entreprise individuelle.
        </Paragraph>
        <ParagraphTitle>Clause n° 10 : Force majeure</ParagraphTitle>
        <Paragraph>
          La responsabilité de l'entreprise individuelle Younes Pillon ne pourra
          pas être mise en oeuvre si la non-exécution ou le retard dans
          l'exécution de l'une de ses obligations décrites dans les présentes
          conditions générales de vente découle d'un cas de force majeure. À ce
          titre, la force majeure s'entend de tout événement extérieur,
          imprévisible et irrésistible au sens de l'article 1148 du Code civil.
        </Paragraph>
        <ParagraphTitle>Clause n° 11 : Tribunal compétent</ParagraphTitle>
        <Paragraph>
          Tout litige relatif à l'interprétation et à l'exécution des présentes
          conditions générales de vente est soumis au droit français.
        </Paragraph>
        <Paragraph>
          À défaut de résolution amiable, le litige sera porté devant le
          Tribunal de commerce de Strasbourg.
        </Paragraph>
        <Paragraph style={{ marginTop: "10rem" }}>
          Fait à Strasbourg, le 10 octobre 2022
        </Paragraph>
        <Title>Mentions légales</Title>
        <Paragraph>
          Identité de l'entreprise&nbsp;: Younes Pillon, entrepreneur
          individuel, 16 impasse Quinta Florentina 67200 Strasbourg
        </Paragraph>
        <Paragraph>SIREN&nbsp;: 893 112 532</Paragraph>
        <Paragraph>Mail&nbsp;: contact@cosmosagency.fr</Paragraph>
        <Paragraph>Numéro de téléphone&nbsp;: +33 6 11 44 14 71</Paragraph>
        <Paragraph>
          Numéro d'identification à la TVA&nbsp;: TVA non applicable art. 293 b
          du CGI
        </Paragraph>
        <Paragraph>
          Identité de l'hébergeur du site&nbsp;: HOSTINGER, UAB Rue Jonavos 60C,
          Kaunas 44192 Lituanie
        </Paragraph>
        <Paragraph>Téléphone&nbsp;: +37064503378</Paragraph>
        <Paragraph>E-mail&nbsp;: domains@hostinger.com</Paragraph>
      </MainWrapper>
    </>
  );
}

export default CGVPage;
