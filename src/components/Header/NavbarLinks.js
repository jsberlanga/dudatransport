import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarWrapper = styled.ul`
  list-style-type: none;
  height: ${props => (props.isOpen ? "10rem" : "0")};
  overflow: hidden;
  border-radius: 0.4rem;
  font-family: "Poppins";
  .nav-link {
    display: flex;
    justify-content: center;
    padding: 1rem;
    width: 70vw;
  }
  h5 {
    transition: all 0.2s;
    font-size: 1.3rem;
    margin: 0 1.4rem;
    color: ${props => props.navcolor};
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      font-weight: 700;
    }
  }

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    flex-direction: row;
    .nav-link {
      background-color: transparent;
      width: auto;
    }
  }
`

const NavbarLinks = ({ isOpen, navcolor }) => (
  <NavbarWrapper isOpen={isOpen} navcolor={navcolor}>
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
