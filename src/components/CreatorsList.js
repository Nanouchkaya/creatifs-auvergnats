import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Locals imports
import creatorslistStyles from "../assets/styles/creatorsList.module.scss"

const CreatorsList = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSectionSimple(contentful_id: { eq: "5zIf7UBSEntuOGwTR5xyOE" }) {
        contenu {
          contenu
        }
        titreSection
      }
      allContentfulCategorieDeProduit(sort: { order: ASC, fields: name }) {
        edges {
          node {
            contentful_id
            name
            creators {
              name
              link
              id
            }
          }
        }
      }
    }
  `)

  const categories = data.allContentfulCategorieDeProduit.edges

  return (
    <div className={creatorslistStyles.container} id="creators">
      <h2 className={creatorslistStyles.title}>
        {data.contentfulSectionSimple.titreSection}
      </h2>
      <p className={creatorslistStyles.paragraphe}>
        {data.contentfulSectionSimple.contenu.contenu}
      </p>

      <div className={creatorslistStyles.categories}>
        {categories.map(category => (
          <div
            className={creatorslistStyles.category}
            key={category.node.contentful_id}
          >
            <h3 className={creatorslistStyles.categoryName}>
              {category.node.name}
            </h3>
            <ul className={creatorslistStyles.categoryList}>
              {category.node.creators.map(creator => (
                <li
                  className={creatorslistStyles.categoryCreator}
                  key={creator.id}
                >
                  <a
                    href={creator.link}
                    className={creatorslistStyles.categoryLink}
                  >
                    {creator.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        href="https://docs.google.com/forms/d/1-2tqw4zxiisUO8HJ-OTVs766axd4dRdXIgA-0W6KWBI"
        className={creatorslistStyles.link}
      >
        ~ Rejoindre le collectif ~
      </a>
    </div>
  )
}

export default CreatorsList
