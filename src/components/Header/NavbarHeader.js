import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import logoLight from "../../images/logo.svg"
import logoDark from "../../images/logo2.svg"

import { styles } from "../../utils"

const LogoWrapper = styled.img`
  height: 4.9em;
  margin-top: 1.7rem;
  @media (max-width: 1200px) {
    margin-left: 2rem;
  }
  @media (max-width: 640px) {
    margin-left: 0;
    height: 5.9em;
  }
`

const NavbarHeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  color: ${styles.colors.blue};
  @media (max-width: 640px) {
    justify-content: center;
    height: 6.8em;
  }
`

const Logo = ({ logocolor }) => {
  if (logocolor === "light") {
    return (
      <Link to="/">
        <LogoWrapper src={logoLight} alt="logo" />
      </Link>
    )
  } else {
    return (
      <Link to="/">
        <LogoWrapper src={logoDark} alt="logo" />
      </Link>
    )
  }
}

const NavbarHeader = ({ logocolor }) => (
  <NavbarHeaderWrapper>
    <Logo logocolor={logocolor} />
  </NavbarHeaderWrapper>
)

export default NavbarHeader
