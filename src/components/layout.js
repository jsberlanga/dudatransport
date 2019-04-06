import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./Header"
import Hero from "./Hero"
import Form from "./Form"
import Services from "./Services"
import About from "./About"
import Map from "./Map"
import Footer from "./Footer"

import { styles } from "../utils"

import img from "../images/hero-modified.jpg"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
    font-size: 1.2rem;
    font-family: 'Lora', serif;
    background: ${styles.colors.mainLight};
    color: ${styles.colors.darkGray};
  }
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    line-height: 1.15;
    font-family: 'Domine', serif;
    letter-spacing: 1.4px
  }

  h1 {
    font-size: 2.488em;
  }

  h2 {
    font-size: 2.074em;
  }

  h3 {
    font-size: 1.728em;
  }

  h4 {
    font-size: 1.44em;
  }

  h5 {
    font-size: 1.2em;
  }

  a {
    all: unset;
    cursor: pointer;
  }
  input, button, textarea {
    font-family: 'Lora', serif;
  }
  button {
    background-color: #38598b;
    color: white;
  }
`

const Container = styled.div`
  display: grid;
  grid-template:
    ". header header ." 5em
    "hero hero form form" 90vh
    ". map map ." auto
    ". services services ." 60vh
    ". about about ." auto
    "footer footer footer footer" 10em
    / 1fr minmax(20em, 5fr) minmax(20em, 3fr) 1fr;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    grid-template:
      "header" 5em
      "hero" 50vh
      "form" 60vh
      "services" 60vh
      "about" auto
      "map" auto
      "footer" 10em / 1fr;
  }
`

const Layout = () => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      <Hero />
      <Form />
      <Map />
      <Services />
      <About />
      <Footer />
    </Container>
  </>
)

export default Layout
