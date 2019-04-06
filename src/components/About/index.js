import React from "react"
import styled from "styled-components"

import Image from "../image.js"

const AboutWrapper = styled.div`
  grid-area: about;
`

const About = () => {
  return (
    <AboutWrapper>
      <h1>This is the About section</h1>
      <Image />
    </AboutWrapper>
  )
}

export default About
