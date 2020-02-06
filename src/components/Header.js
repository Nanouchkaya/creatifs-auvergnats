/* eslint-disable brace-style */
import React, { useState, useRef } from "react"
import { useMediaQuery } from "react-responsive"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import ScrollspyNav from "react-scrollspy-nav"
import classnames from "classnames"

// Locals imports
import headerStyles from "../assets/styles/header.module.scss"
import logo from "../assets/images/logo_white.png"
import ScrollDownLottie from "./ScrollDownLottie"
import { useOnClickOutside } from "../hooks"

const Header = () => {
  // fetch header image
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

  // Define media query
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 980px)",
  })
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 980px)" })

  // Define hamburger menu state (mobile)
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const menuBurgerClass = classnames(headerStyles.navbarList, {
    [headerStyles.open]: isOpen,
  })

  // Close the menu by clicking outside of it
  const node = useRef()
  useOnClickOutside(node, () => setIsOpen(false))

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
        <nav className={headerStyles.navbar} ref={node}>
          {isTabletOrMobile && (
            <button
              type="button"
              onClick={toggleMenu}
              className={classnames(headerStyles.menuButton, {
                [headerStyles.open]: isOpen,
              })}
            >
              <div />
              <div />
              <div />
            </button>
          )}
          <ul className={menuBurgerClass}>
            {isDesktopOrLaptop && (
              <li>
                <a href="/">
                  <img
                    src={logo}
                    alt="Logo Créatifs auvergnats"
                    className={headerStyles.logoNav}
                  />
                </a>
              </li>
            )}
            <li>
              <a href="#intro" onClick={toggleMenu}>
                Qui sommes-nous ?
              </a>
            </li>
            <li>
              <a href="#team" onClick={toggleMenu}>
                Organisateurs
              </a>
            </li>
            <li>
              <a href="#nextevent" onClick={toggleMenu}>
                Prochain événement
              </a>
            </li>
            <li>
              <a href="#creators" onClick={toggleMenu}>
                Les créatifs
              </a>
            </li>
            <li>
              <a href="#pastevents" onClick={toggleMenu}>
                Nos marchés
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </ScrollspyNav>
      <img
        src={logo}
        alt="Logo Créatifs auvergnats"
        className={headerStyles.logoBan}
      />
      <ScrollDownLottie />
    </BackgroundImage>
  )
}

export default Header
