import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Locals imports
import pasteventsStyles from "../assets/styles/pastEvents.module.scss"

const PastEvents = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulSectionSimple(contentful_id: { eq: "1dRR3AoldfRZXNaq17fA5q" }) {
        contenu {
          contenu
        }
        titreSection
      }
      allFile(filter: { relativeDirectory: { regex: "/photos/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
              id
            }
          }
        }
      }
      allContentfulEvenementTermine(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            date
            link
            title
            address
          }
        }
      }
    }
  `)

  const events = data.allContentfulEvenementTermine.edges

  return (
    <div className={pasteventsStyles.container} id="pastevents">
      <h2 className={pasteventsStyles.title}>
        {data.contentfulSectionSimple.titreSection}
      </h2>
      <p className={pasteventsStyles.paragraphe}>
        {data.contentfulSectionSimple.contenu.contenu}
      </p>
      <div className={pasteventsStyles.gallery}>
        {data.allFile.edges.map(({ node }) => {
          return (
            <Img
              key={node.childImageSharp.id}
              fluid={node.childImageSharp.fluid}
              alt={node.childImageSharp.fluid.originalName}
              className={pasteventsStyles.photo}
            />
          )
        })}
      </div>

      <ul className={pasteventsStyles.list}>
        {events.map(event => (
          <li className={pasteventsStyles.event} key={event.node.id}>
            <h3 className={pasteventsStyles.eventName}>{event.node.title}</h3>
            <span className={pasteventsStyles.eventDate}>
              {event.node.date}
            </span>
            <address className={pasteventsStyles.eventAddress}>
              {event.node.address}
            </address>
            {event.node.link && (
              <a className={pasteventsStyles.eventLink} href={event.node.link}>
                Liste des créateurs participants
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PastEvents
