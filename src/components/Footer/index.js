import React from "react"
import styled from "styled-components"
import logo from "../../images/icon.png"

const date = new Date().getFullYear()

const FooterWrapper = styled.footer`
  grid-area: footer;
  height: 2.5rem;
  bottom: 0;
  right: 0;
`
const Footer = () => (
  <FooterWrapper>
    <div>© {date}, </div>
    <a href="https://www.dudatransport.com">
      dudatransport.com. All rights reserved
    </a>
    <img
      src={logo}
      alt="logo"
      style={{
        width: "2.4rem",
        marginLeft: "0.4rem",
      }}
    />
  </FooterWrapper>
)

export default Footer
