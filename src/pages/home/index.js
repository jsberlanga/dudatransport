import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import HomeLayout from "../../components/globals/Layout"
import SEO from "../../components/globals/SEO"
import Header from "../../components/globals/Header"
import Footer from "../../components/globals/Footer"
import Hero from "../../components/Hero"
import Form from "../../components/Form"
import Map from "../../components/Map"
import Services from "../../components/Services"
import About from "../../components/About"

const HomeImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "home.jpg" }) {
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

const IndexPage = () => (
  <HomeLayout>
    <SEO
      title="Home"
      keywords={[
        `andrzej duda`,
        `duda transport`,
        `transport & logistics`,
        `express transport`,
        `Miłocice 136, 32-090 Słomniki`,
      ]}
    />
    <Header headerColor="light" />
    <div className="main-image">
      <HomeImage />
    </div>
    <Hero />
    <Form
      title="Enquire Now"
      subtitle="We will get back to you within 24 hours."
    />
    <Map />
    <Services />
    <About />
    <Footer />
  </HomeLayout>
)

export default IndexPage
