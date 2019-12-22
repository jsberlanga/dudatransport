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
    color: ${props => (props.navcolor ? props.navcolor : "#f6f5f5")};
    cursor: pointer;
    position: relative;
    transition: all 0.3s;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2.5px;
      bottom: -0.5rem;
      left: 0;
      background-color: ${props =>
        props.navcolor ? props.navcolor : "#f6f5f5"};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s;
    }

    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }

    &:hover {
      transform: translateY(-2.5px) scale(1.05);
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
      margin: 0 1.5rem;
    }
  }
`

const NavbarLinks = ({ navcolor }) => {
  console.log(navcolor)
  return (
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
}

export default NavbarLinks
