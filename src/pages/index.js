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
    <Header logocolor="light" />
    <Hero />
    <Form />
    <Map />
    <Services />
    <About />
    <Footer />
  </HomeLayout>
)

export default IndexPage
