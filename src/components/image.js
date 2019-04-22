import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MainImage = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.image.childImageSharp.fluid} />}
  />
)

export default MainImage
