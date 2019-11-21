import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// Locals imports
import footerStyles from "../assets/styles/footer.module.scss"

const Footer = ({ sal }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <footer
      className={footerStyles.footer}
      data-sal={sal[0]}
      data-sal-delay={sal[1]}
      data-sal-easing={sal[2]}
    >
      <p>Développement {author}, © 2019</p>
      <p>
        Photographies{" "}
        <a href="https://www.amandinebaudet.com/">Amandine Baudet</a>
      </p>
      <p>Logo Cynydd</p>
    </footer>
  )
}

export default Footer
