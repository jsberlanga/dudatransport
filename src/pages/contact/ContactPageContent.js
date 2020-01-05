import React from "react"

import GoogleMaps from "../../components/GoogleMaps"
import envelope from "../../images/icons/envelope.svg"
import phone from "../../images/icons/phone.svg"
import home from "../../images/icons/home.svg"

const languageVariants = {
  ENGLISH: {
    title: "OUR LOCATION",
    subtitle: "Please use the information below to contact us",
    details: {
      address: "Milocice 136, Slomniki, 32-090, Poland",
      email: "dudatransport5@gmail.com",
      phone: "+48 884 141 049 / +48 510 706 712 (Internation Line)",
    },
  },
  POLISH: {
    title: "NASZA LOKALIZACJA",
    subtitle: "Please use the information below to contact us",
    details: {
      address: "Milocice 136, Slomniki, 32-090, Poland",
      email: "dudatransport5@gmail.com",
      phone: "+48 884 141 049 / +48 510 706 712 (Internation Line)",
    },
  },
}

const ContactPageContent = ({ language }) => {
  const selectedLanguage =
    language === "ENGLISH" ? languageVariants.ENGLISH : languageVariants.POLISH

  return (
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
  )
}

export default ContactPageContent
