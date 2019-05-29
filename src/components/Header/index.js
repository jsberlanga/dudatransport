import React from "react"
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"

import { styles } from "../../utils"

const HeaderWrapper = styled.div`
  grid-area: header;
  @media (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  color: ${styles.colors.mainLight};
  z-index: 999;
`

class Header extends React.Component {
  render() {
    const { navcolor, logocolor } = this.props
    return (
      <HeaderWrapper>
        <NavbarHeader logocolor={logocolor} />
        <NavbarLinks navcolor={navcolor} />
      </HeaderWrapper>
    )
  }
}

export default Header
