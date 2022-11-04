import React, { useEffect } from "react";
import ReactGA from "react-ga";

import Header from "./Header";
import Review from "./Review";
import Loader from "./Loader";
import ContactBox from "./ContactBox";

//Styled Components
import {
  Separator,
  MainWrapper,
  ArticleWrapper,
  PresentationTextWrapper,
  ArticleTitle,
  PresentationImageProxy,
  OutlineTitleWord,
  Bold,
  Paragraph,
  List,
  ListWithBulletsOutside,
  ListItem,
  CardWrapper,
  Card,
  CardImageWrapper,
  CardImageProxy,
  CardContent,
  CardContentTitle,
  FounderSection,
  PhotoFounderProxy,
  ParagraphAboutFounder,
  FounderTextWrapper,
} from "../assets/js/StyledComponents";

import lEngelmann from "../assets/images/louise-engelmann2.webp";

/* Google Analytics */
ReactGA.pageview("/");

function Homepage() {
  useEffect(() => {
    document.title = "Cosmos, agence web et mobile à Strasbourg";
  }, []);

  return (
    <>
      <Loader />
      <Header
        paddingTop="37vh"
        title="Boostez votre image de marque"
        subtitle="et vos ventes !"
        buttonText="Réserver un appel"
        buttonLink="/contact#main"
        buttonInternLink="true"
      />
      <MainWrapper id="main">
        <Separator />
        {/*Présentation*/}
        <ArticleWrapper>
          <PresentationTextWrapper>
            <ArticleTitle>
              Bâtissez une <OutlineTitleWord>image de marque</OutlineTitleWord>{" "}
              solide
            </ArticleTitle>

            <Paragraph>Vous êtes e-commerçant et vous voulez&nbsp;:</Paragraph>

            <List>
              <ListItem>
                Améliorer votre <Bold>image de marque</Bold>
              </ListItem>
              <ListItem>
                <Bold>Augmenter</Bold> vos ventes
              </ListItem>
              <ListItem>
                Vous <Bold>démarquer</Bold> de la concurrence
              </ListItem>
              <ListItem>
                Gagner en <Bold>notoriété</Bold>
              </ListItem>
            </List>
            <Paragraph>Vous êtes au bon endroit.</Paragraph>
            <Paragraph>
              Chez Cosmos, on vous accompagne dans la création de votre site
              e-commerce pour vous aider à avoir une image de marque{" "}
              <Bold>au top</Bold>, des clients <Bold>récurrents</Bold> et faire{" "}
              <Bold>exploser</Bold> votre chiffre d'affaire&nbsp;!
            </Paragraph>
          </PresentationTextWrapper>
          <PresentationImageProxy></PresentationImageProxy>
        </ArticleWrapper>

        <ArticleWrapper reverse>
          <PresentationTextWrapper>
            <ArticleTitle>
              <OutlineTitleWord>Fidélisez</OutlineTitleWord> vos clients
            </ArticleTitle>

            <Paragraph>
              Fidélisez vos clients avec un site pro, réalisé par des pros.
            </Paragraph>
            <Paragraph>Comment ça marche ?</Paragraph>
            <Paragraph>
              C'est simple. On discute ensemble de votre projet pour{" "}
              <Bold>comprendre</Bold> en profondeur votre <Bold>besoin</Bold>,
              votre marché et on vous <Bold>conseille</Bold>.
            </Paragraph>
            <Paragraph>
              Puis on vous accompagne de <Bold>A à Z</Bold> dans sa réalisation,
              avec à la sortie un site <Bold>personnalisé</Bold> au millimètre
              qui <Bold>convertit</Bold>, qui est <Bold>beau</Bold>, optimisé
              pour le SEO et qui fait passer vos prospects à{" "}
              <Bold>l'action</Bold> en achetant votre dernier produit &nbsp;!
            </Paragraph>
          </PresentationTextWrapper>
          <PresentationImageProxy reverse></PresentationImageProxy>
        </ArticleWrapper>

        {/* Services section */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            margin: "0 0 20rem",
          }}
        >
          <ArticleTitle margin="0rem 0 10rem">
            <OutlineTitleWord>
              Création de boutiques e-commerce
            </OutlineTitleWord>{" "}
            / <OutlineTitleWord color="#fa8128">Custom themes</OutlineTitleWord>{" "}
            / <OutlineTitleWord>Customs apps</OutlineTitleWord>
          </ArticleTitle>
          <CardWrapper>
            <Card>
              <CardImageWrapper>
                <CardImageProxy></CardImageProxy>
              </CardImageWrapper>
              <CardContent>
                <CardContentTitle>Création de votre boutique</CardContentTitle>
                <ListWithBulletsOutside>
                  <ListItem>Choix du thème</ListItem>
                  <ListItem>Intégration de votre catalogue produit</ListItem>
                  <ListItem>Configuration du checkout</ListItem>
                  <ListItem>Mise en place d'une solution de livraison</ListItem>
                  <ListItem>Optimisation SEO</ListItem>
                  <ListItem>Hébergement</ListItem>
                  <ListItem>Maintenance</ListItem>
                </ListWithBulletsOutside>
              </CardContent>
            </Card>
            <Card>
              <CardImageWrapper>
                <CardImageProxy></CardImageProxy>
              </CardImageWrapper>
              <CardContent>
                <CardContentTitle>
                  Développement de thèmes customisés
                </CardContentTitle>
                <ListWithBulletsOutside>
                  <ListItem>Thème personnalisé</ListItem>
                  <ListItem>Adapté à votre besoin</ListItem>
                  <ListItem>Expérience utilisateur unique</ListItem>
                  <ListItem>Custom storefront</ListItem>
                </ListWithBulletsOutside>
              </CardContent>
            </Card>
            <Card>
              <CardImageWrapper>
                <CardImageProxy></CardImageProxy>
              </CardImageWrapper>
              <CardContent>
                <CardContentTitle>
                  Développement d'apps Shopify
                </CardContentTitle>
                <ListWithBulletsOutside>
                  <ListItem>Développement de custom apps</ListItem>
                  <ListItem>
                    Personnalisation à votre situation précise
                  </ListItem>
                  <ListItem>Intégration à votre boutique</ListItem>
                  <ListItem>Hébergement de l'app</ListItem>
                </ListWithBulletsOutside>
              </CardContent>
            </Card>
          </CardWrapper>

          <Paragraph width="60%">
            Notre expertise nous permet de contrôler tous les aspects de
            l'expérience utilisateur et de mettre en oeuvre une solution avec
            une <Bold>personnalisation to-tale</Bold>.
          </Paragraph>
        </section>

        {/*About section */}
        <FounderSection>
          <PhotoFounderProxy></PhotoFounderProxy>
          <FounderTextWrapper>
            <ParagraphAboutFounder>
              Passionné par l'entrepreneuriat, l'informatique et le commerce,
              j'ai créé Cosmos&nbsp;: une agence digitale spécialisée dans le
              développement de sites e-commerce sur Shopify.
            </ParagraphAboutFounder>
            <ParagraphAboutFounder>
              Chez Cosmos, on accompagne les e-commerçants pour développer leur
              image de marque, fidéliser leurs clients, augmenter leur LTV et
              leurs ventes.
            </ParagraphAboutFounder>
            <ParagraphAboutFounder>
              On a hâte de vous accompagner pour bâtir votre image de marque et
              séduire vos prochains clients !
            </ParagraphAboutFounder>
            <ParagraphAboutFounder>Younes</ParagraphAboutFounder>
          </FounderTextWrapper>
        </FounderSection>

        <Review
          text="«&nbsp;Nous avons fait appel à Cosmos pour ajouter des fonctionnalités sur notre boutique en ligne et nous avons été entièrement satisfaits par le rendu. Ils ont parfaitement compris ce que nous voulions et l'ont réalisé avec professionnalisme.&nbsp;»"
          img={lEngelmann}
          altTxt="Photo de Louise Engelmann, heureuse cliente de l'agence Cosmos."
          name="Louise Engelmann"
          job="Directeur général chez Woodifull"
        />

        <ContactBox />
      </MainWrapper>
    </>
  );
}

export default Homepage;
