import React, { useState } from "react";

import styled, { keyframes } from "styled-components";
import { useMediaQuery } from "@mui/material";

import logo from "../assets/images/logo.png";

function Footer() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);

  const isTabletOrPhone = useMediaQuery("(max-width:1024px)");

  function copyToClipboard(text, line) {
    navigator.clipboard.writeText(text).then(() => {
      if (line === "email") {
        setIsEmailCopied(true);
        setTimeout(() => {
          setIsEmailCopied(false);
        }, 2000);
      } else if (line === "phone") {
        setIsPhoneCopied(true);
        setTimeout(() => {
          setIsPhoneCopied(false);
        }, 2000);
      } else {
        return;
      }
    });
  }

  const dateBuilder = () => {
    let date = new Date();
    return date.getFullYear();
  };

  const FooterLink = styled.a`
    width: fit-content;
    transition: all 0.25s ease-out;
    &:hover {
      color: #fa8128;
    }
  `;

  const FooterSpan = styled.span`
    text-align: center;
    width: fit-content;
    cursor: pointer;
    transition: all 0.25s ease-out;
    &:hover {
      color: #fa8128;
    }
  `;

  const slideDownAndUp = keyframes`
    0%, 100% {
      transform: translateY(-5rem);
      opacity: 0;
    }
    15%, 85% {
      transform: translateY(1rem);
      opacity: 1;
    }
    
    20%, 80% {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  const CopiedSpan = styled.span`
    font-size: 1.7rem;
    color: #fa8128;
    animation: ${slideDownAndUp} 2s ease-in-out;
  `;

  return (
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
          ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
          : "1fr 1fr 1fr",
      }}
    >
      <a href="" style={{ gridColumn: "1", gridRow: "1 / 2" }}>
        <img
          src={logo}
          alt="logo de l'agence Cosmos"
          style={{ height: "7rem" }}
        />
      </a>
      <span
        style={{
          fontSize: "1.5rem",
          gridColumn: "1",
          gridRow: isTabletOrPhone ? "9" : "3",
        }}
      >
        Tous droits réservés ©️ {dateBuilder()}
      </span>
      <FooterLink
        href=""
        style={{
          gridColumn: isTabletOrPhone ? "1" : "2",
          gridRow: isTabletOrPhone ? "3" : "1",
        }}
      >
        Réalisations
      </FooterLink>
      <FooterLink
        href=""
        style={{
          gridColumn: isTabletOrPhone ? "1" : "2",
          gridRow: isTabletOrPhone ? "4" : "2",
        }}
      >
        Nos Packs
      </FooterLink>
      <FooterLink
        href=""
        style={{
          gridColumn: isTabletOrPhone ? "1" : "2",
          gridRow: isTabletOrPhone ? "5" : "3",
        }}
      >
        Contact
      </FooterLink>
      <FooterLink
        href=""
        target="_blank"
        style={{
          gridColumn: isTabletOrPhone ? "1" : "3",
          gridRow: isTabletOrPhone ? "6" : "1",
        }}
      >
        Instagram
      </FooterLink>
      <FooterSpan
        style={{
          gridColumn: isTabletOrPhone ? "1" : "3",
          gridRow: isTabletOrPhone ? "7" : "2",
        }}
        title="Cliquez pour copiez l'adresse mail"
        onClick={(e) => copyToClipboard("contact@cosmosagency.fr", "email")}
      >
        contact@cosmosagency.fr
        <CopiedSpan style={{ display: isEmailCopied ? "block" : "none" }}>
          Copié !
        </CopiedSpan>
      </FooterSpan>
      <FooterSpan
        style={{
          gridColumn: isTabletOrPhone ? "1" : "3",
          gridRow: isTabletOrPhone ? "8" : "3",
        }}
        title="Cliquez pour copiez le numéro de téléphone"
        onClick={(e) => copyToClipboard("0611441471", "phone")}
      >
        0611441471
        <CopiedSpan style={{ display: isPhoneCopied ? "block" : "none" }}>
          Copié !
        </CopiedSpan>
      </FooterSpan>
    </footer>
  );
}

export default Footer;
