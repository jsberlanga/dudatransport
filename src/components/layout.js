import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import { styles } from "../utils"

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
    background: ${props => props.background};
    color: ${props => props.color};
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

  p {
    font-size: 1em;
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
    color: ${styles.colors.mainLight};
  }
`

const Container = styled.div`
  display: grid;
  grid-template:
    ". header header ." 5em
    "hero hero form form" 90vh
    ". map map ." auto
    ". services services ." 60vh
    "about about about about" 105vh
    "footer footer footer footer" 7em
    / 1fr minmax(20em, 5fr) minmax(20em, 3fr) 1fr;
  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 1130px) {
    background-size: 150%;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template:
      ". header ." 5em
      "hero hero hero" auto
      "map map map" auto
      "services services services" auto
      "about about about" auto
      ". form ." auto
      "footer footer footer" auto;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
  }

  @media (max-width: 768px) {
  }
`

const PagesContainer = styled.div`
  display: grid;
  grid-template:
    ". header header ." 5em
    "main main main main" minmax(22.6em, 1fr)
    "footer footer footer footer" 10em
    / 1fr minmax(20em, 5fr) minmax(20em, 3fr) 1fr;
  background-image: url(${props => props.url});
  background-size: 100% auto;
  background-repeat: no-repeat;
`

const PagesLayout = ({ children, url, background, color }) => (
  <>
    <GlobalStyle background={background} color={color} />
    <PagesContainer url={url}>{children}</PagesContainer>
  </>
)

const HomeLayout = ({ children, url }) => (
  <>
    <GlobalStyle />
    <Container url={url}>{children}</Container>
  </>
)

export { HomeLayout as default, PagesLayout }
