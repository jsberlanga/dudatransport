import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import { PagesLayout } from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { styles } from "../utils"

const ContactWrapper = styled.div`
  margin: auto auto;
  text-align: center;
  * {
    margin-bottom: 1.4em;
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
      <h1>Find Us!</h1>
      <h2>Find Us!</h2>
      <h3>Find Us!</h3>
      <h4>Find Us!</h4>
      <h5>Find Us!</h5>
    </ContactWrapper>
    <Footer />
  </PagesLayout>
)

export default ContactPage
