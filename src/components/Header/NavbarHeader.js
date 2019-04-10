import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { FaBars } from "react-icons/fa"

import logoLight from "../../images/logo.svg"
import logoDark from "../../images/logo2.svg"

import { styles } from "../../utils"

const LogoWrapper = styled.img`
  height: 4em;
  margin-top: 0.7rem;
`

const NavbarHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${styles.colors.brown};

  .toggle {
    cursor: pointer;
    font-size: 2em;
  }

  @media (min-width: 768px) {
    .toggle {
      display: none;
    }
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

const NavbarHeader = ({ handleNavbar, logocolor }) => (
  <NavbarHeaderWrapper>
    <Logo logocolor={logocolor} />
    <FaBars className="toggle" onClick={handleNavbar} />
  </NavbarHeaderWrapper>
)

export default NavbarHeader
