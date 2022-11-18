import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import {
  StyledFooter,
  FooterColumn,
  FooterLink,
  FooterSpan,
  FooterTitle,
} from "../assets/js/StyledComponents";

const StyledReactRouterLink = styled(Link)`
  margin: 1rem 0;
`;

function Footer() {
  const dateBuilder = () => {
    let date = new Date();
    return date.getFullYear();
  };

  return (
    /*Les différentes section du footer sont :
1. Logo, CGV, RGPD, Copyright
2. Plan du site : Accueil, Réalisations, Contact
3. Mail, Téléphone
*/

    <StyledFooter>
      <FooterColumn>
        <FooterTitle>Légal</FooterTitle>
        <StyledReactRouterLink to="cgv">
          <FooterLink>Conditions générales de vente</FooterLink>
        </StyledReactRouterLink>
        <StyledReactRouterLink to="rgpd">
          <FooterLink>Politique de confidentialité</FooterLink>
        </StyledReactRouterLink>
        <FooterSpan>Tous droits réservés ©️ {dateBuilder()}</FooterSpan>
      </FooterColumn>

      <FooterColumn>
        <FooterTitle>Plan du site</FooterTitle>
        <StyledReactRouterLink to="/">
          <FooterLink>Accueil</FooterLink>
        </StyledReactRouterLink>
        <StyledReactRouterLink to="/achievements">
          <FooterLink>Réalisations</FooterLink>
        </StyledReactRouterLink>
        <StyledReactRouterLink to="/contact">
          <FooterLink>Contact</FooterLink>
        </StyledReactRouterLink>
      </FooterColumn>

      <FooterColumn>
        <FooterTitle>Informations</FooterTitle>
        <FooterLink href="mailto:younes@cosmosagency.fr">
          younes@cosmosagency.fr
        </FooterLink>
        <FooterLink href="tel:+33611441471">0611441471</FooterLink>
      </FooterColumn>
    </StyledFooter>
  );
}

/*
<footer
      style={{
        justifyContent: "center",
        padding: "8rem 0 0",
        fontSize: "2.5rem",
        color: "#374550",
        fontWeight: "bold",
        display: "grid",
        gridTemplateColumns: isTabletOrPhone ? "1fr" : "1fr 1fr 1fr",
        gridTemplateRows: isTabletOrPhone
          ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
          : "1fr 1fr 1fr 1fr 1fr",
      }}
    >
      <Link to="/" style={{ gridColumn: "1", gridRow: "1 / 2" }}>
        
      </Link>

      <Link
        to="/cgv"
        style={{
          fontSize: "1.5rem",
          gridColumn: "1",
          gridRow: isTabletOrPhone ? "10" : "3",
        }}
      >
        <span>Conditions générales de vente</span>
      </Link>
      <Link
        to="/cgv"
        style={{
          fontSize: "1.5rem",
          gridColumn: "1",
          gridRow: isTabletOrPhone ? "11" : "4",
        }}
      >
        <span>Politique de confidentialité</span>
      </Link>
      <span
        style={{
          fontSize: "1.5rem",
          gridColumn: "1",
          gridRow: isTabletOrPhone ? "12" : "5",
        }}
      >
        Tous droits réservés ©️ {dateBuilder()}
      </span>
      <Link
        to="/achievements"
        style={{
          gridColumn: isTabletOrPhone ? "1" : "2",
          gridRow: isTabletOrPhone ? "3" : "1",
        }}
      >
        <FooterSpan1>Réalisations</FooterSpan1>
      </Link>

      <Link
        to="/packs"
        style={{
          gridColumn: isTabletOrPhone ? "1" : "2",
          gridRow: isTabletOrPhone ? "4" : "2",
        }}
      >
        <FooterSpan1>Nos Packs</FooterSpan1>
      </Link>

      <Link
        to="/contact"
        style={{
          gridColumn: isTabletOrPhone ? "1" : "2",
          gridRow: isTabletOrPhone ? "5" : "3",
        }}
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Went to contact page from footer.",
          });
        }}
      >
        <FooterSpan1>Contact</FooterSpan1>
      </Link>

      <a
        href="https://www.linkedin.com/company/88657226/"
        target="_blank"
        rel="noreferrer"
        style={{
          gridColumn: isTabletOrPhone ? "1" : "3",
          gridRow: isTabletOrPhone ? "6" : "1",
        }}
      >
        <FooterSpan1>LinkedIn</FooterSpan1>
      </a>

      <a
        href="https://www.instagram.com/cosmosagency.fr/"
        target="_blank"
        rel="noreferrer"
        style={{
          gridColumn: isTabletOrPhone ? "1" : "3",
          gridRow: isTabletOrPhone ? "7" : "2",
        }}
      >
        <FooterSpan1>Instagram</FooterSpan1>
      </a>*

      {!isTabletOrPhone && (
        <FooterSpan
          style={{
            gridColumn: isTabletOrPhone ? "1" : "3",
            gridRow: isTabletOrPhone ? "8" : "3",
          }}
          title="Cliquez pour copiez l'adresse mail"
          onClick={(e) => copyToClipboard("contact@cosmosagency.fr", "email")}
        >
          contact@cosmosagency.fr
          <CopiedSpan style={{ display: isEmailCopied ? "block" : "none" }}>
            Copié !
          </CopiedSpan>
        </FooterSpan>
      )}
      {isTabletOrPhone && (
        <FooterLink
          href="mailto:contact@cosmosagency.fr"
          style={{
            gridColumn: isTabletOrPhone ? "1" : "3",
            gridRow: isTabletOrPhone ? "8" : "3",
          }}
        >
          contact@cosmosagency.fr
        </FooterLink>
      )}

      {!isTabletOrPhone && (
        <FooterSpan
          style={{
            gridColumn: isTabletOrPhone ? "1" : "3",
            gridRow: isTabletOrPhone ? "9" : "4",
          }}
          title="Cliquez pour copiez le numéro de téléphone"
          onClick={(e) => copyToClipboard("+33611441471", "phone")}
        >
          0611441471
          <CopiedSpan style={{ display: isPhoneCopied ? "block" : "none" }}>
            Copié !
          </CopiedSpan>
        </FooterSpan>
      )}
      {isTabletOrPhone && (
        <FooterLink
          href="tel:+33611441471"
          style={{
            gridColumn: isTabletOrPhone ? "1" : "3",
            gridRow: isTabletOrPhone ? "9" : "4",
          }}
        >
          0611441471
        </FooterLink>
      )}
    </footer>
    */

export default Footer;
