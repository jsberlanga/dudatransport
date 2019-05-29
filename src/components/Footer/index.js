import React from "react"
import styled from "styled-components"

import { styles } from "../../utils"

import logo from "../../images/logo.svg"

import { FaRegEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const date = new Date().getFullYear()

const FooterWrapper = styled.footer`
  color: #fff;
  letter-spacing: 1.2px;
  grid-area: footer;
  bottom: 0;
  right: 0;
  background: ${styles.colors.darkGray};
  color: ${styles.colors.mainLight};
  padding: 4em;
  text-align: left;

  display: grid;
  grid-column-gap: 5rem;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template: "company contact copyright";

  li {
    margin-top: 0.8rem;
    * {
      margin-right: 0.7rem;
    }
  }

  .company-info {
    grid-area: company;
    align-content: center;
    font-style: italic;
    img {
      margin-bottom: 0.7rem;
      height: 5rem;
      transform: skew(-7deg);
    }
  }

  .contact-info {
    grid-area: contact;
    margin-top: 1rem;
    .title {
      font-size: 1.3rem;
      font-weight: 700;
    }
  }

  .copyright {
    grid-area: copyright;
    text-align: right;
    align-self: end;
    font-weight: 700;
  }
  @media (max-width: 1200px) {
    grid-template:
      "company contact"
      "copyright copyright" / 4fr 5fr;
    grid-row-gap: 5rem;
  }

  @media (max-width: 768px) {
    grid-template:
      "company"
      "contact"
      "copyright";
    grid-row-gap: 3rem;
    .copyright {
      text-align: left;
    }
  }
`
const Footer = () => (
  <FooterWrapper>
    <div className="company-info">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="text_super_small">
        Duda Transport is one of Poland's leading transport companies. Its
        strong market position lies in the freight transport, contract logistics
        and overland businesses.
      </div>
    </div>
    <div className="contact-info text_super_small">
      <div className="title">Contact Info</div>
      <ul>
        <li>
          <p>
            <FaMapMarkerAlt />
            Milocice 136, Slomniki
          </p>
          <p>32-090, Poland</p>
        </li>
        <li>
          <FaPhone />
          +48 884 141 049
        </li>
        <li>
          <FaPhone />
          +48 510 706 712 (Internation Line)
        </li>
        <li>
          <FaRegEnvelope />
          dudatransport@gmail.com
        </li>
      </ul>
    </div>
    <div className="copyright text_small">
      © {date},{" "}
      <a href="http://www.dudatransport.com/">
        dudatransport.com. All rights reserved.
      </a>
    </div>
  </FooterWrapper>
)

export default Footer
