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
    <>
      {page === "index" && (
        <Helmet title={`${page} | ${data.site.siteMetadata.title}`} />
      )}
      {page === "Mentions Légales" && (
        <Helmet title={`${page} | ${data.site.siteMetadata.title}`} />
      )}
    </>
  )
}

export default Head
