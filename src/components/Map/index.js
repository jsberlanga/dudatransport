import React from "react"
import styled from "styled-components"

import { styles } from "../../utils"
import EuropeMap from "../../images/map/map2.svg"

const MapWrapper = styled.div`
  grid-area: map;

  background: ${styles.colors.mainLight};
  margin: 3rem auto;
  text-align: center;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-column-gap: 1rem;
  box-shadow: 2px 2px 5px -3px ${styles.colors.darkGray};
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  .text {
    padding: 3rem;
    .title > h3 {
      color: ${styles.colors.brown};
      font-weight: 700;
    }
    .subtitle {
      margin-top: 3rem;
    }
  }
`

const Map = () => {
  return (
    <MapWrapper>
      <img src={EuropeMap} alt="European Map" />
      <div className="text">
        <div className="title">
          <h3>We Provide Service All Across Europe</h3>
        </div>
        <div className="subtitle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            dolor impedit atque, doloremque incidunt voluptates qui itaque
            debitis laborum nemo?
          </p>
        </div>
      </div>
    </MapWrapper>
  )
}
export default Map
