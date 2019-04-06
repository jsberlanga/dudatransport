import React from "react"
import styled from "styled-components"

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
    <h1>We Provide something</h1>
    <p>We Provide Services. Guaranteed by more than a hundred awards</p>
    <Button style={{ borderRadius: "5em", marginTop: "1em" }}>
      Learn more
    </Button>
  </HeroWrapper>
)

export default Hero
