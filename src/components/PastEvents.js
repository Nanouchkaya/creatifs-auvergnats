import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Locals imports
import pasteventsStyles from "../assets/styles/pastEvents.module.scss"

const PastEvents = ({ sal }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { regex: "/photos/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100) {
                aspectRatio
                sizes
                src
                srcSet
                originalName
              }
              id
            }
          }
        }
      }
    }
  `)

  return (
    <div
      className={pasteventsStyles.container}
      data-sal={sal[0]}
      data-sal-delay={sal[1]}
      data-sal-easing={sal[2]}
      id="pastevents"
    >
      <h1 className={pasteventsStyles.title}>Nos marchés terminés</h1>
      <p className={pasteventsStyles.paragraphe}>
        Depuis 20XX, nous organisons des événements et participons à des marchés
        de créateurs. Apprenez en plus sur l'ambiance du collectif à travers
        notre galerie de photos ci-dessous.
      </p>
      <div className={pasteventsStyles.gallery}>
        {data.allFile.edges.map(({ node }) => {
          return (
            <Img
              key={node.id}
              fluid={node.childImageSharp.fluid}
              alt={node.childImageSharp.fluid.originalName}
              className={pasteventsStyles.photo}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PastEvents
