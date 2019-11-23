/* eslint-disable brace-style */
import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ScrollspyNav from "react-scrollspy-nav"

// Locals imports
import headerStyles from "../assets/styles/header.module.scss"
//import banner from "../assets/images/header.jpg"
import logo from "../assets/images/logo_white.png"

const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg)
  }, [])

  const changeNavBg = () => {
    const navbar = document.getElementsByTagName("nav")[0]
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add(headerStyles.colored)
    } else {
      navbar.classList.remove(headerStyles.colored)
    }
  }

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/header.jpg/" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="header"
      fluid={data.file.childImageSharp.fluid}
      className={headerStyles.header}
    >
      <ScrollspyNav
        scrollTargetIds={[
          "intro",
          "team",
          "nextevent",
          "creators",
          "pastevents",
          "contact",
        ]}
        activeNavClass={headerStyles.navbarActive}
        scrollDuration="200"
        headerBackground="true"
      >
        <nav className={headerStyles.navbar}>
          <ul>
            <li>
              <a href="/">
                <img
                  src={logo}
                  alt="Logo Créatifs auvergnats"
                  className={headerStyles.logoNav}
                />
              </a>
            </li>
            <li>
              <a href="#intro">Qui sommes-nous ?</a>
            </li>
            <li>
              <a href="#team">Organisateurs</a>
            </li>
            <li>
              <a href="#nextevent">Prochain événement</a>
            </li>
            <li>
              <a href="#creators">Les créatifs</a>
            </li>
            <li>
              <a href="#pastevents">Galerie</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </ScrollspyNav>

      <img
        src={logo}
        alt="Logo Créatifs auvergnats"
        className={headerStyles.logoBan}
      />
    </BackgroundImage>
  )
}

export default Header
