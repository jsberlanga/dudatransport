import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import SEO from "../components/seo"
import { PagesLayout } from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

// import aboutImage from "../images/pages/about.jpg"

import { styles } from "../utils"

const AboutWrapper = styled.div`
  margin: auto auto;
  text-align: center;
  * {
    margin-bottom: 1.4em;
  }
`

const AboutPage = () => (
  <PagesLayout
    background={styles.colors.darkGray}
    color={styles.colors.mainLight}
  >
    <SEO title="About Us" keywords={[`gatsby`, `application`, `react`]} />
    <Header navcolor={styles.colors.mainLight} logocolor="light" />

    <AboutWrapper style={{ gridArea: "main" }}>
      <h1>More About Us</h1>
      <h2>More About Us</h2>
      <h3>More About Us</h3>
      <h4>More About Us</h4>
      <h5>More About Us</h5>
    </AboutWrapper>
    <Footer />
  </PagesLayout>
)

export default AboutPage
