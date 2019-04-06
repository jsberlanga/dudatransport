import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { PagesLayout } from "../components/layout"
import SEO from "../components/seo"

import delivered from "../images/delivered.jpg"

import { styles } from "../utils"

const ThanksWrapper = styled.div`
  grid-area: main;
  color: ${styles.colors.mainLight};
  text-align: center;
  div {
    margin: 5rem;
  }
`

export default ({ url }) => (
  <PagesLayout url={delivered}>
    <ThanksWrapper>
      <SEO title="Thank You" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        <h1>Thanks!</h1>
        <p>We'll get back to you as soon as possible!</p>
      </div>
      <Link to="/">Go back to our page</Link>
    </ThanksWrapper>
  </PagesLayout>
)
