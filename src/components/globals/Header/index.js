import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Logo from "./Logo"
import Links from "./Links"
import Hamburger from "./Hamburger"
import FullScreenMenu from "./FullScreenMenu"
import ToggleLanguage from "./ToggleLanguage"

import { styles } from "../../../utils"

const HeaderWrapper = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.35rem;
  color: ${props =>
    props.headerColor === "light"
      ? styles.colors.mainLight
      : styles.colors.blue};
`

const Header = ({ headerColor }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(isMenuOpen => !isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflowY = "hidden"
    } else {
      document.documentElement.style.overflowY = "auto"
    }
  }, [isMenuOpen])

  if (isMenuOpen) {
    return <FullScreenMenu toggleMenu={toggleMenu} />
  }
  return (
    <HeaderWrapper headerColor={headerColor}>
      <Logo headerColor={headerColor} />
      <Links headerColor={headerColor} />
      <ToggleLanguage />
      <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </HeaderWrapper>
  )
}

export default Header
