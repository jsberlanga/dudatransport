import React, { useContext } from "react"
import styled from "styled-components"
import ENGLISH_FLAG from "./icons/EN.svg"
import POLISH_FLAG from "./icons/PL.svg"

import LanguageContext from "../../../context/LanguageContext"

const Toggle = styled.button`
  padding: 0.5rem;
  margin-top: 0.25rem;
  margin-left: auto;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 2.3rem;
    opacity: 0.8;
    filter: grayscale(0.25) drop-shadow(0.1px 0.1px 0.1px black);
  }

  @media (max-width: 1200px) and (min-width: 640px) {
    margin-right: 2rem;
  }

  @media (min-width: 640px) {
    margin-left: initial;
  }
`

const ToggleLanguage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext)

  return (
    <Toggle onClick={toggleLanguage}>
      <img
        src={language === "ENGLISH" ? POLISH_FLAG : ENGLISH_FLAG}
        alt="flag"
      />
    </Toggle>
  )
}

export default ToggleLanguage
