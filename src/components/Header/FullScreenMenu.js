import React from "react"
import styled from "styled-components"
import { AiOutlineCloseSquare } from "react-icons/ai"

import { LinksList } from "./Links"

import { styles } from "../../utils"

const FullScreenMenuWrapper = styled.div`
  z-index: 999;
  color: ${styles.colors.mainLight};
  background-color: ${styles.colors.mainDark};
  position: fixed;
  height: 100vh;
  width: 100vw;
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    padding: 3rem;
  }

  .icon {
    position: absolute;
    font-size: 3rem;
    top: 1rem;
    right: 2rem;
  }

  .active {
    padding: 0.4rem;
    border-bottom: 2px solid white;
  }
`

const FullScreenMenu = ({ toggleMenu }) => {
  return (
    <FullScreenMenuWrapper>
      <AiOutlineCloseSquare onClick={toggleMenu} className="icon" />
      <LinksList />
    </FullScreenMenuWrapper>
  )
}

export default FullScreenMenu
