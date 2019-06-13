import React from "react"
import styled from "styled-components"

import { PagesLayout } from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/seo"

import { styles } from "../utils"

const Wrapper = styled.div`
  margin: auto auto;
  text-align: center;
`

const NotFoundPage = () => (
  <PagesLayout
    background={styles.colors.lightGray}
    color={styles.colors.darkGray}
  >
    <SEO title="404: Not found" />
    <Header navcolor={styles.colors.blue} logocolor="dark" />
    <Wrapper style={{ gridArea: "main" }}>
      <h1>Sorry, not found</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Wrapper>
    <Footer />
  </PagesLayout>
)

export default NotFoundPage
