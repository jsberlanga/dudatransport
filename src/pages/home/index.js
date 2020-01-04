import React from "react"

import SEO from "../../components/globals/SEO"

import Header from "../../components/globals/Header"
import Footer from "../../components/globals/Footer"
import HomeLayout from "../../components/globals/Layout"
import Hero from "../../components/Hero"
import Form from "../../components/Form"
import Map from "../../components/Map"
import Services from "../../components/Services"
import About from "../../components/About"
import homeImage from "../../images/home.jpg"

const IndexPage = () => (
  <HomeLayout url={homeImage}>
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
