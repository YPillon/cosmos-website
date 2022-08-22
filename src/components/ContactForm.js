import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";

import { useMediaQuery } from "@mui/material";

const FormSchema = Yup.object().shape({
  projectDescription: Yup.string()
    .min(20, "Veuillez détailler un peu plus votre projet")
    .max(3000, "La description est limitée à 3000 caractères")
    .required("Ce champ est requis"),
  budget: Yup.string().required("Veuillez choisir votre budget"),
  youAre: Yup.string().required("Veuillez choisir une option"),
  firstName: Yup.string()
    .min(2, "Trop court")
    .max(50, "Trop long")
    .required("Ce champ est requis"),
  lastName: Yup.string()
    .min(2, "Trop court")
    .max(50, "Trop long")
    .required("Ce champ est requis"),
  email: Yup.string().email("Invalid email").required("Ce champ est requis"),
  phone: Yup.number(),
  enterpriseName: Yup.string()
    .min(1, "Trop court")
    .max(50, "Trop long")
    .required("Ce champ est requis"),
  address: Yup.string()
    .min(1, "Trop court")
    .max(50, "Trop long")
    .required("Ce champ est requis"),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const ContactForm = () => {
  const [isFormSent, setIsFormSent] = useState(false);
  const [buttonText, setButtonText] = useState("Envoyer");

  const isPhone = useMediaQuery("(max-width:768px)");

  const FormTitle = styled.h1`
    font-size: 3rem;
    position: relative;
    width: fit-content;
    margin: 0rem 0 3rem;
    &::before {
      content: "";
      position: absolute;
      bottom: -1.2rem;
      left: 0%;
      width: 33%;
      height: 0.3rem;
      background: white;
      border: solid #2b66e9 0.2rem;
      border-radius: 1rem;
    }
  `;

  const FormSubtitle = styled.h2`
    margin: 1rem 0 2rem;
    font-size: 2.5rem;
  `;

  const FormLabel = styled.label`
    display: flex;
    flex-direction: column;
  `;

  const ErrorMessage = styled.p`
    font-size: 1.5rem;
    color: red;
    position: relative;
    top: -2.7rem;
  `;

  const RequiredSign = styled.span`
    color: red;
  `;

  const buttonMarginLeft = isPhone ? "calc(45vw - 7rem)" : 0;

  const Button = styled.button`
      font-size: 3rem;
      width: fit-content;
      padding: 0.2rem 1.2rem;
      margin: 5rem 0;
      font-weight: bolder;
      cursor: pointer;
      color: #3f008d;
      -webkit-text-stroke: 0.1rem #3f008d;
      border: solid 0.36rem #fa8128;
      border-radius: 0.8rem;
      box-shadow: #3f008d -1px 3px 7px;
      background: linear-gradient(to right, #fa8128 50%, transparent 50%) right;
      background-size: 200% 150%;
      transition: background 0.25s ease-out, transform 0.25s 0.05s ease-out;
      margin-left: ${buttonMarginLeft};

      &:hover{
        background-position: left;
        transform: translateY(-0.15rem);
        }
      }
    `;

  const slideDown = keyframes`
    0% {
      transform: translateY(-5rem);
      opacity: 0;
    }
    
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  const SuccessMessage = styled.p`
    text-align: center;
    color: #3f008d;
    animation: ${slideDown} 0.5s ease-in-out;
  `;

  return (
    <>
      <Formik
        initialValues={{
          conception: [],
          realization: [],
          projectDescription: "",
          budget: "",
          youAre: "",
          firstName: "",
          lastName: "",
          email: "",
          enterpriseName: "",
          address: "",
        }}
        validationSchema={FormSchema}
        onSubmit={async (values, { resetForm }) => {
          setButtonText("Envoi...");

          await sleep(500);

          

          emailjs
            .send(
              "contact_service",
              "contact_form",
              values,
              "cggYbpPD7dRt2uMsj"
            )
            .then(
              (result) => {
                console.log(result.text);
                setIsFormSent(true);
                setButtonText('Envoyer');
                resetForm();
              },
              (error) => {
                console.log(error.text);
                setButtonText('Envoyer');
              }
            );
        }}
      >
        {({ errors, touched }) => (
          <Form
            id="form"
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "2rem",
            }}
          >
            <FormTitle>
              Parlez-nous de votre projet, le devis est 100% gratuit&nbsp;!
            </FormTitle>

            <FormSubtitle>Quels sont vos besoins ?</FormSubtitle>

            {/* Conception */}
            <div id="conceptionGroup">Conception</div>
            <div
              role="group"
              aria-labelledby="conceptionGroup"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem 0 2rem",
              }}
            >
              <label>
                <Field
                  type="checkbox"
                  name="conception"
                  value="Expérience Utilisateur (UX)"
                />
                Expérience Utilisateur (UX)
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="conception"
                  value="Interface Utilisateur (UI)"
                />
                Interface Utilisateur (UI)
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="conception"
                  value="Logo, charte graphique, identité de marque"
                />
                Logo, charte graphique, identité de marque
              </label>
              <label>
                <Field type="checkbox" name="conception" value="Motion vidéo" />
                Motion vidéo
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="conception"
                  value="Shooting photo"
                />
                Shooting photo
              </label>
            </div>

            {/* Réalisation */}
            <div id="realizationGroup">Réalisation</div>
            <div
              role="group"
              aria-labelledby="realizationGroup"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem 0 2rem",
              }}
            >
              <label>
                <Field
                  type="checkbox"
                  name="realization"
                  value="Landing Page"
                />
                Landing Page
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="realization"
                  value="Site Vitrine"
                />
                Site Vitrine
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="realization"
                  value="Site web avec vente en ligne (e-commerce)"
                />
                Site web avec vente en ligne (e-commerce)
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="realization"
                  value="Site de réservation en ligne"
                />
                Site de réservation en ligne
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="realization"
                  value="Application mobile"
                />
                Application mobile
              </label>
            </div>

            <FormLabel>
              <span>
                Décrivez-nous votre projet<RequiredSign>*</RequiredSign>
              </span>
              <Field
                name="projectDescription"
                as="textarea"
                rows="5"
                placeholder="Faites-nous part de toutes les informations qui vous semblent importantes pour la réalisation de votre projet !"
              />
              {errors.projectDescription && touched.projectDescription ? (
                <ErrorMessage>{errors.projectDescription}</ErrorMessage>
              ) : null}
            </FormLabel>

            <div id="budgetGroup">
              Quel est votre budget ?<RequiredSign>*</RequiredSign>
            </div>
            <div
              role="group"
              aria-labelledby="budgetGroup"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "1rem 0 2rem",
              }}
            >
              <label>
                <Field type="radio" name="budget" value="Inférieur à 1000€" />
                Inférieur à 1000€
              </label>
              <label>
                <Field
                  type="radio"
                  name="budget"
                  value="Entre 1000€ et 3000€"
                />
                Entre 1000€ et 3000€
              </label>
              <label>
                <Field
                  type="radio"
                  name="budget"
                  value="Entre 3000€ et 7000€"
                />
                Entre 3000€ et 7000€
              </label>
              <label>
                <Field
                  type="radio"
                  name="budget"
                  value="Entre 7000€ et 12000€"
                />
                Entre 7000€ et 12000€
              </label>
              <label>
                <Field
                  type="radio"
                  name="budget"
                  value="Entre 12000€ et 20000€"
                />
                Entre 12000€ et 20000€
              </label>
            </div>
            {errors.budget && touched.budget ? (
              <ErrorMessage>{errors.budget}</ErrorMessage>
            ) : null}

            <FormSubtitle>Et vos coordonnées ?</FormSubtitle>

            <FormLabel>
              <span>
                Vous êtes...<RequiredSign>*</RequiredSign>
              </span>
              <Field name="youAre" as="select">
                <option value="">--Veuillez sélectionner--</option>
                <option value="Entreprise">Entreprise</option>
                <option value="Association">Association</option>
                <option value="Institution">Institution</option>
                <option value="Particulier">Particulier</option>
              </Field>
              {errors.youAre && touched.youAre ? (
                <ErrorMessage>{errors.youAre}</ErrorMessage>
              ) : null}
            </FormLabel>

            <FormLabel>
              <span>
                Prénom<RequiredSign>*</RequiredSign>
              </span>
              <Field name="firstName" />
              {errors.firstName && touched.firstName ? (
                <ErrorMessage>{errors.firstName}</ErrorMessage>
              ) : null}
            </FormLabel>

            <FormLabel>
              <span>
                Nom<RequiredSign>*</RequiredSign>
              </span>
              <Field name="lastName" />
              {errors.lastName && touched.lastName ? (
                <ErrorMessage>{errors.lastName}</ErrorMessage>
              ) : null}
            </FormLabel>

            <FormLabel>
              <span>
                {" "}
                Email<RequiredSign>*</RequiredSign>
              </span>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <ErrorMessage>{errors.email}</ErrorMessage>
              ) : null}
            </FormLabel>

            <FormLabel>
              <span>Numéro de téléphone</span>
              <Field name="number" />
            </FormLabel>

            <FormLabel>
              <span>
                Nom de votre entreprise / organisation
                <RequiredSign>*</RequiredSign>
              </span>
              <Field name="enterpriseName" />
              {errors.enterpriseName && touched.enterpriseName ? (
                <ErrorMessage>{errors.enterpriseName}</ErrorMessage>
              ) : null}
            </FormLabel>

            <FormLabel>
              <span>
                Et votre adresse postale (pour l'édition du devis)
                <RequiredSign>*</RequiredSign>
              </span>
              <Field name="address" />
              {errors.address && touched.address ? (
                <ErrorMessage>{errors.address}</ErrorMessage>
              ) : null}
            </FormLabel>
            {errors.length > 0 && touched ? (
              <ErrorMessage>Veuillez tout remplir</ErrorMessage>
            ) : null}
            <Button type="submit">{buttonText}</Button>
            {isFormSent && (
              <SuccessMessage>
                Merci ! Nous avons bien reçu votre demande de devis et nous vous
                recontacterons dans les plus brefs délais. <br />
                Pour toute demande complémentaire, n'hésitez pas à nous écrire
                par mail à contact@cosmosagency.fr&nbsp;!
              </SuccessMessage>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
