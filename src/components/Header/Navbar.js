import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarWrapper = styled.nav`
  display: flex;
  h5 {
    margin-left: 3rem;
    color: ${props => props.color};
    cursor: pointer;
  }
`

const Navbar = ({ color }) => {
  return (
    <NavbarWrapper color={color}>
      <Link to="/">
        <h5>Home</h5>
      </Link>
      <Link to="/about">
        <h5>About</h5>
      </Link>
      <Link to="/trucks">
        <h5>Our Services</h5>
      </Link>
      <Link to="/trucks">
        <h5>Find Us</h5>
      </Link>
    </NavbarWrapper>
  )
}

export default Navbar
