/* eslint-disable brace-style */
import React, { useEffect, useState, useRef } from "react"
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

  // add listener on scroll to change the navigation styles
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg)
    return () => {
      document.removeEventListener("scroll", changeNavBg)
    }
  }, [])

  // css class changes when the navigation bar is out of header image
  const changeNavBg = () => {
    const navbar = document.getElementsByTagName("ul")[0]
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add(headerStyles.colored)
    } else {
      navbar.classList.remove(headerStyles.colored)
    }
  }

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
  const menuBurgerClass = classnames(
    headerStyles.navbarList,
    { [headerStyles.open]: isOpen },
    { [headerStyles.colored]: window.scrollY > window.innerHeight }
  )

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
              <a href="#pastevents">Nos marchés</a>
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
      <ScrollDownLottie />
    </BackgroundImage>
  )
}

export default Header
