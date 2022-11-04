import React, { useEffect } from "react";

import { useMediaQuery } from "@mui/material";
import ReactGA from "react-ga";

import Header from "./Header";
import Main from "./Main";
import ContactLinks from "./ContactLinks";
import { ContactForm } from "./ContactForm";
import Loader from "./Loader";

/* Google Analytics */
ReactGA.pageview("/contact");

function ContactPage() {
  const isPhone = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    document.title = "Contactez-nous | Cosmos";
  }, []);

  return (
    <>
      <Loader />
      <Header
        title="Contactez-nous"
        subtitle="Vous avez trouvé l'agence qui vous correspond."
        buttonText="Ma séance de conseil offerte"
        buttonLink="#main"
        arrowHidden={isPhone ? "true" : ""}
      />
      <Main>
        <div
          style={{
            /*display: "grid",
            gridTemplateColumns: isPhone ? "1fr" : "5fr 2fr",
            gridGap: "2rem 5rem",*/
            fontSize: "2.5rem",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "4rem",
              textAlign: "center",
              margin: "7rem 0 5rem",
              /*gridRow: "1",
              gridColumn: isPhone ? "1" : "1 / 3",*/
            }}
          >
            Profitez d'une séance de conseil offerte sans engagement pour faire
            le point sur votre situation.
          </h2>

          <ContactForm />

          {/*<article style={{ gridRow: "2", gridColumns: "1" }}>
            <ContactForm />
          </article>*/}
          {/*<aside
            style={{
              gridRow: isPhone ? "3" : "2",
              gridColumns: isPhone ? "1" : "6",
              paddingTop: "0.5rem",
            }}
          >
            <ContactLinks />
          </aside>*/}
        </div>
      </Main>
    </>
  );
}

export default ContactPage;
