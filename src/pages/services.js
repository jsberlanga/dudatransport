import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import { PagesLayout } from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

import { styles } from "../utils"

const ServicesWrapper = styled.div`
  margin: auto auto;
  text-align: center;
  * {
    margin-bottom: 1.4em;
  }
`

const ServicesPage = () => (
  <PagesLayout
    background={styles.colors.mainLight}
    color={styles.colors.darkGray}
  >
    <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
    <Header navcolor={styles.colors.blue} logocolor="dark" />
    <ServicesWrapper style={{ gridArea: "main" }}>
      <h1>Services</h1>
      <h2>Services</h2>
      <h3>Services</h3>
      <h4>Services</h4>
      <h5>Services</h5>
    </ServicesWrapper>
    <Footer />
  </PagesLayout>
)

export default ServicesPage
