import React from "react"
import styled from "styled-components"

import { styles } from "../../utils"

const date = new Date().getFullYear()

const FooterWrapper = styled.footer`
  grid-area: footer;
  bottom: 0;
  right: 0;
  background: ${styles.colors.lightGray};
  color: ${styles.colors.darkGray};
  text-align: right;
  padding: 4em;
`
const Footer = () => (
  <FooterWrapper>
    <div>
      © {date},
      <a href="https://www.dudatransport.com">
        dudatransport.com. All rights reserved
      </a>
    </div>
  </FooterWrapper>
)

export default Footer
