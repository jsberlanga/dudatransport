import React from "react"
import styled from "styled-components"

import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"

import { styles } from "../../utils"

const HeaderWrapper = styled.div`
  grid-area: header;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  color: ${styles.colors.mainLight};
  z-index: 999;
`

class Header extends React.Component {
  state = {
    isOpen: false,
  }

  handleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { navcolor, logocolor } = this.props
    const { isOpen } = this.state
    return (
      <HeaderWrapper>
        <NavbarHeader logocolor={logocolor} handleNavbar={this.handleNavbar} />
        <NavbarLinks navcolor={navcolor} isOpen={isOpen} />
      </HeaderWrapper>
    )
  }
}

export default Header
