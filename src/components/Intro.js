import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// Locals imports
import introStyles from "../assets/styles/intro.module.scss"

const Intro = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSectionSimple(contentful_id: { eq: "Rd5xmCgxTraBUG0zCRX4N" }) {
        contenu {
          contenu
        }
        titreSection
      }
    }
  `)

  return (
    <div className={introStyles.container} id="intro">
      <h2 className={introStyles.title}>
        {data.contentfulSectionSimple.titreSection}
      </h2>
      <h3 className={introStyles.subtitle}>Par la team Etsy Auvergne</h3>
      <p
        className={introStyles.paragraphe}
        dangerouslySetInnerHTML={{
          __html: data.contentfulSectionSimple.contenu.contenu,
        }}
      />
    </div>
  )
}

export default Intro
