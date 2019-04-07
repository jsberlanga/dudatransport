import React from "react"
import styled from "styled-components"

import logoLight from "../../images/logo.svg"
import logoDark from "../../images/logo2.svg"

const LogoWrapper = styled.img`
  height: 4em;
`

const Logo = ({ logocolor }) => {
  if (logocolor === "light") {
    return <LogoWrapper src={logoLight} alt="logo" />
  } else {
    return <LogoWrapper src={logoDark} alt="logo" />
  }
}

export default Logo
