import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// Locals imports
import introStyles from "../assets/styles/intro.module.scss"

const Intro = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulSectionSimple {
        edges {
          node {
            contenu {
              contenu
            }
            titreSection
          }
        }
      }
    }
  `)

  const texts = data.allContentfulSectionSimple.edges

  return texts.map(text => (
    <div className={introStyles.container} id="intro" key="introductionSection">
      <h1 className={introStyles.title}>{text.node.titreSection}</h1>
      <h2 className={introStyles.subtitle}>Par la team Etsy Auvergne</h2>
      <p
        className={introStyles.paragraphe}
        dangerouslySetInnerHTML={{ __html: text.node.contenu.contenu }}
      />
    </div>
  ))
}

export default Intro
