import React from "react"
import styled from "styled-components"

import logo from "../../images/logo.svg"

const LogoWrapper = styled.img`
  height: 4em;
`

const Logo = () => <LogoWrapper src={logo} alt="logo" />

export default Logo
