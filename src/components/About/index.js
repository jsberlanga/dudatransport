import React from "react"
import styled from "styled-components"

const AboutWrapper = styled.div`
  grid-area: about;
`

const About = () => {
  return (
    <AboutWrapper>
      <h1>This is the About section</h1>
    </AboutWrapper>
  )
}

export default About
