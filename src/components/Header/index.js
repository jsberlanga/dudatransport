import React from "react"
import styled from "styled-components"

import Logo from "./Logo"
import Navbar from "./Navbar"

import { styles } from "../../utils"

const HeaderWrapper = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${styles.colors.mainLight};
`

export default ({ color }) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navbar color={color} />
    </HeaderWrapper>
  )
}
