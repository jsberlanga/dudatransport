import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import { PagesLayout } from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

import Form from "../components/Form"

import { styles } from "../utils"

import envelope from "../images/icons/envelope.svg"
import phone from "../images/icons/phone.svg"
import home from "../images/icons/home.svg"

import GoogleMaps from "../components/GoogleMaps"

const ContactWrapper = styled.div`
  margin: auto auto;
  text-align: center;
  width: 100%;

  display: grid;
  grid-template:
    ". info ." auto
    ". form ." auto /
    1fr 10fr 1fr;

  .form {
    grid-area: form;
    form {
      width: 60%;
    }
  }
  .info {
    grid-area: info;
    img {
      width: 2em;
      margin-right: 0.7em;
    }
    .title,
    .map {
      position: relative;
    }
    .title {
      padding: 5rem 2rem;
      margin: 0 auto;
    }
    .title > h1 {
      letter-spacing: 0.25em;
      font-family: "montserrat-800";
      /* background-image: linear-gradient(0deg, red 50%, transparent 50%); */
      display: inline;
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
    .map {
      height: 25em;
      left: 10%;
    }
  }

  @media (max-width: 1200px) {
    .form {
      form {
        width: 70%;
      }
    }
  }

  @media (max-width: 768px) {
    grid-template:
      "info" auto
      "form" auto /
      1fr;

    .form {
      display: flex;
      justify-content: center;
      form {
        width: 90%;
      }
    }
    .info .details > p {
      text-align: left;
      margin-left: 2rem;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
`

const ContactPage = () => (
  <PagesLayout
    background={styles.colors.lightGray}
    color={styles.colors.darkGray}
  >
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />

    <Header headerColor="dark" />
    <ContactWrapper style={{ gridArea: "main" }}>
      <div className="info">
        <div className="title">
          <h1>OUR LOCATION</h1>
          <p>Please use the information below to contact us</p>
        </div>
        <div className="details">
          <p>
            <img src={home} alt="home" />
            Milocice 136, Slomniki, 32-090, Poland
          </p>
          <p>
            <img src={envelope} alt="email" />
            dudatransport5@gmail.com
          </p>
          <p>
            <img src={phone} alt="phone" />
            +48 884 141 049 / +48 510 706 712 (Internation Line)
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
    </ContactWrapper>
    <Footer />
  </PagesLayout>
)

export default ContactPage
