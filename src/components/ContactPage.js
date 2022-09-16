import React, {useEffect} from "react";

import { useMediaQuery } from "@mui/material";

import Header from "./Header";
import Main from "./Main";
import ContactLinks from "./ContactLinks";
import { ContactForm } from "./ContactForm";
import Loader from "./Loader";

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
        buttonText="Contacter l'agence"
        buttonLink="#main"
        arrowHidden={isPhone ? "true" : ""}
      />
      <Main>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isPhone ? "1fr" : "1fr 2fr",
            gridGap: "3rem",
            fontSize: "2.5rem",
            textAlign: "left",
          }}
        >
          <h2
            style={{
              fontSize: "4rem",
              textAlign: "center",
              margin: "7rem 0 5rem",
              gridRow: "1",
              gridColumn: "1 / 3",
            }}
          >
            Nous sommes à votre disposition pour tout renseignement ou demande
            de devis.
          </h2>
          <aside style={{ gridRow: isPhone ? "3" : "2", gridColumns: "1" }}>
            <ContactLinks />
          </aside>
          <article style={{ gridRow: "2", gridColumns: "2" }}>
            <ContactForm />
          </article>
        </div>
      </Main>
    </>
  );
}

export default ContactPage;
