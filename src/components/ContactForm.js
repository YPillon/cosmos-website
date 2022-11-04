import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled, { keyframes } from "styled-components";
import emailjs from "@emailjs/browser";
import ReactGA from "react-ga";

import { useMediaQuery } from "@mui/material";

const FormTitle = styled.h1`
  font-size: 2.5rem;
  position: relative;
  width: fit-content;
  margin: 0rem 0 5rem;
  &::before {
    content: "";
    position: absolute;
    bottom: -2rem;
    left: 0%;
    width: 33%;
    height: 0.3rem;
    background: white;
    border: solid #2b66e9 0.2rem;
    border-radius: 1rem;
  }
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const LabelSpan = styled.span`
  margin-bottom: 1rem;
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

const Button = styled.button`
      font-size: 3rem;
      width: fit-content;
      padding: 0.2rem 1.2rem;
      margin: 2rem 0;
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
      margin-left: ${(props) => props.buttonMarginLeft};

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

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Le nom doit au moins contenir 2 caractères")
    .max(60, "Le nom ne peut pas dépasser 60 caractères")
    .required("Ce champ est requis"),
  email: Yup.string()
    .email("L'email est invalide")
    .required("Ce champ est requis"),
  phone: Yup.number(
    'Veuillez n\'utiliser que des chiffres et/ou le signe "+"'
  ).required("Ce champ est requis"),
  message: Yup.string().max(2000),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const ContactForm = () => {
  const [isFormSent, setIsFormSent] = useState(false);
  const [buttonText, setButtonText] = useState("Envoyer");

  const isPhone = useMediaQuery("(max-width:768px)");

  const buttonMarginLeft = isPhone ? "calc(45vw - 7rem)" : 0;

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
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
                ReactGA.event({
                  category: "User",
                  action: "Submitted the form !",
                });
                setButtonText("Envoyer");
                resetForm();
              },
              (error) => {
                console.log(error.text);
                setButtonText("Envoyer");
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
              message: "",
            }}
          >
            <FormTitle>
              Nous avons seulement besoin de quelques informations.
            </FormTitle>

            <FormLabel>
              <LabelSpan>
                Comment vous appelez-vous&nbsp;?<RequiredSign>*</RequiredSign>
              </LabelSpan>
              <Field name="name" />
              {errors.name && touched.name ? (
                <ErrorMessage>{errors.name}</ErrorMessage>
              ) : null}
            </FormLabel>

            <FormLabel>
              <LabelSpan>
                {" "}
                Quel est votre email&nbsp;?<RequiredSign>*</RequiredSign>
              </LabelSpan>
              <Field name="email" type="email" />
              {errors.email && touched.email ? (
                <ErrorMessage>{errors.email}</ErrorMessage>
              ) : null}
            </FormLabel>

            <FormLabel>
              <LabelSpan>
                Et votre numéro de téléphone&nbsp;?
                <RequiredSign>*</RequiredSign>
              </LabelSpan>
              <Field name="phone" />
              {errors.phone && touched.phone ? (
                <ErrorMessage>{errors.phone}</ErrorMessage>
              ) : null}
            </FormLabel>

            <FormLabel>
              <LabelSpan>Message (optionnel)</LabelSpan>
              <Field
                name="message"
                as="textarea"
                rows="2"
                placeholder="Toute info qui vous semble utile."
                style={{
                  resize: "vertical",
                  width: "100%",
                  scrollBarColor: "orange",
                  height: "5rem",
                }}
              />
              {errors.projectDescription && touched.projectDescription ? (
                <ErrorMessage>{errors.projectDescription}</ErrorMessage>
              ) : null}
            </FormLabel>

            {isFormSent && (
              <SuccessMessage>
                Merci !
                <br />
                Nous avons bien reçu votre inscription et nous vous
                recontacterons dans les plus brefs délais pour convenir d'une
                date.
                <br />
                Pour toute demande complémentaire, n'hésitez pas à nous écrire
                par mail à contact@cosmosagency.fr&nbsp;!
              </SuccessMessage>
            )}

            <div style={{ textAlign: isPhone ? "inherit" : "center" }}>
              <Button type="submit" buttonMarginLeft={buttonMarginLeft}>
                {buttonText}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
