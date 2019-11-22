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
                ...GatsbyImageSharpFluid
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
        Depuis 2016, nous organisons des événements et participons à des marchés
        de créateurs. Apprenez en plus sur l'ambiance du collectif à travers
        notre galerie de photos ci-dessous.
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
        <li className={pasteventsStyles.event}>
          <h3 className={pasteventsStyles.eventName}>
            Etsy Made in France Spring
          </h3>
          <span className={pasteventsStyles.eventDate}>18 & 19 mai 2019 </span>
          <address className={pasteventsStyles.eventAddress}>
            Espace Epicentre Factory, 5 rue saint-dominque à Clermont-Ferrand
          </address>
          <a
            className={pasteventsStyles.eventLink}
            href="https://www.facebook.com/events/329957927706463/?acontext=%7B%22ref%22%3A51%2C%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D"
          >
            Liste des créateurs participants
          </a>
        </li>
        <li className={pasteventsStyles.event}>
          <h3 className={pasteventsStyles.eventName}>
            Etsy Made in France Edition de Noël
          </h3>
          <span className={pasteventsStyles.eventDate}>
            8 & 9 décembre 2018
          </span>
          <address className={pasteventsStyles.eventAddress}>
            Espace Epicentre Factory, 5 rue saint-dominque à Clermont-Ferrand
          </address>
          <a className={pasteventsStyles.eventLink} href="">
            Liste des créateurs participants
          </a>
        </li>
        <li className={pasteventsStyles.event}>
          <h3 className={pasteventsStyles.eventName}>
            Etsy Made in France Spring
          </h3>
          <span className={pasteventsStyles.eventDate}>2 & 3 juin 2019</span>
          <address className={pasteventsStyles.eventAddress}>
            Espace Epicentre Factory, 5 rue saint-dominque à Clermont-Ferrand
          </address>
          <a
            className={pasteventsStyles.eventLink}
            href="https://www.facebook.com/events/437276076700175/?acontext=%7B%22ref%22%3A51%2C%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D"
          >
            Liste des créateurs participants
          </a>
        </li>
        <li className={pasteventsStyles.event}>
          <h3 className={pasteventsStyles.eventName}>
            Etsy Made in France Edition de Noël
          </h3>
          <span className={pasteventsStyles.eventDate}>
            8 & 9 décembre 2017
          </span>
          <address className={pasteventsStyles.eventAddress}>
            Espace Epicentre Factory, 5 rue saint-dominque à Clermont-Ferrand
          </address>
          <a
            className={pasteventsStyles.eventLink}
            href="https://www.facebook.com/events/1900658503587072/?acontext=%7B%22ref%22%3A51%2C%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D"
          >
            Liste des créateurs participants
          </a>
        </li>
        <li className={pasteventsStyles.event}>
          <h3 className={pasteventsStyles.eventName}>
            Foire de Clermont-Cournon
          </h3>
          <span className={pasteventsStyles.eventDate}>
            9 au 11 septembre 2017
          </span>
          <address className={pasteventsStyles.eventAddress}>
            Grande Hall D'auvergne
          </address>
        </li>
        <li className={pasteventsStyles.event}>
          <h3 className={pasteventsStyles.eventName}>
            Etsy Made in France Première Edition
          </h3>
          <span className={pasteventsStyles.eventDate}>26 novembre 2016</span>
          <address className={pasteventsStyles.eventAddress}>
            Showrom les Dilettantes à Clermont-Ferrand
          </address>
          <a
            className={pasteventsStyles.eventLink}
            href="https://www.facebook.com/events/1765180753741457/?acontext=%7B%22ref%22%3A51%2C%22source%22%3A5%2C%22action_history%22%3A[%7B%22surface%22%3A%22page%22%2C%22mechanism%22%3A%22main_list%22%2C%22extra_data%22%3A%22%5C%22[]%5C%22%22%7D]%2C%22has_source%22%3Atrue%7D"
          >
            Liste des créateurs participants
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PastEvents
