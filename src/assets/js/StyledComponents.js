import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom";

import djokoAndNadal from "../images/djoko-and-nadal.webp";

//Media Queries
export const device = {
  phone: "(max-width: 768px)",
  tablet: "(max-width: 1024px)",
};

//Animations start
export const HaloBoxBlue = keyframes`
    0% {
    box-shadow: #2b66e9 1px 1px 5px
    }
    25% {
      box-shadow: #2b66e9 1px 1px 15px;
    }
    50% {
      box-shadow: #2b66e9 2px 2px 20px;
    }
    75% {
      box-shadow: #2b66e9 1px 1px 15px;
    }
    100%{
      box-shadow: #2b66e9 1px 1px 5px
    }
    `;

export const HaloBoxViolet = keyframes`
    0% {
    box-shadow: #3f008d 1px 1px 5px
    }
    25% {
      box-shadow: #3f008d 1px 1px 15px;
    }
    50% {
      box-shadow: #3f008d 2px 2px 20px;
    }
    75% {
      box-shadow: #3f008d 1px 1px 15px;
    }
    100%{
      box-shadow: #3f008d 1px 1px 5px
    }
    `;

export const slideDownAndUp = keyframes`
    0%, 100% {
      transform: translateY(-5rem);
      opacity: 0;
    }
    15%, 85% {
      transform: translateY(1rem);
      opacity: 1;
    }
    
    20%, 80% {
      transform: translateY(0);
      opacity: 1;
    }
  `;

export const BounceAnimation = keyframes`
    0%, 75%, 80%, 87.5%, 95%, 100% {transform: translateY(0);}
      85% {transform: translateY(-30px);}
      90% {transform: translateY(-15px);}
    `;

export const ShakeAnimation = keyframes`
  
    0%, 75%, 80%, 87.5%, 95%, 100% {transform: translateX(0);}
      85% {transform: translateX(10px);}
      90% {transform: translateX(5px);}
    `;

export const UpAndDown = keyframes`
      50% {transform: translateY(-3rem);}
      100% {transform: translateY(0;}
    `;
//Animations end

//Animations elements start

export const StarCloudContainer = styled.a`
  display: block;
  height: 20rem;
  width: 40rem;
  position: absolute;
  right: 4%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover img {
    -webkit-transform: rotate(360deg);
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const UpDownStar = styled.div`
  height: 4rem;
  width: 4rem;

  margin-bottom: ${(props) => props.marginBottom || "0"};

  animation: ${UpAndDown} ease-in-out infinite 3s;
  animation-delay: ${(props) => props.delay || "0s"};
`;

export const RotateStar = styled.img`
  height: 100%;
  width: 100%;
  transition: transform 1s;
`;

//Animations elements end

//Components start

//Header Start

export const HeaderTitle = styled.h1`
  font-size: ${(props) => props.fontSize};
  color: #fa8128;
  width: fit-content;
  -webkit-text-stroke: #3f008d 0.18rem;
  padding-top: ${(props) => props.paddingTop || "35rem"};
  margin-bottom: 1rem;
  text-shadow: -2px 4px 1px #3f008d;

  @media ${device.phone} {
    padding-top: 20rem;
    font-size: 4.5rem;
  }
`;

export const HeaderSubtitle = styled.h2`
  font-size: 5rem;
  color: #2b66e9;
  width: fit-content;
  -webkit-text-stroke: #3f008d 0.18rem;
  text-shadow: -2px 4px 1px #fa8128;

  @media ${device.phone} {
    font-size: 3.5rem;
  }
