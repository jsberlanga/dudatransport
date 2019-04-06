import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../utils"

import delivery from "../../images/services/delivery.svg"
import fast from "../../images/services/fast.svg"
import support from "../../images/services/support.svg"

const ServicesWrapper = styled.div`
  grid-area: services;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  grid-gap: 2rem;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    * {
      margin: 0.4rem 0;
    }
  }

  img {
    width: 5rem;
  }

  .link {
    padding: 0.7rem;
    color: ${styles.colors.brown};
    font-weight: 400;
    border: 1px solid ${styles.colors.brown};
  }
  .link:hover {
    border: 2px solid ${styles.colors.brown};
  }
`

const Services = () => {
  return (
    <ServicesWrapper>
      <div className="card">
        <img src={delivery} alt="delivery" />
        <div className="title">
          <h4>Safe Delivery</h4>
        </div>
        <div className="subtitle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolor impedit atque, doloremque incidunt voluptates qui itaque
            debitis laborum nemo?
          </p>
        </div>
        <Link className="link" to="/services">
          Learn more →
        </Link>
      </div>
      <div className="card">
        <img src={fast} alt="fast" />
        <h4>Express Service</h4>
        <div className="title" />
        <div className="subtitle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolor impedit atque, doloremque incidunt voluptates qui itaque
            debitis laborum nemo?
          </p>
        </div>
        <Link className="link" to="/services">
          Learn more →
        </Link>
      </div>
      <div className="card">
        <img src={support} alt="support" />
        <div className="title">
          <h4>24/7 Support</h4>
        </div>
        <div className="subtitle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolor impedit atque, doloremque incidunt voluptates qui itaque
            debitis laborum nemo?
          </p>
        </div>
        <Link className="link" to="/services">
          Learn more →
        </Link>
      </div>
    </ServicesWrapper>
  )
}

export default Services
