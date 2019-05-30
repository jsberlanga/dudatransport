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
    justify-content: space-between;

    .title {
      margin: 1rem 0;
    }
    .subtitle {
      text-align: justify;
      margin: 2rem 1rem;
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
    border: 1.2px solid ${styles.colors.brown};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 3rem;
  }
  @media (max-width: 360px) {
    margin: 0 1rem;
  }
`

const Services = () => {
  return (
    <ServicesWrapper>
      <div className="card">
        <div>
          <img src={delivery} alt="delivery" />
          <div className="title" />
          <h4>Safe Delivery</h4>
        </div>
        <div className="subtitle">
          <p>
            Duda Transport is committed to being a responsible community
            partner. Because of this commitment we are one of the safest
            carriers in the industry. You can trust our company for your
            transport.
          </p>
        </div>
        <Link className="link" to="/services">
          Learn more →
        </Link>
      </div>

      <div className="card">
        <div>
          <img src={fast} alt="fast" />
          <div className="title" />
          <h4>Express Service</h4>
        </div>
        <div className="subtitle">
          <p>
            Providing high-quality express transport that delivers on its
            promise. Cost effective transport that provides experienced
            carriers, which can minimize the additional cost associated with
            transport.
          </p>
        </div>
        <Link className="link" to="/services">
          Learn more →
        </Link>
      </div>

      <div className="card">
        <div>
          <img src={support} alt="support" />
          <div className="title" />
          <h4>24/7 Support</h4>
        </div>
        <div className="subtitle">
          <p>
            We provide 24/7 notifications and support to our clients. If you
            have any questions about our ground transport and freight services,
            please contact us. We will be happy to talk to you at any time!
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
