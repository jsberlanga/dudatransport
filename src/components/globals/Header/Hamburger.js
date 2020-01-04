import React from "react"
import styled from "styled-components"
import { AiOutlineAlignRight } from "react-icons/ai"

const HamburgerWrapper = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2.2rem;
  margin: 0 1.5rem 0 1rem;

  @media (max-width: 640px) {
    display: flex;
  }
`

const Hamburger = ({ toggleMenu }) => (
  <HamburgerWrapper onClick={toggleMenu}>
    <AiOutlineAlignRight />
  </HamburgerWrapper>
)

export default Hamburger
