import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = ({ page }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="fr" />
      <meta
        name="description"
        content="Collectif Les Créatifs Auvergnats, Etsy, fait-main, local"
      />
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
  )
}

export default Head
