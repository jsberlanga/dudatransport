import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { PagesLayout } from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import thanksImage from "../images/pages/delivered.jpg"

import { styles } from "../utils"

const Image = styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
  filter: opacity(80%);
  @media (max-width: 768px) {
    width: 768px;
  }
`

const ThanksImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "delivered.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.image.childImageSharp.fluid} />}
  />
)

const ThanksWrapper = styled.div`
  color: ${styles.colors.mainLight};
  margin: 4rem auto;
  text-align: center;

  * {
    margin-bottom: 1.4em;
  }
`
const ThanksPage = () => (
  <PagesLayout url={thanksImage}>
    <SEO title="Thank You" keywords={[`gatsby`, `application`, `react`]} />
    <Header headerColor="light" />
    <Image>
      <ThanksImage />
    </Image>
    <ThanksWrapper style={{ gridArea: "main" }}>
      <h1>Thanks!</h1>
      <p>We'll get back to you as soon as possible!</p>
      <p>
        Go back to<span> </span>
        <Link
          style={{
            fontWeight: 700,
            color: `${styles.colors.blue}`,
            background: `${styles.colors.mainLight}`,
            padding: "0.7rem",
            borderRadius: "5rem",
          }}
          to="/"
        >
          our home page
        </Link>
      </p>
    </ThanksWrapper>
    <Footer />
  </PagesLayout>
)

export default ThanksPage
