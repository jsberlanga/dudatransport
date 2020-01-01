import React from "react"

import SEO from "../components/seo"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Form from "../components/Form"
import Map from "../components/Map"
import Services from "../components/Services"
import About from "../components/About"
import Footer from "../components/Footer"
import HomeLayout from "../components/layout"
import homeImage from "../images/hero-modified.jpg"

const IndexPage = () => (
  <HomeLayout url={homeImage}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
