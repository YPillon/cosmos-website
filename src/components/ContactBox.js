import React from "react";

import Button from "./Button";

//Styled Components
import {
  ContactBoxStyled,
  ContactTitle,
  ParagraphContact,
  ContactButtonsWrapper,
} from "../assets/js/StyledComponents";

function ContactBox() {
  return (
    <ContactBoxStyled>
      <ContactTitle>Vous avez un projet&nbsp;?</ContactTitle>
      <ParagraphContact>
        Vous voulez parler développement, image de marque, Shopify ou boxe
        thaïlandaise ?
      </ParagraphContact>
      <ContactButtonsWrapper>
        <Button
          text="Réserver un appel"
          link="./contact#main"
          buttonInternLink="true"
          textColor="#ffffff"
          customMargin="1rem"
        />
        <Button
          text="Contacter sur Linkedin"
          link="https://www.linkedin.com/in/younes-pillon"
          textColor="#ffffff"
          backgroundColor="#2b66e9"
          customMargin="1rem"
          blank
        />
      </ContactButtonsWrapper>
    </ContactBoxStyled>
  );
}

export default ContactBox;
