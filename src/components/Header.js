import React from "react"
import ScrollspyNav from "react-scrollspy-nav"

// Locals imports
import headerStyles from "../assets/styles/header.module.scss"
import banner from "../assets/images/header.jpg"
import logo from "../assets/images/logo_white.png"

const Header = () => (
  <header
    className={headerStyles.header}
    style={{ "background-image": `url(${banner})` }}
  >

    <ScrollspyNav
      scrollTargetIds={["intro", "team", "nextevent", "creators", "contact"]}
      activeNavClass={headerStyles.navbarActive}
      scrollDuration="200"
      headerBackground="true"
    >
      <nav className={headerStyles.navbar}>
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
          <a href="#contact">Contact</a>
        </li>
      </nav>
    </ScrollspyNav>

    <img src={logo} alt="Logo Créatifs auvergnats" className={headerStyles.logoBan} />

  </header>
)

export default Header
