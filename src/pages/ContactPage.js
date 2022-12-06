import React, { useEffect } from "react";

import { useScript } from "../assets/js/functionsLibrary";
import ReactGA from "react-ga";

import { MainWrapper, CalendlyContainer } from "../assets/js/StyledComponents";

import Header from "../components/Header";
import Loader from "../components/Loader";

function ContactPage() {
  useEffect(() => {
    document.title = "Contactez-nous - Cosmos";
  }, []);

  ReactGA.pageview("/contact");

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
