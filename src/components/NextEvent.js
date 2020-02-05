/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// Locals imports
import nexteventStyles from "../assets/styles/nextEvent.module.scss"

const NextEvent = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSectionSimple(contentful_id: { eq: "4Gkro9hUVfXtQg6lr5QUbh" }) {
        contenu {
          contenu
        }
        titreSection
        image {
          fluid {
            aspectRatio
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
        link
      }
    }
  `)

  const image = data.contentfulSectionSimple.image.fluid

  return (
    <div className={nexteventStyles.container} id="nextevent">
      <h2 className={nexteventStyles.title}>
        {data.contentfulSectionSimple.titreSection}
      </h2>
      <a
        className={nexteventStyles.link}
        href={data.contentfulSectionSimple.link}
      >
        <Img
          className={nexteventStyles.banner}
          fluid={image}
          alt="Marché de Noel - 7 et 8 décembre 2019"
        />
      </a>
      <p
        className={nexteventStyles.paragraphe}
        dangerouslySetInnerHTML={{
          __html: data.contentfulSectionSimple.contenu.contenu,
        }}
      />
    </div>
  )
}

export default NextEvent
