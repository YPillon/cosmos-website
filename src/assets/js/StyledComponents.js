import styled, { keyframes } from "styled-components";

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
//Animations end

//Media Queries
export const device = {
  phone: "(max-width: 768px)",
  tablet: "(max-width: 1024px)",
};

//Components start
export const MainWrapper = styled.main`
  margin: 0 5%;
  text-align: center;
  font-size: 1.8rem;
`;

export const Separator = styled.div`
  height: 15rem;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  margin-bottom: 25rem;

  ${(props) =>
    props.reverse &&
    `
  flex-direction: row-reverse;
  `};
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

export const PresentationImageProxy = styled.div`
  height: 50rem;
  width: auto;
  aspect-ratio: 1 / 1.6;
  margin: 5rem 10rem 0;
  background: #2b66e9;

  ${(props) =>
    props.reverse &&
    `
  margin: 5rem 10rem 0 0`}
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

export const Card = styled.article`
  width: ${(props) => props.width || "29.8%"};
  border-radius: 2rem;
  transition: 0.25s linear;

  &:hover {
    /*border-color: ${(props) => props.borderColor || "#2c2e4b"};
    border: solid 0.2rem;*/
    transform: translateY(-1rem);
    animation: ${HaloBoxBlue} 2s linear infinite;
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
  background: #fa8128;
  height: 10rem;
  width: 10rem;
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

export const FounderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 0 15rem;

  @media ${device.phone} {
    flex-direction: column;
  }
`;

export const PhotoFounderProxy = styled.div`
  background: #2b66e9;
  aspect-ratio: 1/1;
  height: 40rem;
  max-height: 40rem;
  max-width: 40rem;
  border-radius: 50%;

  @media ${device.phone} {
    height: auto;
    width: 75%;
  }
`;

export const FounderTextWrapper = styled.article`
  width: 60%;
  padding: 4rem;

  @media ${device.phone} {
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
    padding: 1rem 2rem;
  }
`;

export const ContactTitle = styled.h1`
  font-size: 4rem;
  color: white;
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
`;

export const StyledButtonWithGlow = styled(StyledButton)`
  animation: ${HaloBoxViolet} 3.5s linear infinite;
`;

//components end
