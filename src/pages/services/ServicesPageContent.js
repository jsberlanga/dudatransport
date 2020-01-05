import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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

const imageStyles = {
  borderRadius: "0.1rem",
  boxShadow: "10px 10px 10px -10px darkgrey",
}

const languageVariants = {
  ENGLISH: {
    services: {
      title: "OUR SERVICES",
      subtitle: "We handle your delivery with professionalism.",
      cards: {
        card1: {
          title: "GROUND TRANSPORT",
          description:
            "Price and quality of services is key for us. Selecting Duda Transport you choose the highest quality at the best rate.",
        },
        card2: {
          title: "TRUCKING SERVICE",
          description:
            "Modern vehicle fleet, adjusted to the carriage of small and big shipments. All our vans are equipped with GPS navigation so as to track their current position.",
        },
        card3: {
          title: "CARGO",
          description:
            "By using our own fleet, as well as cooperation with several reliable partners, we provide express transport throughout all Europe.",
        },
        card4: {
          title: "DOCUMENTS",
          description:
            "We have all the necessary permits, licenses and certificates confirming our competence and attention to areas such as quality management.",
        },
      },
    },
    fleet: {
      title: "OUR FLEET",
      subtitle: "These are the vehices we drive:",
      trucks: {
        truck1: {
          name: "RENAULT MASTER",
          description:
            "The Renault Master is the best of commercial vehicles. For our needs, it is practical, tough and versatile. It is efficient with space, boasting load volumes of up to 26m3 and payloads of up to 1,400kg.",
          dimensions: "Dimensions: 4.85 x 2.2 x 2.48m ",
          capacity: "Capacity: 26m3",
          loadCapacity: "Load capacity: 1,4t",
          palletsNumber: "Number of euro pallets: 10",
        },
        truck2: {
          name: "FIAT DUCATO",
          description:
            "We have been trusting Fiat Ducato for years and we trust on their reliability. It's key features are it's 26m3 load compartment and it's 1.4t load capacity.",
          dimensions: "Dimensions: 4,9 x 2,2 x 2,48m ",
          capacity: "Capacity: 26m3",
          loadCapacity: "Load capacity: 1,4t",
          palletsNumber: "Number of euro pallets: 10",
        },
        truck3: {
          name: "RENAULT MASTER",
          description:
            "The Renault Master is the best of commercial vehicles. For our needs, it is practical, tough and versatile. It is efficient with space, boasting load volumes of up to 21m3 and payloads of up to 1,400kg.",
          dimensions: "Dimensions: 4.2 x 2.2 x 2.28m ",
          capacity: "Capacity: 21m3",
          loadCapacity: "Load capacity: 1,4t",
          palletsNumber: "Number of euro pallets: 8",
        },
      },
    },
  },
  POLISH: {
    services: {
      title: "NASZE USLUGI",
      subtitle: "We handle your delivery with professionalism.",
      cards: {
        card1: {
          title: "GROUND TRANSPORT",
          description:
            "Price and quality of services is key for us. Selecting Duda Transport you choose the highest quality at the best rate.",
        },
        card2: {
          title: "TRUCKING SERVICE",
          description:
            "Modern vehicle fleet, adjusted to the carriage of small and big shipments. All our vans are equipped with GPS navigation so as to track their current position.",
        },
        card3: {
          title: "CARGO",
          description:
            "By using our own fleet, as well as cooperation with several reliable partners, we provide express transport throughout all Europe.",
        },
        card4: {
          title: "DOCUMENTS",
          description:
            "We have all the necessary permits, licenses and certificates confirming our competence and attention to areas such as quality management.",
        },
      },
    },
    fleet: {
      title: "NASZA FLOTA",
      subtitle: "These are the vehices we drive:",
      trucks: {
        truck1: {
          name: "RENAULT MASTER",
          description:
            "The Renault Master is the best of commercial vehicles. For our needs, it is practical, tough and versatile. It is efficient with space, boasting load volumes of up to 26m3 and payloads of up to 1,400kg.",
          dimensions: "Dimensions: 4.85 x 2.2 x 2.48m ",
          capacity: "Capacity: 26m3",
          loadCapacity: "Load capacity: 1,4t",
          palletsNumber: "Number of euro pallets: 10",
        },
        truck2: {
          name: "FIAT DUCATO",
          description:
            "We have been trusting Fiat Ducato for years and we trust on their reliability. It's key features are it's 26m3 load compartment and it's 1.4t load capacity.",
          dimensions: "Dimensions: 4,9 x 2,2 x 2,48m ",
          capacity: "Capacity: 26m3",
          loadCapacity: "Load capacity: 1,4t",
          palletsNumber: "Number of euro pallets: 10",
        },
        truck3: {
          name: "RENAULT MASTER",
          description:
            "The Renault Master is the best of commercial vehicles. For our needs, it is practical, tough and versatile. It is efficient with space, boasting load volumes of up to 21m3 and payloads of up to 1,400kg.",
          dimensions: "Dimensions: 4.2 x 2.2 x 2.28m ",
          capacity: "Capacity: 21m3",
          loadCapacity: "Load capacity: 1,4t",
          palletsNumber: "Number of euro pallets: 8",
        },
      },
    },
  },
}

const ServicesPageContent = ({ language }) => {
  const selectedLanguage =
    language === "ENGLISH" ? languageVariants.ENGLISH : languageVariants.POLISH

  return (
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
  )
}

export default ServicesPageContent
