import React from "react"
import styled from "styled-components"

import Hero from "./Hero"

const HeroWrapper = styled.div`
  grid-area: hero;
  display: flex;
`

export default () => {
  return (
    <HeroWrapper>
      <Hero />
    </HeroWrapper>
  )
}
