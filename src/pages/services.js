import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

import { PagesLayout } from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { styles } from "../utils"

import { FaTruck, FaExchangeAlt, FaCube, FaFileSignature } from "react-icons/fa"

const GET_IMAGES = graphql`
  {
    fleet1: file(relativePath: { eq: "trucks/fleet1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fleet2: file(relativePath: { eq: "trucks/fleet2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fleet3: file(relativePath: { eq: "trucks/fleet3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1280) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const ServicesWrapper = styled.div`
  width: 80%;
  text-align: center;
  margin: 0 auto 5rem;

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
      border: 2px solid ${styles.colors.lightGray};

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 10rem 1fr;
      }
    }
  }

  .card-image-container {
    background: ${styles.colors.lightGray};
    position: relative;
    clip-path: polygon(0 0, 80% 0, 100% 100%, 0 100%);
    color: ${styles.colors.blue};
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
      background: ${styles.colors.blue};
      color: ${styles.colors.mainLight};
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
    color: ${styles.colors.gray};
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

const imageStyles = {
  borderRadius: "0.1rem",
  boxShadow: "10px 10px 10px -10px darkgrey",
}

const ServicesPage = () => (
  <PagesLayout
    background={styles.colors.mainLight}
    color={styles.colors.darkGray}
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
    <ServicesWrapper style={{ gridArea: "main" }}>
      <div className="info">
        <div className="title">
          <h1>OUR SERVICES</h1>
          <p>We handle your delivery with professionalism</p>
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
                <h3 className="card-title">GROUND TRANSPORT</h3>
                <p className="card-description">
                  Price and quality of services is key for us. Selecting Duda
                  Transport you choose the highest quality at the best rate.
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
                <h3 className="card-title">TRUCKING SERVICE</h3>
                <p className="card-description">
                  Modern vehicle fleet, adjusted to the carriage of small and
                  big shipments. All our vans are equipped with GPS navigation
                  so as to track their current position..
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
                <h3 className="card-title">CARGO</h3>
                <p className="card-description">
                  By using our own fleet, as well as cooperation with several
                  reliable partners, we provide express transport throughout all
                  Europe.
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
                <h3 className="card-title">DOCUMENTS</h3>
                <p className="card-description">
                  We have all the necessary permits, licenses and certificates
                  confirming our competence and attention to areas such as
                  quality management.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <h1>OUR FLEET</h1>
          <p>These are the vehices we drive</p>
        </div>
        <StaticQuery
          query={GET_IMAGES}
          render={data => {
            return (
              <div className="images">
                <div className="image">
                  <Img
                    fluid={data.fleet1.childImageSharp.fluid}
                    style={imageStyles}
                  />
                </div>
                <div className="info">
                  <h2>RENAULT MASTER</h2>
                  <p>Dimensions: 4.85 x 2.2 x 2.48m </p>
                  <p>Capacity: 26m3</p>
                  <p>Load capacity: 1,4t</p>
                  <p>Number of euro pallets: 10</p>
                  <p style={{ fontStyle: "italic" }}>
                    The Renault Master is the best of commercial vehicles. For
                    our needs, it is practical, tough and versatile. It is
                    efficient with space, boasting load volumes of up to 26m3
                    and payloads of up to 1,400kg.
                  </p>
                </div>
                <div className="image">
                  <Img
                    fluid={data.fleet2.childImageSharp.fluid}
                    style={imageStyles}
                  />
                </div>
                <div className="info">
                  <h2>FIAT DUCATO</h2>
                  <p>Dimensions: 4,9 x 2,2 x 2,48m </p>
                  <p>Capacity: 26m3</p>
                  <p>Load capacity: 1,4t</p>
                  <p>Number of euro pallets: 10</p>
                  <p style={{ fontStyle: "italic" }}>
                    We have been trusting Fiat Ducato for years and we trust on
                    their reliability. It's key features are it's 26m3 load
                    compartment and it's 1.4t load capacity.
                  </p>
                </div>
                <div className="image">
                  <Img
                    fluid={data.fleet3.childImageSharp.fluid}
                    style={imageStyles}
                  />
                </div>
                <div className="info">
                  <h2>RENAULT MASTER</h2>
                  <p>Dimensions: 4.2 x 2.2 x 2.28m </p>
                  <p>Capacity: 21m3</p>
                  <p>Load capacity: 1,4t</p>
                  <p>Number of euro pallets: 8</p>
                  <p style={{ fontStyle: "italic" }}>
                    The Renault Master is the best of commercial vehicles. For
                    our needs, it is practical, tough and versatile. It is
                    efficient with space, boasting load volumes of up to 21m3
                    and payloads of up to 1,400kg.
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

export default ServicesPage
