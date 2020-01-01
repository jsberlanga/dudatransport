import React, { useContext } from "react"
import styled from "styled-components"
import ENGLISH_FLAG from "./icons/EN.png"
import POLISH_FLAG from "./icons/PL.png"

import LanguageContext from "../../context/LanguageContext"

const Toggle = styled.button`
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 2.2rem;
  }
`

const ToggleLanguage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext)

  return (
    <Toggle onClick={toggleLanguage}>
      <img src={language === "EN" ? POLISH_FLAG : ENGLISH_FLAG} alt="flag" />
    </Toggle>
  )
}

export default ToggleLanguage
