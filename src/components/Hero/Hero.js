import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles, Button } from "../../utils/"

const HeroWrapper = styled.div`
  color: ${styles.colors.mainLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10em auto;
  h1 {
    font-size: 3.2rem;
    text-transform: uppercase;
  }
  p {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    padding: 0 1.4rem;
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`

const Hero = () => (
  <HeroWrapper>
    <h1 className="hero">We Deliver On Time</h1>
    <p style={{ fontStyle: "italic" }}>
      Guaranteed by years of experience and customer delight.
    </p>
    <Button style={{ marginTop: "0.7em", zIndex: 999 }}>
      <Link to="/services">Check our Services</Link>
    </Button>
  </HeroWrapper>
)

export default Hero
