import React, { useContext } from "react"
import LanguageContext from "../../context/LanguageContext"

import { PagesLayout } from "../../components/globals/Layout"
import SEO from "../../components/globals/SEO"
import Header from "../../components/globals/Header"
import Footer from "../../components/globals/Footer"
import Form from "../../components/Form"
import GoogleMaps from "../../components/GoogleMaps"

import envelope from "../../images/icons/envelope.svg"
import phone from "../../images/icons/phone.svg"
import home from "../../images/icons/home.svg"

const ContactPage = ({
  languageVariants: { ENGLISH, POLISH },
  globalStyles,
  componentStyles: { MainWrapper },
}) => {
  const { language } = useContext(LanguageContext)

  const selectedLanguage = language === "ENGLISH" ? ENGLISH : POLISH

  return (
    <PagesLayout
      background={globalStyles.colors.lightGray}
      color={globalStyles.colors.darkGray}
    >
      <SEO
        title="Contact"
        keywords={[
          `andrzej duda`,
          `duda transport`,
          `transport & logistics`,
          `express transport`,
          `contact duda transport`,
          `Miłocice 136, 32-090 Słomniki`,
        ]}
      />

      <Header headerColor="dark" />
      <MainWrapper>
        <div className="info">
          <div className="title">
            <h1>{selectedLanguage.title}</h1>
            <p>{selectedLanguage.subtitle}</p>
          </div>
          <div className="details">
            <p>
              <img src={home} alt="home" />
              {selectedLanguage.details.address}}
            </p>
            <p>
              <img src={envelope} alt="email" />
              {selectedLanguage.details.email}}
            </p>
            <p>
              <img src={phone} alt="phone" />
              {selectedLanguage.details.phone}}
            </p>
          </div>
          <div className="map">
            <GoogleMaps />
          </div>
        </div>
        <div className="form">
          <Form
            title="Leave us your info"
            subtitle="and we will get back to you."
          />
        </div>
      </MainWrapper>
      <Footer />
    </PagesLayout>
  )
}

export default ContactPage
