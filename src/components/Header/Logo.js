import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logoLight from "../../images/logo-light.svg"
import logoDark from "../../images/logo-dark.svg"

const LogoWrapper = styled.img`
  height: 3.9em;
  margin-top: 1rem;

  @media (max-width: 1200px) {
    margin-left: 1.5rem;
  }
`

const Logo = ({ headerColor }) => (
  <Link to="/">
    <LogoWrapper
      src={headerColor === "light" ? logoLight : logoDark}
      alt="logo"
    />
  </Link>
)

export default Logo
