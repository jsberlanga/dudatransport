import React from "react"
import styled from "styled-components"

import Hero from "./Hero"

const HeroWrapper = styled.div`
  grid-area: hero;
  display: flex;
  @media (max-width: 1130px) {
    max-height: 38rem;
    min-height: 28rem;
  }
`

export default () => {
  return (
    <HeroWrapper>
      <Hero />
    </HeroWrapper>
  )
}
