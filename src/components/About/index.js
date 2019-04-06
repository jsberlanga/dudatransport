import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../utils"

import fleet from "../../images/fleet.jpg"

const AboutWrapper = styled.div`
  grid-area: about;

  margin: 3rem auto;
  text-align: center;
  display: grid;
  grid-template-columns: 5fr 4.2fr;
  box-shadow: 2px 2px 5px -3px ${styles.colors.darkGray};

  margin: 0 2rem;

  .image {
    background-image: url(${fleet});
    background-size: cover;
    background-repeat: no-repeat;
  }
  .text {
    padding: 3rem;
    background: ${styles.colors.blue};
    color: ${styles.colors.mainLight};
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: left;
    justify-content: center;

    .title > h3 {
      font-weight: 700;
    }
    .subtitle {
      margin-top: 3rem;
      p {
        margin: 1.25rem 0;
      }
    }
    .link {
      padding: 0.7rem;
      background: #915b4a;
      background: ${styles.colors.brown};
      font-weight: 400;
    }
  }
`

const About = () => {
  return (
    <AboutWrapper>
      <div className="image" />
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
        <Link className="link" to="/about">
          More details →
        </Link>
      </div>
    </AboutWrapper>
  )
}

export default About
