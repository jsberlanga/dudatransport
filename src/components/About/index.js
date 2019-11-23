import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../utils"

import fleet from "../../images/fleet.jpg"

const AboutWrapper = styled.div`
  grid-area: about;

  margin: 3rem 3rem;
  text-align: center;
  display: grid;
  grid-template-columns: 5fr 4.2fr;
  box-shadow: 2px 2px 5px -3px ${styles.colors.darkGray};

  .about-image {
    background-image: url(${fleet});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .text {
    padding: 2rem 3rem;
    background: ${styles.colors.blue};
    color: ${styles.colors.mainLight};
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    justify-content: center;

    .title > h3 {
      letter-spacing: -4px;
      text-transform: uppercase;
      font-size: 3.2rem;
    }
    .subtitle {
      margin-top: 1rem;
      p {
        margin: 1.25rem 0;
      }
    }
    .link {
      padding: 0.7rem;
      background: #915b4a;
      background: ${styles.colors.brown};
      font-weight: 400;

      &:hover {
        background: ${styles.colors.brown2};
      }
    }
  }

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
    margin: 2rem 0.7rem;
  }
`

const About = () => {
  return (
    <AboutWrapper>
      <div className="about-image" />
      <div className="text">
        <div className="title">
          <h3>MORE ABOUT US</h3>
        </div>
        <div className="subtitle">
          <p>
            Andrzej Duda Transport & Logistics is a road freight company
            specialising in international dedicated and express transport with
            light vehicles (1,4t capacity).
          </p>
          <p>
            Our company has a modern fleet of trucks, equipped with GPS
            navigation that allows us to monitor the current transport position.
          </p>
          <p>
            We cooperate with reliable and proven transport and logistic
            companies and are able to provide transport services within whole
            Europe.
          </p>
        </div>
        <Link className="link" to="/services">
          More details of our services →
        </Link>
      </div>
    </AboutWrapper>
  )
}

export default About
