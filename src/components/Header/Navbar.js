import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarWrapper = styled.nav`
  display: flex;
  h5 {
    margin-left: 3rem;
    color: ${props => props.navcolor};
    cursor: pointer;
  }
`

const Navbar = ({ navcolor }) => {
  return (
    <NavbarWrapper navcolor={navcolor}>
      <Link to="/">
        <h5>Home</h5>
      </Link>
      <Link to="/about">
        <h5>About</h5>
      </Link>
      <Link to="/services">
        <h5>Our Services</h5>
      </Link>
      <Link to="/contact">
        <h5>Find Us</h5>
      </Link>
    </NavbarWrapper>
  )
}

export default Navbar
