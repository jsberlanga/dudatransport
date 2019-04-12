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
  margin: -5em 0 0;

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
    margin-top: 9em;
    img {
      width: 2em;
      margin-right: 1em;
    }
    .title,
    .map {
      position: relative;
    }
    .title > h1 {
      margin-bottom: 0.7em;
      letter-spacing: 0.25em;
      font-family: "montserrat-800";
    }
    .details > p {
      padding-bottom: 1em;
      /* font-weight: 700; */
      letter-spacing: 0.1em;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .map {
      height: 25em;
      left: 10%;
    }
  }

  @media (max-width: 1130px) {
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
  }
`

const ContactPage = () => (
  <PagesLayout
    background={styles.colors.lightGray}
    color={styles.colors.darkGray}
  >
    <SEO title="Find Us" keywords={[`gatsby`, `application`, `react`]} />

    <Header navcolor={styles.colors.blue} logocolor="dark" />
    <ContactWrapper style={{ gridArea: "main" }}>
      <div className="form">
        <Form
          title="Leave us your info"
          subtitle="and we will get back to you."
        />
      </div>
      <div className="info">
        <div className="title">
          <h1>OUR LOCATION</h1>
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
