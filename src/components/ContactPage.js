import React, { useEffect } from "react";

import { useScript } from "../assets/js/functionsLibrary";
import ReactGA from "react-ga";

import { MainWrapper, CalendlyContainer } from "../assets/js/StyledComponents";

import Header from "./Header";
import Loader from "./Loader";

/* Google Analytics */
ReactGA.pageview("/contact");

function ContactPage() {
  useEffect(() => {
    document.title = "Contactez-nous | Cosmos";
  }, []);

  useScript("https://assets.calendly.com/assets/external/widget.js");

  return (
    <>
      <Loader />
      <Header
        title="Prêt à avoir une boutique au top&nbsp;?"
        subtitle="Discutons ensemble de votre projet !"
        buttonText="Prendre RDV maintenant"
        buttonLink="#main"
      />
      <MainWrapper customMargin="0 5%">
        <CalendlyContainer
          id="main"
          className="calendly-inline-widget"
          data-url="https://calendly.com/cosmos-appel-de-decouverte/appel-de-decouverte"
        />
      </MainWrapper>
    </>
  );
}

export default ContactPage;
