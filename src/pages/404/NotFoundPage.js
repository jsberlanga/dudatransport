import React, { useContext } from "react"
import languageContext from "../../context/LanguageContext"

import { PagesLayout } from "../../components/globals/Layout"
import SEO from "../../components/globals/SEO"
import Header from "../../components/globals/Header"
import Footer from "../../components/globals/Footer"

const NotFoundPage = ({
  languageVariants: { ENGLISH, POLISH },
  globalStyles,
  componentStyles: { NotFoundWrapper },
}) => {
  const { language } = useContext(languageContext)

  const selectedLanguage = language === "ENGLISH" ? ENGLISH : POLISH

  return (
    <PagesLayout
      background={globalStyles.colors.lightGray}
      color={globalStyles.colors.darkGray}
    >
      <SEO title="404: Not found" />
      <Header headerColor="dark" />
      <NotFoundWrapper>
        <h1>{selectedLanguage.title}</h1>
        <p>{selectedLanguage.body}</p>
      </NotFoundWrapper>
      <Footer />
    </PagesLayout>
  )
}

export default NotFoundPage
