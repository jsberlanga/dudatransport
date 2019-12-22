import React from "react"
import styled, { createGlobalStyle, keyframes } from "styled-components"

import { styles } from "../utils"

import MyFont from "../static/fonts/montserrat-800.woff"

import MainImage from "./image"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'montserrat-800';
    src: url('${MyFont}') format('woff');
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    font-style: normal;
    line-height: 1.7;
    font-size: 1.2rem;
    font-family: 'Lora', serif;
    background: ${props => props.background} linear-gradient(
    180deg,
    rgba(245, 245, 245, 1) 0%,
    rgba(225, 225, 225, 1) 100%
  );
    background-color: ${styles.colors.mainLight};
    color: ${props => props.color};
  }

  html, body {
    @media(max-width:768px) {
      font-size: 95%;
      overflow-x: hidden;       
      position: relative   
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: 1px;
    
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

  .text_small {font-size: 0.889em;}

  .text_super_small {font-size: 0.723em;}

  .hero {
    font-family: 'montserrat-800'
  }

  p {
    font-size: 1em;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${styles.colors.mainLight};
  }
  input, button, textarea {
    font-family: 'Lora', serif;
  }
  button {
    background-color: #38598b;
    color: ${styles.colors.mainLight};
  }
  li {
    list-style: none
  }
`

const opacity = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

const Container = styled.div`
  display: grid;
  grid-template:
    ". header header ." auto
    "hero hero form form" 90vh
    ". map map ." auto
    ". services services ." auto
    "about about about about" auto
    "footer footer footer footer" minmax(7em, auto)
    / 1fr minmax(20em, 5fr) minmax(20em, 3fr) 1fr;
  animation: ${opacity} 1.5s ease-out;
  grid-row-gap: 1rem;

  @media (max-width: 1200px) {
    background-size: 150%;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template:
      "header header header" auto
      "hero hero hero" auto
      "map map map" auto
      "services services services" auto
      "about about about" minmax(130vh, 1fr)
      ". form ." auto
      "footer footer footer" auto;
    height: 100vh;
    text-align: center;
  }
  .main-image {
    width: 100%;
    position: absolute;
    z-index: -999;
    @media (max-width: 768px) {
      width: 1000px;
      margin-left: -3rem;
    }
  }
`

const PagesContainer = styled.div`
  display: grid;
  grid-template:
    ". header header ." auto
    "main main main main" minmax(35em, 1fr)
    "footer footer footer footer" auto
    / 1fr minmax(20em, 5fr) minmax(20em, 3fr) 1fr;
  animation: ${opacity} 1.5s ease-out;

  @media (max-width: 1130px) {
    background-size: 150%;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template:
      "header header header" auto
      "main main main" auto
      "footer footer footer" auto;
  }

  min-height: 150vh;
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

    <Container url={url}>
      <div className="main-image">
        <MainImage />
      </div>
      {children}
    </Container>
  </>
)

export { HomeLayout as default, PagesLayout }
