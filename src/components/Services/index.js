import React from "react"
import styled from "styled-components"

import delivery from "../../images/services/delivery.svg"
import fast from "../../images/services/fast.svg"
import support from "../../images/services/support.svg"

const ServicesWrapper = styled.div`
  grid-area: services;
  img {
    width: 5rem;
  }
`

const Services = () => {
  return (
    <ServicesWrapper>
      <img src={delivery} alt="delivery" />
      <img src={fast} alt="delivery" />
      <img src={support} alt="delivery" />
      <h1>Services go here</h1>
    </ServicesWrapper>
  )
}

export default Services
