import React from "react"
import styled from "styled-components"

import { styles } from "../../utils"
import EuropeMap from "../../images/map/EuropeMap.svg"

const MapWrapper = styled.div`
  grid-area: map;

  background: ${styles.colors.mainLight};
  margin: -2rem auto 2rem;
  text-align: center;
  display: grid;
  grid-template-columns: 2.5fr 2fr;
  grid-column-gap: 1rem;
  box-shadow: 2px 2px 5px -3px ${styles.colors.darkGray};
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  .text {
    padding: 2rem;
    .title > h3 {
      color: ${styles.colors.brown};
      letter-spacing: -4px;
      text-transform: uppercase;
      font-size: 3.2rem;
    }
    .subtitle {
      margin-top: 3rem;
    }
  }
  @media (max-width: 1130px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 425px) {
    max-width: 100vw;
  }
`

const Map = () => {
  return (
    <MapWrapper>
      <img src={EuropeMap} alt="European-Map" />
      <div className="text">
        <div className="title">
          <h3>Service All Across Europe</h3>
        </div>
        <div className="subtitle">
          <p>
            We work all over Europe 7 days a week. We provide logistics services
            with services such as transport of partial loads (LTL),
            transportation of full truck loads (FTL) all over Europe. Our main
            routes are in: Poland, Germany, the United Kingdom, Belgium, the
            Netherlands, France, Italy and Czech Republic.
          </p>
        </div>
      </div>
    </MapWrapper>
  )
}
export default Map
