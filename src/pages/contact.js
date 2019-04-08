import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import { PagesLayout } from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

import Form from "../components/Form"

import { styles } from "../utils"

import hello from "../images/hello2.jpg"

import envelope from "../images/icons/envelope.svg"
import phone from "../images/icons/phone.svg"
import home from "../images/icons/home.svg"

import GoogleMaps from "../components/GoogleMaps"

const ContactWrapper = styled.div`
  margin: auto auto;
  text-align: center;

  background-image: url(${hello});
  background-size: 100% auto;
  background-repeat: no-repeat;
  width: 100%;
  margin: -5em auto;
  z-index: -100;

  display: grid;
  grid-template:
    "form info" auto /
    2fr 3fr;

  .form {
    grid-area: form;
    background: rgba(60, 65, 94, 0.87);
    padding: 6em 3em 3em;
  }
  .info {
    grid-area: info;
    background: rgba(60, 65, 94, 0.8);
    padding: 9em 5em 5em;
    img {
      width: 2em;
      margin-right: 1em;
    }
    .title,
    .map {
      padding-bottom: 1.4em;
      position: relative;
    }
    .details > p {
      padding-bottom: 1em;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .map {
      height: 17.8em;
    }
  }

  @media (max-width: 1200px) {
    grid-template:
      "info" auto
      "form" auto /
      1fr;
    .info {
      padding: 8em 4em 1em;
    }
    .form,
    .map {
      padding: 0;
    }
    .info > .map {
      height: 26.7em;
    }
  }
`

const ContactPage = () => (
  <PagesLayout
    background={styles.colors.darkGray}
    color={styles.colors.mainLight}
  >
    <SEO title="Find Us" keywords={[`gatsby`, `application`, `react`]} />
    <Header navcolor={styles.colors.mainLight} logocolor="light" />

    <ContactWrapper style={{ gridArea: "main" }}>
      <div className="form">
        <Form
          title="Leave us your info"
          subtitle="and we will get back to you."
        />
      </div>
      <div className="info">
        <div className="title">
          <h2>Location</h2>
        </div>
        <div className="details">
          <p>
            <img src={home} alt="home" />
            Milocice 136, Slomniki, Poland, 32-090
          </p>
          <p>
            <img src={envelope} alt="email" />
            dudatransport@gmail.com
          </p>
          <p>
            <img src={phone} alt="phone" />
            +48 123 456 789
          </p>
        </div>
        <div className="map">
          <GoogleMaps />
        </div>
      </div>
    </ContactWrapper>
    <Footer />
  </PagesLayout>
)

export default ContactPage
