import React, { useContext } from "react"
import styled from "styled-components"
import languageContext from "../../context/LanguageContext"

import SEO from "../../components/globals/SEO"
import { PagesLayout } from "../../components/globals/Layout"
import Header from "../../components/globals/Header"
import Footer from "../../components/globals/Footer"
import ServicesPageContent from "./ServicesPageContent"
import { styles as globalStyles } from "../../utils"

const ServicesWrapper = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto 5rem;
  grid-area: main;

  .title {
    padding: 5rem 2rem;
    margin: 0 auto;
  }
  .title > h1 {
    letter-spacing: 0.25em;
    font-family: "montserrat-800";
  }
  .title > p {
    letter-spacing: 1px;
    font-style: italic;
  }

  .details > p {
    padding-bottom: 1em;
    letter-spacing: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
  }

  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
    }

    .card {
      display: grid;
      grid-template-columns: minmax(5rem, 1fr) 3fr;
      min-height: 15rem;
      border: 2px solid ${globalStyles.colors.lightGray};

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 10rem 1fr;
      }
    }
  }

  .card-image-container {
    background: ${globalStyles.colors.lightGray};
    position: relative;
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0 100%);
    color: ${globalStyles.colors.blue};
    transition: all 0.3s;

    @media (max-width: 768px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    .card-image {
      opacity: 0.9;
      font-size: 3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .card:hover {
    .card-image-container {
      background: ${globalStyles.colors.blue};
      color: ${globalStyles.colors.mainLight};
    }
  }

  .card-info {
    text-align: left;
    margin: 2rem;
    font-size: 1.1rem;
  }

  .card-title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    letter-spacing: -3px;
  }
  .card-description {
    color: ${globalStyles.colors.gray};
  }

  .images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .image {
    filter: grayscale(80%);
    transition: all 0.3s;
    &:hover {
      filter: grayscale(00%);
      transform: scale(1.15);
    }
  }
  .images .info {
    text-align: left;
    line-height: 1.8;
    h2 {
      letter-spacing: -2px;
    }
  }
`

const ServicesPage = () => {
  const { language } = useContext(languageContext)

  return (
    <PagesLayout
      background={globalStyles.colors.mainLight}
      color={globalStyles.colors.darkGray}
    >
      <SEO
        title="Services"
        keywords={[
          `andrzej duda`,
          `duda transport`,
          `transport & logistics`,
          `express transport`,
          `duda transport services`,
          `Miłocice 136, 32-090 Słomniki`,
        ]}
      />
      <Header headerColor="dark" />
      <ServicesWrapper>
        <ServicesPageContent language={language} />
      </ServicesWrapper>
      <Footer />
    </PagesLayout>
  )
}

export default ServicesPage
