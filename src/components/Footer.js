import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

import logo from "../assets/images/logo.webp";
import { slideDownAndUp } from "../assets/js/functions";

const FooterSpan1 = styled.span`
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

const CopiedSpan = styled.span`
  font-size: 1.7rem;
  color: #fa8128;
  animation: ${slideDownAndUp} 2s ease-in-out;
`;

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
          ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
          : "1fr 1fr 1fr 1fr",
      }}
    >
      <Link to="/" style={{ gridColumn: "1", gridRow: "1 / 2" }}>
        <img
          width="262"
          height="70"
          src={logo}
          alt="logo de l'agence Cosmos"
          style={{ height: "7rem" }}
        />
      </Link>
      <span
        style={{
          fontSize: "1.5rem",
          gridColumn: "1",
          gridRow: isTabletOrPhone ? "10" : "3",
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
      >
        <FooterSpan1>Contact</FooterSpan1>
      </Link>

      <a
        href="https://www.linkedIn.com"
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
      </a>

      <FooterSpan
        style={{
          gridColumn: isTabletOrPhone ? "1" : "3",
          gridRow: isTabletOrPhone ? "8" : "3",
        }}
        title="Cliquez pour copiez l'adresse mail"
        onTouchEnd={(e) => copyToClipboard("contact@cosmosagency.fr", "email")}
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
          gridRow: isTabletOrPhone ? "9" : "4",
        }}
        title="Cliquez pour copiez le numéro de téléphone"
        onTouchEnd={(e) => copyToClipboard("+33611441471", "phone")}
        onClick={(e) => copyToClipboard("+33611441471", "phone")}
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
