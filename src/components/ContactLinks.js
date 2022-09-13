import React, { useState } from "react";

import styled from "styled-components";

import { IconContext } from "@react-icons/all-files";
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin";
import { BsBuilding } from "@react-icons/all-files/bs/BsBuilding";
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram";
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail";

import { slideDownAndUp } from "../assets/js/functions";

const Li = styled.li`
  position: relative;
  margin: 2rem 0;
  list-style-type: none;
  width: fit-content;
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:hover {
    color: #fa8128;
  }
`;

const CustomLink = styled.a`
  width: fit-content;
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:hover {
    color: #fa8128;
  }
`;

const CopiedSpan = styled.span`
  position: absolute;
  margin-left: 45%;
  font-size: 1.7rem;
  color: #fa8128;
  animation: ${slideDownAndUp} 2s ease-in-out;
`;

const ContactLinks = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);
  const [isAddressCopied, setIsAddressCopied] = useState(false);

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
      } else if (line === "address") {
        setIsAddressCopied(true);
        setTimeout(() => {
          setIsAddressCopied(false);
        }, 2000);
      } else {
        return;
      }
    });
  }

  return (
    <ul style={{ margin: "0" }}>
      <IconContext.Provider
        value={{ style: { fill: "#fa8128", verticalAlign: "middle" } }}
      >
        <Li style={{ marginTop: "0" }}>
          <CustomLink
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            title="Venez visiter notre page LinkedIn !"
          >
            <SiLinkedin /> Cosmos Agency
          </CustomLink>
        </Li>
        <Li>
          <CustomLink
            href="https://www.instagram.com/cosmosagency.fr/"
            target="_blank"
            rel="noreferrer"
            title="Venez visiter notre page Instagram !"
          >
            <GrInstagram /> cosmosagency.fr
          </CustomLink>
        </Li>
        <Li
          onClick={(e) => copyToClipboard("contact@cosmosagency.fr", "email")}
          title="Cliquez pour copiez l'adresse mail"
        >
          <IoIosMail size="3rem" style={{ marginLeft: "-0.4rem" }} />{" "}
          contact@cosmosagency.fr
          <CopiedSpan
            style={{
              display: isEmailCopied ? "block" : "none",
            }}
          >
            Copié !
          </CopiedSpan>
        </Li>

        <Li
          onClick={(e) => copyToClipboard("+33611441471", "phone")}
          title="Cliquez pour copiez le numéro de téléphone"
        >
          <FaPhoneAlt /> 0611441471
          <CopiedSpan
            style={{
              display: isPhoneCopied ? "block" : "none",
            }}
          >
            Copié !
          </CopiedSpan>
        </Li>
        <Li
          onClick={(e) =>
            copyToClipboard(
              "16, impasse Quinta Florentina 67200 Strasbourg",
              "address"
            )
          }
          title="Cliquez pour copiez l'adresse postale"
        >
          <BsBuilding /> 16, imp Quinta Florentina <br />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;67200 Strasbourg
          <CopiedSpan
            style={{
              display: isAddressCopied ? "block" : "none",
            }}
          >
            Copié !
          </CopiedSpan>
        </Li>
      </IconContext.Provider>
    </ul>
  );
};

export default ContactLinks;
