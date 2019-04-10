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
`

const Hero = () => (
  <HeroWrapper>
    <h1>We Do Express Transport</h1>
    <p>Guaranteed by more than 10 years of experience and customer delight.</p>
    <Button style={{ borderRadius: "5em", marginTop: "1em" }}>
      <Link to="/services">Learn more</Link>
    </Button>
  </HeroWrapper>
)

export default Hero
