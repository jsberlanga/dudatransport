import React, { useState } from "react"

const ENGLISH = "ENGLISH"
const POLISH = "POLISH"

const defaultState = {
  language: ENGLISH,
  toggleLanguage: () => {},
}

const LanguageContext = React.createContext(defaultState)

const LanguageProvider = props => {
  const [language, setLanguage] = useState(ENGLISH)

  const toggleLanguage = () => {
    setLanguage(language === ENGLISH ? POLISH : ENGLISH)
  }

  const { children } = props

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
export { LanguageProvider }
