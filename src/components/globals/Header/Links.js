import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { styles } from "../../../utils"

const LinksWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;

  @media (max-width: 640px) {
    display: none;
  }

  li {
    color: ${props =>
      props.headerColor === "light"
        ? styles.colors.mainLight
        : styles.colors.blue};
    padding: 0 0.3rem;
    margin: 0 3rem;
    letter-spacing: 0px;
    transition: all 0.2s;
    cursor: pointer;
    transition: all 0.3s;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.175rem;
      bottom: -0.5rem;
      left: 0;
      background-color: ${props =>
        props.headerColor === "light"
          ? styles.colors.mainLight
          : styles.colors.blue};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s;
    }

    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }

    &:hover {
      transform: translateY(-2.5px) scale(1.1);
    }
  }
`

const LinksList = () => {
  return (
    <>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/services" activeClassName="active">
          Our Services
        </Link>
      </li>
      <li>
        <Link to="/contact" activeClassName="active">
          Find Us
        </Link>
      </li>
    </>
  )
}

const Links = ({ headerColor }) => {
  return (
    <LinksWrapper headerColor={headerColor}>
      <LinksList />
    </LinksWrapper>
  )
}

export { LinksList }
export default Links
