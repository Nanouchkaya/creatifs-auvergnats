/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Locals imports
import nexteventStyles from "../assets/styles/nextEvent.module.scss"

const NextEvent = ({ sal }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { regex: "/next_event.jpg/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div
      className={nexteventStyles.container}
      data-sal={sal[0]}
      data-sal-delay={sal[1]}
      data-sal-easing={sal[2]}
      id="nextevent"
    >
      <h1 className={nexteventStyles.title}>Evénement à venir</h1>
      <a
        className={nexteventStyles.link}
        href="https://www.facebook.com/events/475607999707671/"
      >
        <Img
          className={nexteventStyles.banner}
          fluid={data.file.childImageSharp.fluid}
          alt="Marché de Noel - 7 et 8 décembre 2019"
        />
      </a>
      <p className={nexteventStyles.paragraphe}>
        Etsy Made in France célèbre Noël pour sa 6ème édition 🎄
        <br />
        Venez rencontrer les créateurs de votre région, tous indépendants et
        passionnés, et découvrir leurs histoires, leurs créations et leur
        savoir-faire... et des cadeaux de Noël uniques !
      </p>
      <div className={nexteventStyles.paragraphe}>
        ⭐ Samedi 7 décembre 2019 de 10h à 18h et dimanche 8 décembre 2019 de
        10h à 17h.
        <address>
          Restaurant Les Artistes, 97 avenue de la république - 63000
          Clermont-Ferrand.
        </address>
      </div>
      <p className={nexteventStyles.paragraphe}>
        🚉 TRAM à proximité arrêt 1er mai et parking gratuit pour les visiteurs
        👍
      </p>
    </div>
  )
}

export default NextEvent
