import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Helmet>
      <html lang="fr" />
      <meta name="description" content={data.site.siteMetadata.description} />
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>
  )
}

export default Head
