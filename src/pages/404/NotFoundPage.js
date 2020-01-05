import React, { useContext } from "react"
import styled from "styled-components"
import languageContext from "../../context/LanguageContext"

import { PagesLayout } from "../../components/globals/Layout"
import SEO from "../../components/globals/SEO"
import Header from "../../components/globals/Header"
import Footer from "../../components/globals/Footer"
import NotFoundPageContent from "./NotFoundPageContent"
import { styles as globalStyles } from "../../utils"

const NotFoundWrapper = styled.div`
  grid-area: main;
  margin: auto;
  text-align: center;
`

const NotFoundPage = () => {
  const { language } = useContext(languageContext)

  return (
    <PagesLayout
      background={globalStyles.colors.lightGray}
      color={globalStyles.colors.darkGray}
    >
      <SEO title="404: Not found" />
      <Header headerColor="dark" />
      <NotFoundWrapper>
        <NotFoundPageContent language={language} />
      </NotFoundWrapper>
      <Footer />
    </PagesLayout>
  )
}

export default NotFoundPage
