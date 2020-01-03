import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles, hoverEffect } from "../../utils/"

const HeroWrapper = styled.div`
  min-height: 50vh;
  color: ${styles.colors.mainLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 22.5vh 1rem 12.5vh;
  width: 100%;
  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.4rem;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 2.8rem;
      margin-bottom: 1.75rem;
    }
    p {
      font-size: 1.1rem;
      margin-bottom: 1.75rem;
    }
  }

  a {
    background: ${styles.colors.blue};
    color: ${styles.colors.mainLight};
    position: relative;
    letter-spacing: 1px;
    font-size: 1.2rem;
    min-height: 4rem;
    padding: 1.2rem 3.2rem;
    z-index: 2;
    margin-top: 0.7rem;

    ${hoverEffect()};
  }
`

const Hero = () => (
  <HeroWrapper>
    <h1 className="hero">We Deliver On Time</h1>
    <p style={{ fontStyle: "italic" }}>
      Guaranteed by years of experience and customer delight.
    </p>
    <Link to="/services">Check our Services</Link>
  </HeroWrapper>
)

export default Hero
