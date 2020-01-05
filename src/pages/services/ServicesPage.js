import React, { useContext } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import languageContext from "../../context/LanguageContext"

import SEO from "../../components/globals/SEO"
import { PagesLayout } from "../../components/globals/Layout"
import Header from "../../components/globals/Header"
import Footer from "../../components/globals/Footer"

import { FaTruck, FaExchangeAlt, FaCube, FaFileSignature } from "react-icons/fa"

const GET_TRUCKS_IMAGES = graphql`
  {
    truck1: file(relativePath: { eq: "trucks/truck1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    truck2: file(relativePath: { eq: "trucks/truck2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    truck3: file(relativePath: { eq: "trucks/truck3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ServicesPage = ({
  languageVariants: { ENGLISH, POLISH },
  globalStyles,
  componentStyles: { ServicesWrapper, imageStyles },
}) => {
  const { language } = useContext(languageContext)

  const selectedLanguage = language === "ENGLISH" ? ENGLISH : POLISH

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
        <div className="info">
          <div className="title">
            <h1>{selectedLanguage.services.title}</h1>
            <p>{selectedLanguage.services.subtitle}</p>
          </div>

          <div className="details">
            <div className="cards">
              <div className="card card-1">
                <div className="card-image-container">
                  <div className="card-image">
                    <FaExchangeAlt />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">
                    {selectedLanguage.services.cards.card1.title}
                  </h3>
                  <p className="card-description">
                    {selectedLanguage.services.cards.card1.description}
                  </p>
                </div>
              </div>
              <div className="card card-2">
                <div className="card-image-container">
                  <div className="card-image">
                    <FaTruck />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">
                    {selectedLanguage.services.cards.card2.title}
                  </h3>
                  <p className="card-description">
                    {selectedLanguage.services.cards.card2.description}
                  </p>
                </div>
              </div>
              <div className="card card-3">
                <div className="card-image-container">
                  <div className="card-image">
                    <FaCube />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">
                    {selectedLanguage.services.cards.card3.title}
                  </h3>
                  <p className="card-description">
                    {selectedLanguage.services.cards.card3.description}
                  </p>
                </div>
              </div>
              <div className="card card-4">
                <div className="card-image-container">
                  <div className="card-image">
                    <FaFileSignature />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">
                    {selectedLanguage.services.cards.card4.title}
                  </h3>
                  <p className="card-description">
                    {selectedLanguage.services.cards.card4.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="title">
            <h1>{selectedLanguage.fleet.title}</h1>
            <p>{selectedLanguage.fleet.subtitle}</p>
          </div>
          <StaticQuery
            query={GET_TRUCKS_IMAGES}
            render={data => {
              return (
                <div className="images">
                  <div className="image">
                    <Img
                      fluid={data.truck1.childImageSharp.fluid}
                      style={imageStyles}
                    />
                  </div>
                  <div className="info">
                    <h2>{selectedLanguage.fleet.trucks.truck1.name}</h2>
                    <p>{selectedLanguage.fleet.trucks.truck1.dimensions}</p>
                    <p>{selectedLanguage.fleet.trucks.truck1.capacity}</p>
                    <p>{selectedLanguage.fleet.trucks.truck1.loadCapacity}</p>
                    <p>{selectedLanguage.fleet.trucks.truck1.palletsNumber}</p>
                    <p style={{ fontStyle: "italic" }}>
                      {selectedLanguage.fleet.trucks.truck1.description}
                    </p>
                  </div>
                  <div className="image">
                    <Img
                      fluid={data.truck2.childImageSharp.fluid}
                      style={imageStyles}
                    />
                  </div>
                  <div className="info">
                    <h2>{selectedLanguage.fleet.trucks.truck2.name}</h2>
                    <p>{selectedLanguage.fleet.trucks.truck2.dimensions}</p>
                    <p>{selectedLanguage.fleet.trucks.truck2.capacity}</p>
                    <p>{selectedLanguage.fleet.trucks.truck2.loadCapacity}</p>
                    <p>{selectedLanguage.fleet.trucks.truck2.palletsNumber}</p>
                    <p style={{ fontStyle: "italic" }}>
                      {selectedLanguage.fleet.trucks.truck2.description}
                    </p>
                  </div>
                  <div className="image">
                    <Img
                      fluid={data.truck3.childImageSharp.fluid}
                      style={imageStyles}
                    />
                  </div>
                  <div className="info">
                    <h2>{selectedLanguage.fleet.trucks.truck3.name}</h2>
                    <p>{selectedLanguage.fleet.trucks.truck3.dimensions}</p>
                    <p>{selectedLanguage.fleet.trucks.truck3.capacity}</p>
                    <p>{selectedLanguage.fleet.trucks.truck3.loadCapacity}</p>
                    <p>{selectedLanguage.fleet.trucks.truck3.palletsNumber}</p>
                    <p style={{ fontStyle: "italic" }}>
                      {selectedLanguage.fleet.trucks.truck3.description}
                    </p>
                  </div>
                </div>
              )
            }}
          />
        </div>
      </ServicesWrapper>
      <Footer />
    </PagesLayout>
  )
}

export default ServicesPage
