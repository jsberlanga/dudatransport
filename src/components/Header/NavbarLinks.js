import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  .nav-link {
    display: flex;
    padding: 1rem;
  }
  h5 {
    font-size: 1.1rem;
    letter-spacing: 0px;
    transition: all 0.2s;
    color: ${props => props.navcolor};
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      border-bottom: 1.4px solid ${props => props.navcolor};
      font-weight: 700;
    }
  }

  @media (min-width: 640px) {
    height: auto;
    display: flex;
    flex-direction: row;

    .nav-link {
      padding: 1rem 1.5rem;
      background-color: transparent;
      width: auto;
    }
    h5 {
      font-size: 1.35rem;
      margin: 0 1rem;
    }
  }
`

const NavbarLinks = ({ navcolor }) => (
  <NavbarWrapper navcolor={navcolor}>
    <li>
      <Link to="/" className="nav-link">
        <h5>Home</h5>
      </Link>
    </li>
    <li>
      <Link to="/services" className="nav-link">
        <h5>Our Services</h5>
      </Link>
    </li>
    <li>
      <Link to="/contact" className="nav-link">
        <h5>Find Us</h5>
      </Link>
    </li>
  </NavbarWrapper>
)

export default NavbarLinks