`;

// Arrow header start

export const ArrowContainer = styled.div`
  position: absolute;
  left: 0%;
  bottom: 5rem;
  cursor: pointer;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;

  &:hover {
    background: linear-gradient(to bottom right, #2b66e9, #2b66e9);
  }

  @media ${device.phone} {
    display: none;
  }
`;

export const ArrowBranch = styled.span`
  position: absolute;
  height: 3rem;
  width: 0.6rem;
  /*border: 0.2rem #3f008d solid;*/
  border-radius: 5rem;
  background-color: #fa8128;
  left: 50%;
  bottom: 5%;
  box-shadow: #fa8128 -3px 3px 7px;
`;

// Arrow header end

//Header end

export const MainWrapper = styled.main`
  margin: ${(props) => props.customMargin || "0 10%"};
  text-align: center;
  font-size: 1.8rem;
`;

export const Separator = styled.div`
  height: ${(props) => props.height || "15rem"};

  @media ${device.phone} {
    height: 8rem;
  }
`;

export const ArticleWrapper = styled.section`
  display: flex;
  margin-bottom: 25rem;

  ${(props) =>
    props.reverse &&
    `
  flex-direction: row-reverse;
  `};

  @media ${device.tablet} {
    margin-bottom: 8rem;
  }
`;

export const PresentationTextWrapper = styled.article`
  text-align: left; ;
`;

export const ArticleTitle = styled.h1`
  font-size: 3.5rem;
  color: #2c2e4b;
  width: fit-content;
  margin: ${(props) => props.margin || "5rem 0rem 5rem"};
`;

export const PresentationImageWhy = styled.div`
  height: 50rem;
  width: auto;
  aspect-ratio: 1 / 1.6;
  margin: 5rem 10rem 0;
  background: ${(props) =>
    props.background || "linear-gradient(white, #2b66e9)"};
  border: ${(props) => props.border || "solid #2b66e9 0.2rem"};
  position: relative;
  box-shadow: #2c2e4b 2px 2px 10px;

  @media ${device.tablet} {
    display: none;
  }

  ${(props) =>
    props.reverse &&
    `
  margin: 5rem 10rem 0 0`}
`;

export const PresentationImageHow = styled(PresentationImageWhy)`
  background: url(${djokoAndNadal}) no-repeat 50% 100%,
    linear-gradient(transparent, #2b66e9);
  background-size: 250%;
`;

export const WhyImage = styled.img`
  object-fit: cover;
  object-position: 47% 50%;
  width: 100%;
  height: 100%;
  transform: translate(4rem, 4rem);

  box-shadow: #2c2e4b 2px 2px 10px;
`;

export const HowImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ShadowDiv = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  height: 2rem;
  width: 100%;
  background: transparent;
  border-radius: 50%;
  box-shadow: #2c2e4b 0px 44px 42px;
`;

export const OutlineTitleWord = styled.span`
  color: ${(props) => props.color || "#2b66e9"};
  text-shadow: -1px 1px 1px #2c2e4b;
  -webkit-text-stroke: #2c2e4b 0.1rem;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Paragraph = styled.p`
  margin: 3rem 0;
  width: ${(props) => props.width || "100%"};
  line-height: 3rem;

  @media ${device.phone} {
    width: 100%;
  }
`;

export const List = styled.ul`
  list-style-position: inside;
`;

export const ListWithBulletsOutside = styled.ul`
  margin-left: 2rem;
`;

export const ListItem = styled.li`
  margin: 1.5rem 0;
`;

export const ServiceSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0px 0px 20rem;

  @media ${device.phone} {
    margin-bottom: 8rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 8rem;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServiceSectionLink = styled(Link)`
  width: 29.8%;
`;

export const Card = styled.article`
  width: ${(props) => props.width || "100%"};
  border-radius: 2rem;
  transition: 0.25s linear;

  &:hover {
    transform: translateY(-1rem);
    animation: ${HaloBoxBlue} 2s linear infinite;
  }
  &:hover img {
    height: 65%;
  }
  @media ${device.tablet} {
    width: 80%;
  }
  @media ${device.phone} {
    width: 100%;
  }
`;

export const CardImageWrapper = styled.div`
  background-color: #2c2e4b;
  height: auto;
  width: 100%;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const CardImageProxy = styled.div`
  border-radius: 50%;
  background: white;
  height: 10rem;
  width: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  height: 60%;
  width: 65%;
`;

export const CardContent = styled.div`
  width: 100%;
  text-align: left;
  padding: 5rem;
`;

export const CardContentTitle = styled.h2`
  font-size: 3rem;
  color: #2c2e4b;
  width: fit-content;
  margin: 0rem 0rem 4rem;
`;

export const ParagraphServiceSection = styled(Paragraph)`
  @media ${device.phone} {
    margin-top: 0;
  }
`;

export const FounderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 0 15rem;
`;

export const FounderSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const PhotoFounderContainer = styled.div`
  aspect-ratio: 1/1;
  height: 40rem;
  max-height: 40rem;
  max-width: 40rem;
  border-radius: 50%;

  @media ${device.phone} {
    height: auto;
    width: 75%;
    margin-bottom: 3rem;
  }
`;

export const PhotoFounder = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FounderTextWrapper = styled.article`
  width: 60%;
  padding: 4rem;

  @media ${device.tablet} {
    width: 100%;
    padding: 0;
  }
`;

export const ParagraphAboutFounder = styled.p`
  margin: 3rem 0;
  width: 100%;
  line-height: 3rem;
  text-align: left;
`;

// ContactBox Component start
export const ContactBoxStyled = styled.div`
  background: #2c2e4b;
  border-radius: 2rem;
  max-width: 85rem;
  width: 100%;
  padding: 5rem 10rem;
  margin: 5rem auto 15rem;

  @media ${device.phone} {
    padding: 3rem;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 4rem;
  color: white;

  @media ${device.phone} {
    margin-bottom: 2rem;
  }
`;

export const ParagraphContact = styled.p`
  margin: 5rem 0;
  width: 100%;
  line-height: 3rem;
  text-align: center;
  color: white;

  @media ${device.phone} {
    display: none;
  }
`;

export const ContactButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media ${device.phone} {
    flex-direction: column;
  }
`;
// ContactBox Component end

export const StyledButton = styled.button`
  font-size: 2rem;
  padding: 2rem 4rem;
  margin: ${(props) => props.margin || "5rem 1rem"};
  font-weight: bolder;
  cursor: pointer;
  color: ${(props) => props.textColor || "#3f008d"};
  border: none;
  border-radius: 1rem;
  background: ${(props) => props.backgroundColor || "#fa8128"};
  transition: background 0.25s ease-out, transform 0.25s 0.05s ease-out;

  ${(props) =>
    props.shadow &&
    `
    box-shadow: #2c2e4b 2px 2px 5px;
  `}
`;

export const StyledButtonWithGlow = styled(StyledButton)`
  animation: ${HaloBoxViolet} 3.5s linear infinite;
`;

export const RealizationButton = styled(StyledButton)`
  position: absolute;
  bottom: -4rem;
`;

// Footer start

export const StyledFooter = styled.footer`
  background: #2c2e4b;
  color: rgba(255, 255, 255, 0.5);
  padding: 5rem 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media ${device.phone} {
    flex-direction: column;
  }
`;

export const FooterColumn = styled.div`
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: 100%;

  @media ${device.phone} {
    margin: 2rem 0;
  }
`;

export const FooterTitle = styled.h1`
  font-weight: bold;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.8rem;
  margin: 1rem 0;
`;

export const FooterLink = styled.a`
  text-align: center;
  width: fit-content;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  margin: 1rem 0;
`;

export const FooterSpan = styled.span`
  text-align: center;
  width: fit-content;
  color: rgba(255, 255, 255, 0.5);
  margin: 1rem 0;
`;

// Footer end

export const CalendlyContainer = styled.div`
  width: 100%;
  height: 90rem;
  padding: 10rem 0;
`;

// Achievements start

export const RealizationArticle = styled.article`
  border-radius: 1rem;
  margin: 5rem 0 15rem;
  width: auto;
  height: ${(props) => props.articleHeight || "36rem"};
  min-height: 35rem;
  background-image: linear-gradient(
      ${(props) => props.backgroundColor},
      ${(props) => props.backgroundColor}
    ),
    url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: cover;
  display: flex;
  text-align: left;
  position: relative;

  @media ${device.phone && device.tablet} {
    height: auto;
  }
`;

export const AchievementsTitle = styled.h1`
  font-size: 3rem;
  position: relative;
  width: fit-content;
  margin: 1rem 0 3rem;
  &::before {
    content: "";
    position: absolute;
    bottom: -1.2rem;
    left: 0%;
    width: 10rem;
    height: 0.3rem;
    background: white;
    border: solid ${(props) => props.titleUnderlineColor} 0.2rem;
    border-radius: 1rem;
  }
`;

// Achievements end

//components end
